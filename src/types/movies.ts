import { Genre } from "./genre";

export interface Movie {
  _id: string;
  title: string;
  genre: Genre;
  description: string;
  numberInStock: number;
  dailyRentalRate: number;
  __v: number;
}
