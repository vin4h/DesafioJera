import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn } from "typeorm";
import Profile from "./Profile";

@Entity('movies')
class Movies {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    profile_id: string
    
    @Column('simple-json')
    genre_ids: Number[]

    @Column()
    watched: boolean
    
    @Column()
    to_watch: boolean

    @ManyToOne(() => Profile)
    @JoinColumn({ name: 'profile_id' })
    profile: Profile

    @CreateDateColumn()
    created_at: Date;


}

export default Movies;