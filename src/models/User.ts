
import { Entity, Column, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";

import Profile from "./Profile";

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column('date')
    birthday: Date;

    @Column()
    facebook_id?: string

    @OneToMany(() => Profile, profile => profile.user)
    profiles: Profile[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default User;