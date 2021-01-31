
import { Entity, Column, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn } from "typeorm";

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

    @Column()
    max_profile: number

    @OneToMany(() => Profile, profile => profile.user)
    @JoinColumn({ name: 'user_id' })
    profiles: Profile[];

    @CreateDateColumn()
    created_at: Date;

}

export default User;