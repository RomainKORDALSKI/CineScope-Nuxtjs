export type Movie = {
  id: number;
  title: string;
  genres: {
    id: number;
    name: string;
  }[];
  release_date: string;
  runtime: number | null;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
  backdrop_path: string;
  media_type: string;
  [key: string]: any;
};
