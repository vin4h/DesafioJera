import { getRepository } from 'typeorm';

import WatchedMoveis from '../models/WatchedMovie';

interface Request {
    id: string
}

class ListWatchedMoveis {
    public async execute({ id }: Request): Promise<WatchedMoveis[]> {
        const watchedMoveisRepository = getRepository(WatchedMoveis);

        const watchedMoveis = await watchedMoveisRepository.find({
            where: {
                user_id: id
            }
        })

        return watchedMoveis;

    }
}

export default ListWatchedMoveis;