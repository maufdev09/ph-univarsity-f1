import { Movie } from './movie.model';
import { Request, Response } from "express";
import { MovieServices } from "./movie.services";

const createMovieController=async (req: Request, res: Response)=>{
    const result =await MovieServices.createMovie(req.body)
    res.json({
        success: true,
        message: "Movie created successfully",
        data: result
 } )
}


const getMovieController= async (req: Request, res: Response)=>{

    const result = await MovieServices.getMovie()
    res.json({
        success: true,
        message: "Movies retrieved successfully",
        data: result
 } )
}
const getMovieByslug= async (req: Request, res: Response)=>{




const {slug}=req.params

    const result = await MovieServices.getMovieBySlug(slug)
    res.json({
        success: true,
        message: "Movies retrieved by id was successfully",
        data: result
 } )
}


export const movieCrontrollers={
createMovieController,
getMovieController,
getMovieByslug

}