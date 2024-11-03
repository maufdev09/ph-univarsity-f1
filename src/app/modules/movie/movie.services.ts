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
const getMovieBySlug=async( slug: string )=>{
    const result =await  Movie.findOne({ slug:slug})
    return result
}
const getMovieBySlugs=async( slug: string )=>{
    const result =await  Movie.findOne({ slug:slug})
    return result
}


export const MovieServices={
    createMovie,
    getMovie,
    getMovieBySlug
    
}