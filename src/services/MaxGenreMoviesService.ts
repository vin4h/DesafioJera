import { getRepository } from 'typeorm';

import Movies from '../models/Movies';

interface Request {
    profile_id: string;
}

class MaxGenreMoviesService {
    public async execute({ profile_id }: Request): Promise<Number> {
        const moviesRepository = getRepository(Movies);

        const listMovies = await moviesRepository.find({
            where: {
                profile_id
            }
        })

        if (listMovies.length == 0) {
            return 18;
        }

        const listGenreIds: Number[] = [];

        for (let i = 0; i < listMovies.length; i++) {
            if (listMovies[i].genre_ids) {
                for (let j = 0; j < listMovies[i].genre_ids.length; j++) {
                    listGenreIds[j] = listMovies[i].genre_ids[j]
                }
            }
        }

        let max = [];

        const aux = listGenreIds.filter((element, i) => {
            if (listGenreIds.indexOf(element) !== i) {
                max.push(element);
            }
            return listGenreIds.indexOf(element) == i;
        })

        return aux[0];

    }
}

export default MaxGenreMoviesService;