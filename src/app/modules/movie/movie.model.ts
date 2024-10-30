import { model, Schema } from "mongoose";
import { TMovie, TReview } from "./movie.interface";
import { format } from "date-fns";
import slugify from "slugify";



// Movie Schema
const movieSchema = new Schema<TMovie>(
  {
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
    totalRating: {
      type: Number,
      default: 0,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

movieSchema.pre("save", async function (next) {
  const date = format(this.releaseDate, "dd-MM-yyyy");

  this.slug = slugify(`${this.title}-${date}`, {
    lower: true,
  });

  next();
});

export const Movie = model<TMovie>("Movie", movieSchema);
