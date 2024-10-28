import {   model, Schema } from "mongoose";
import { TMovie } from "./movie.interface";

// Review Schema
const reviewSchema = new Schema<TReview>({
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
  }, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  });
  
  // Movie Schema
  const movieSchema = new Schema<TMovie>({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    reviews: [reviewSchema], // Array of subdocuments
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  }, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  });
  

  const Movie= model<TMovie>("Movie",movieSchema)