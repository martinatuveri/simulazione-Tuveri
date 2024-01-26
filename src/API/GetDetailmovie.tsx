import axios from 'axios';
import { Movie } from './GetMovies';

const baseURL = 'http://www.omdbapi.com/?s=bella&apikey=b1d05ad7';

export const getDetailMovie = async (id: number): Promise<Movie | null> => {
  try {
    const response = await axios.get<Movie>(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }

    console.error('Errore durante la richiesta di getDetailMovie:', error);
    throw error;
  }
};
