import { getRepository } from 'typeorm';

import Movies from '../models/Movies';

interface Request {
    id: number,
    title: string,
    genre_ids: Object,
    profile_id: string
    to_watch: boolean
}

class CreateWatchList {
    public async execute({ id, title, genre_ids, profile_id, to_watch }: Request): Promise<Movies> {
        const moviesRepository = getRepository(Movies);

        const findMovies = await moviesRepository.findOne({
            where: {
                id,
                profile_id,
            }
        });

        if (findMovies) {
            if (findMovies.to_watch) {
                throw new Error("Filme já está na lista para assistir");
            } else {
                const updateMovie = moviesRepository.create({
                    id: findMovies.id,
                    title: findMovies.title,
                    genre_ids: findMovies.genre_ids,
                    profile_id: findMovies.profile_id,
                    watched: findMovies.watched ? findMovies.watched : false,
                    to_watch
                });

                await moviesRepository.save(updateMovie);
                
                return updateMovie
            }
        }

        const movie = moviesRepository.create({
            id,
            title,
            genre_ids,
            profile_id,
            to_watch,
            watched: false
        });

        await moviesRepository.save(movie)

        return movie;

    }
}

export default CreateWatchList;