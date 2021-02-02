import { getRepository } from 'typeorm';

import WatchedMoveis from '../models/WatchedMovie';

interface Request {
    id: number,
    title: string,
    genre: string,
    profile_id: string
}

class CreateWatchedMoveis {
    public async execute({ id, title, genre, profile_id }: Request): Promise<WatchedMoveis> {
        const watchedMoveisRepository = getRepository(WatchedMoveis);

        const findWatchedMoveis = await watchedMoveisRepository.findOne({
            where: {
                id
            }
        });

        if(findWatchedMoveis){
            throw new Error("Filme já está na lista");
        }

        const movie = watchedMoveisRepository.create({
            id,
            title,
            genre,
            profile_id
        });

        await watchedMoveisRepository.save(movie);

        return movie;

    }
}

export default CreateWatchedMoveis;