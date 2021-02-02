import { getRepository } from 'typeorm';

import WatchedMoveis from '../models/WatchedMovie';

interface Request {
    user_id: string
}

class ListWatchedMoveis {
    public async execute({ user_id }: Request): Promise<WatchedMoveis[]> {
        const watchedMoveisRepository = getRepository(WatchedMoveis);

        const watchedMoveis = await watchedMoveisRepository.find({
            where: {
                user_id
            }
        })

        return watchedMoveis;

    }
}

export default ListWatchedMoveis;