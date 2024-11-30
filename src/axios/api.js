import axios from "axios";

// eslint-disable-next-line no-undef
const token = process.env.REACT_APP_TOKEN;
// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getAllTrending = async () => {
  const response = await axios.get(`${baseUrl}/trending/all/week`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(response.data.results);
  return response.data.results;
}

export const getMoviesNowPlaying = async () => {
  const response = await axios.get(`${baseUrl}/movie/now_playing`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data.results);
  return response.data.results;
};
export const getMoviesPopular = async () => {
  const response = await axios.get(`${baseUrl}/movie/popular`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data.results);
  return response.data.results;
};

export const getMoviesUpcoming = async () => {
  const response = await axios.get(`${baseUrl}/movie/upcoming`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data.results);
  return response.data.results;
};

export const getMovieTopRated = async () => {
  const response = await axios.get(`${baseUrl}/movie/top_rated`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data.results);
  return response.data.results;
};
export const getMovieTrending = async () => {
  const response = await axios.get(`${baseUrl}/trending/movie/day`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data.results);
  return response.data.results;
};
export const getTVSeriesTrending = async () => {
  const response = await axios.get(`${baseUrl}/trending/tv/day`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data.results);
  return response.data.results;
};
export const getTVSeriesAiringToday = async () => {
  const response = await axios.get(`${baseUrl}/tv/airing_today`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data.results);
  return response.data.results;
};
export const getTVSeriesOnTheAir = async () => {
  const response = await axios.get(`${baseUrl}/tv/on_the_air`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data.results);
  return response.data.results;
};

export const getTVSeriesPopular = async () => {
  const response = await axios.get(`${baseUrl}/tv/popular`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data.results);
  return response.data.results;
};
export const getTVSeriesTopRated = async () => {
  const response = await axios.get(`${baseUrl}/tv/top_rated`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data.results);
  return response.data.results;
};

export const getDetailMovies = async (id) => {
  const response = await axios.get(
    `${baseUrl}/movie/${id}?append_to_response=reviews,keywords,images,videos,recommendations,credits`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  // console.log(response.data);
  return response.data;
};

export const getCollectionMovies = async (id) => {
  const response = await axios.get(`${baseUrl}/collection/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data.results);
  return response.data;
};

export const getTVSeriesDetail = async (id) => {
  const response = await axios.get(
    `${baseUrl}/tv/${id}?append_to_response=reviews,keywords,images,credits,videos,recommendations`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  // console.log(response.data);
  return response.data;
};

export const getLanguage = async () => {
  const response = await axios.get(`${baseUrl}/configuration/languages`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data);
  return response.data;
};

export const getGenre = async () => {
  const response = await axios.get(`${baseUrl}/genre/movie/list`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getPersonDetails = async (id) => {
  const response = await axios.get(
    `${baseUrl}/person/${id}?append_to_response=images,combined_credits,external_ids`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  // console.log(response.data);
  return response.data;
};


export const getSeasonsDetails = async (id, number) => {
  const response = await axios.get(`${baseUrl}/tv/${id}/season/${number}?append_to_response=images,videos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data);
  return response.data;
}

export const getSearch = async (query, page = 1) => {
  const response = await axios.get(`${baseUrl}/search/multi?query=${query}&page=${page}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data);
  return response.data;
}

export const getSearchMovies = async (query, page = 1) => {
  const response = await axios.get(`${baseUrl}/search/movie?query=${query}&page=${page}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data);
  return response.data;
}

export const getSearchTVSeries = async (query, page = 1) => {
  const response = await axios.get(`${baseUrl}/search/tv?query=${query}&page=${page}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data);
  return response.data;
}
