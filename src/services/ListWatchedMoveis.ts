import { getRepository } from 'typeorm';

import Movies from '../models/Movies';

interface Request {
    profile_id: string
}


class ListWatchedMoveis {
    public async execute({ profile_id }: Request): Promise<Movies[]> {
        const moviesRepository = getRepository(Movies);

        const watchedMoveis = await moviesRepository.find({
            where: {
                profile_id,
                watched: true
            }
        })

        return watchedMoveis

    }
}

export default ListWatchedMoveis;