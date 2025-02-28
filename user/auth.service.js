const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('./user.repository');
const User = require("./User").User;

class AuthService {
    async register(email, password) {
        // const userRepository = dataSource.getRepository(UserRepository);
        const existingUser = await userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('Email already exists');
        }

        const newUser = new User();
        newUser.email = email;
        newUser.password = password;
        await newUser.hashPassword();

        console.log("Password: ", newUser.password);
        await userRepository.save([newUser], {reload: false});
        return newUser;
    }

    async login(email, password) {
        const user = await userRepository.findByEmail(email);
        if (!user) {
            throw new Error('Invalid email or password');
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new Error('Invalid email or password');
        }
        return {
            status: "success",
            token: jwt.sign({userId: user.id}, process.env.JWT_SECRET_KEY, {
                expiresIn: process.env.JWT_SECRET_EXPIRY,
            })
        };
    }
}

module.exports = AuthService;