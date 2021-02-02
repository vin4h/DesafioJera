import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn } from "typeorm";
import User from "./User";

@Entity('watchedmovies')
class WatchedMovies {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    user_id: string

    @Column()
    genre: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User

    @CreateDateColumn()
    created_at: Date;


}

export default WatchedMovies;