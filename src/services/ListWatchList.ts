import { getRepository } from 'typeorm';

import Movies from '../models/Movies';

interface Request {
    profile_id: string
}

class ListWatchList {
    public async execute({ profile_id }: Request): Promise<Movies[]> {
        const watchListRepository = getRepository(Movies);

        const watchList = await watchListRepository.find({
            where: {
                profile_id,
                to_watch: true
            }
        })

        return watchList;

    }
}

export default ListWatchList;