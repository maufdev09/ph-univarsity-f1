import express from 'express';
import { movieCrontrollers } from './movie.controllers';
const router= express.Router();

router.post('/', movieCrontrollers.createMovieController)
router.get('/', movieCrontrollers.getMovieController)
router.get('/:slug', movieCrontrollers.getMovieByslug)
router.post('/:slug/review',reviewCrontrollers.addReview)


export const MovieRoutes = router