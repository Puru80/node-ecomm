const bcrypt = require('bcrypt');
const {EntitySchema} = require("typeorm");

class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10);
    }
}

UserEntity = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        email: {
            type: "varchar",
            unique: true
        },
        password: {
            type: "varchar",
        }
    }
})

module.exports = {User, UserEntity};