import MaxGenreMoviesService from '../services/MaxGenreMoviesService';
import ListWatchedMoveis from '../services/ListWatchedMoveis';
import CreateWatchedMoveis from '../services/CreateWatchedMoveis';
import ListWatchList from '../services/ListWatchList';
import CreateWatchList from '../services/CreateWatchList';
import Movies from '../models/Movies';

interface Request {
    profile_id: string
}

interface NewMovie {
    id: number,
    title: string,
    genre_ids: Object,
    watched?: boolean,
    to_watch?: boolean,
    profile_id: string
}


class MovieController {
    public async maxGenre({ profile_id }: Request): Promise<Number> {
        const maxService = new MaxGenreMoviesService();

        const genre_id = maxService.execute({
            profile_id
        });

        return genre_id;
    }

    public async listWatched({ profile_id }: Request): Promise<Movies[]> {
        const listWatchedMoveis = new ListWatchedMoveis();

        const list = listWatchedMoveis.execute({
            profile_id
        });

        return list;
    }

    public async createWatched({ id, title, genre_ids, profile_id, watched }: NewMovie): Promise<Movies> {
        const createWatchedMoveis = new CreateWatchedMoveis();

        const movie = createWatchedMoveis.execute({
            id,
            title,
            genre_ids,
            profile_id,
            watched
        });

        return movie;
    }

    public async watchList({ profile_id }: Request): Promise<Movies[]> {
        const watchList = new ListWatchList();

        const list = watchList.execute({
            profile_id
        });

        return list;
    }

    public async createWatch({id, title, genre_ids, profile_id, to_watch}:NewMovie):Promise<Movies>{
        const createWatchlist = new CreateWatchList();

        const movie = createWatchlist.execute({
            id,
            title,
            genre_ids,
            profile_id,
            to_watch
        })

        return movie;
    }
}

export default MovieController;