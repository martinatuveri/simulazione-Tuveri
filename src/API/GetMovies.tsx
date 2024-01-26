import axios from 'axios';

const baseURL = 'http://www.omdbapi.com/?s=wickapikey=b1d05ad7';

export interface Movie {
  id: number;
  title: string;
  year: number;
}

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get<Movie[]>(baseURL);
    return response.data;
  } catch (error) {
    console.error('Errore durante la richiesta di getMovies:', error);
    throw error;
  }
};
