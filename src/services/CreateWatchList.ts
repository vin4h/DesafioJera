import { getRepository } from 'typeorm';

import Watchlist from '../models/Watchlist';

interface Request {
    id: number,
    title: string,
    genre: string,
    profile_id: string
}

class CreateWatchList {
    public async execute({ id, title, genre, profile_id }: Request): Promise<Watchlist> {
        const watchlistRepository = getRepository(Watchlist);

        const findWatchedMoveis = await watchlistRepository.findOne({
            where: {
                id
            }
        });

        if(findWatchedMoveis){
            throw new Error("Filme já está na lista");
        }

        const movie = watchlistRepository.create({
            id,
            title,
            genre,
            profile_id
        });

        await watchlistRepository.save(movie);

        return movie;

    }
}

export default CreateWatchList;