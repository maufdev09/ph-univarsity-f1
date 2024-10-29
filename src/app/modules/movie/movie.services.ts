import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovie=async(payload:TMovie)=>{
    const result =await Movie.create(payload)
    return result
}
const getMovie=async()=>{
    const result =await Movie.find()
    return result
}
const getMovieById=async( movieId: string )=>{
    const result =await  Movie.findById({ _id:movieId})
    return result
}


export const MovieServices={
    createMovie,
    getMovie,
    getMovieById
    
}