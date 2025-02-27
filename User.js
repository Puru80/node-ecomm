const { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } = require('typeorm');

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id;

    @Column({ unique: true })
    email;

    @Column()
    password;

    @BeforeInsert()
    async hashPassword() {
        const bcrypt = require('bcrypt');
        this.password = await bcrypt.hash(this.password, 10);
    }
}

module.exports = User;