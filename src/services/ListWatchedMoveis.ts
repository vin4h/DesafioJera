import { getRepository } from 'typeorm';

import WatchedMovies from '../models/WatchedMovie';

interface Request {
    profile_id: string
}


class ListWatchedMoveis {
    public async execute({ profile_id }: Request): Promise<WatchedMovies[]> {
        const watchedMoveisRepository = getRepository(WatchedMovies);

        const watchedMoveis = await watchedMoveisRepository.find({
            where: {
                profile_id
            }
        })

        return watchedMoveis

    }
}

export default ListWatchedMoveis;