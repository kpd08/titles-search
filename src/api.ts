import axios from 'axios';
import { API_KEY, API_URL } from './constants';

export const fetchProductions = async (
  searchQuery: string,
  page: number = 1
): Promise<{ productions: Array<Production>; totalResults: number }> => {
  try {
    const { data } = await axios.get<SearchResponse<Production>>(
      `${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(
        searchQuery
      )}&page=${page}`
    );
    if (data.Error) {
      throw new Error(data.Error);
    }
    return {
      productions: data.Search || [],
      totalResults: Number.parseInt(data.totalResults!, 10) || 0,
    };
  } catch (error) {
    throw new Error(error);
  }
};
