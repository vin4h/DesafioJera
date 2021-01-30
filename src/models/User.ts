import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity('users')
class User {

    @ObjectIdColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column('date')
    brithDate: Date;


}

export default User;