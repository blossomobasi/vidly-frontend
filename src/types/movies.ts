import { Genre } from "./genre";

export interface MovieResponse {
    _id: string;
    title: string;
    genre: Genre;
    description: string;
    numberInStock: number;
    dailyRentalRate: number;
    __v: number;
}

export interface Movie {
    title: string;
    genreName: string;
    description: string;
    numberInStock: number;
    dailyRentalRate: number;
}
