import {  model, Schema } from 'mongoose';
import { TReview } from "./review.interface"

// Review Schema
const reviewSchema = new Schema<TReview>(
    {
      movie: {
        type:Schema.Types.ObjectId,
        ref: 'Movie',  
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true, // Automatically manage createdAt and updatedAt fields
    }
  );


  export const Review = model<TReview>("Review", reviewSchema);
