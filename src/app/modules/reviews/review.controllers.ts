import { Request, Response } from "express";
import { ReviewServices } from "./review.services";

const addReviewController=async (req: Request, res: Response)=>{
    const result =await ReviewServices.createReview(req.body)
    res.json({
        success: true,
        message: "review created successfully",
        data: result
 } )
}


const getReviewController= async (req: Request, res: Response)=>{

    const result = await ReviewServices.getReview()
    res.json({
        success: true,
        message: "Reviews retrieved successfully",
        data: result
 } )
}
const getReviewById= async (req: Request, res: Response)=>{




const {slug}=req.params

    const result = await ReviewServices.getReviewBySlug(slug)
    res.json({
        success: true,
        message: "Reviews retrieved by id was successfully",
        data: result
 } )
}


export const movieCrontrollers={
createReviewController,
getReviewController,
getReviewByslug

}