import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn } from "typeorm";
import Profile from "./Profile";

@Entity('watchlists')
class Watchlist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    profile_id: string

    @Column()
    genre: string

    @ManyToOne(() => Profile)
    @JoinColumn({ name: 'profile_id' })
    profile: Profile

    @CreateDateColumn()
    created_at: Date;

}

export default Watchlist;