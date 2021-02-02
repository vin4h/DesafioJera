import { getRepository } from 'typeorm';

import WatchedMoveis from '../models/WatchedMovie';

interface Request {
    profile_id: string
}

class ListWatchedMoveis {
    public async execute({ profile_id }: Request): Promise<WatchedMoveis[]> {
        const watchedMoveisRepository = getRepository(WatchedMoveis);

        const watchedMoveis = await watchedMoveisRepository.find({
            where: {
                profile_id
            }
        })

        return watchedMoveis;

    }
}

export default ListWatchedMoveis;