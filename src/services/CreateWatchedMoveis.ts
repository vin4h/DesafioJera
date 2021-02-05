import { getRepository } from 'typeorm';

import Movies from '../models/Movies';

interface Request {
    id: number,
    title: string,
    genre: string,
    genre_id: number,
    profile_id: string,
    watched: boolean
}

class CreateWatchedMoveis {
    public async execute({ id, title, genre, genre_id, profile_id, watched }: Request): Promise<Movies> {
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
                    genre: findMovies.genre,
                    genre_id: findMovies.genre_id,
                    profile_id: findMovies.profile_id,
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
            genre,
            genre_id,
            profile_id,
            watched,
            to_watch: false
        });

        await moviesRepository.save(movie);

        return movie;

    }
}

export default CreateWatchedMoveis;