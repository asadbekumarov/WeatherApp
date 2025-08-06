// src/api/weather.jsx
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeather = async (city) => {
  const response = await axios.get(CURRENT_WEATHER_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};

export const getForecast = async (city) => {
  const response = await axios.get(FORECAST_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};
