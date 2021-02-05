import { json } from 'express';
import { getRepository } from 'typeorm';

import Movies from '../models/Movies';

interface Request {
    id: number,
    title: string,
    genre_ids: Object,
    watched: boolean
    profile_id: string
}

class CreateWatchedMoveis {
    public async execute({ id, title, genre_ids, profile_id, watched }: Request): Promise<Movies> {
        const moviesRepository = getRepository(Movies);

        const findMovies = await moviesRepository.findOne({
            where: {
                profile_id,
                id
            }
        });

        if(findMovies){
            if(findMovies.watched){
                throw new Error("Filme já está na lista de assistidos");
            }else{
                const updateMovie = moviesRepository.create({
                    id: findMovies.id,
                    title: findMovies.title,
                    genre_ids: findMovies.genre_ids,
                    watched,
                    to_watch: findMovies.to_watch ? findMovies.to_watch : false
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
            watched,
            to_watch: false
        });

        await moviesRepository.save(movie);

        return movie;

    }
}

export default CreateWatchedMoveis;