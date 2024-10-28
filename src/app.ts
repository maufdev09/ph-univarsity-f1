import express, { Request, Response } from 'express'
import { MovieRoutes } from './app/modules/movie/movie.routes'
export const app = express()


app.use("/api/movies",MovieRoutes)


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

