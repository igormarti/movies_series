import api from '../config/api';

export const searchMoviesOrSeries = async (title, type, page = 1) => {
  const response = await api.get('/', {
    params: {
      apikey: process.env.REACT_APP_APIKEY,
      s: title,
      type,
      page,
    },
  });

  return response.data;
};

export const detailMoviesOrSeries = async (title) => {
  const response = await api.get(`/`, {
    params: {
      apikey: process.env.REACT_APP_APIKEY,
      t: title,
    },
  });

  return response.data;
};
