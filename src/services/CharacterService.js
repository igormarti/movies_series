import api from '../config/api';

export const searchCharacter = async (name) => {
  const response = await api.get('characters', {
    params: {
      ts: process.env.REACT_APP_TIMESTAMP,
      apikey: process.env.REACT_APP_APIKEY,
      hash: process.env.REACT_APP_HASH,
      name,
      limit: 5,
    },
  });

  return response.data.data;
};

export const detailCharacter = async (characterId) => {
  const response = await api.get(`characters/${characterId}`, {
    params: {
      ts: process.env.REACT_APP_TIMESTAMP,
      apikey: process.env.REACT_APP_APIKEY,
      hash: process.env.REACT_APP_HASH,
    },
  });

  return response.data.data;
};
