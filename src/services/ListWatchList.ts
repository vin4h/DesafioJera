import { getRepository } from 'typeorm';

import WatchList from '../models/Watchlist';

interface Request {
    profile_id: string
}

class ListWatchList {
    public async execute({ profile_id }: Request): Promise<WatchList[]> {
        const watchListRepository = getRepository(WatchList);

        const watchList = await watchListRepository.find({
            where: {
                profile_id
            }
        })

        return watchList;

    }
}

export default ListWatchList;