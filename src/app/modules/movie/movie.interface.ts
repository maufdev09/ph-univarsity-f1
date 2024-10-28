export type TMovie={
    title: string,
    description: string,
    releaseDate: Date,
    genre: string,
    viewCount: number,
    reviews: [TReview],
    slug: string,
    isDeleted: boolean,


}


export type TReview={
    email: string,
        rating: number,
        comment: string,
}