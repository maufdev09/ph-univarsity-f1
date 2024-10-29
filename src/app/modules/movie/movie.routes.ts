import express from 'express';
import { movieCrontrollers } from './movie.controllers';
const router= express.Router();

router.post('/', movieCrontrollers.createMovieController)
router.get('/', movieCrontrollers.getMovieController)
router.get('/:movieId', movieCrontrollers.getMovieByIdController)


export const MovieRoutes = router