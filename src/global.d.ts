type Production = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: 'movie' | 'series' | 'episode';
  Poster: string;
};

type SearchResponse<T> = {
  Search?: Array<T>;
  Error?: string;
  Response: 'True' | 'False';
  totalResults?: string;
};
