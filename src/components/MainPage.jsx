// src/components/MainPage.jsx
import React, { useState } from 'react';
import { getWeather } from '../api/weather';
import { FaSearchLocation } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const MainPage = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { isDarkMode } = useTheme();

    const fetchWeather = async () => {
        if (!city.trim()) return;
        setLoading(true);
        setError('');
        try {
            const data = await getWeather(city);
            setWeatherData(data);
            console.log("API KEY:", import.meta.env.VITE_OPENWEATHER_API_KEY);

        } catch (error) {
            setError(error.message || "Xatolik yuz berdi");
        }
        setLoading(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') fetchWeather();
    };

    return (
        <motion.section className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`px-4 py-10 max-w-2xl mx-auto min-h-screen`}
            >
                <h1 className={`text-4xl font-bold text-center mb-2 ${isDarkMode ? 'text-blue-400' : 'text-[#0EA5E9]'}`}>
                    Weather App
                </h1>
                <p className={`text-center mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Shahar nomini kiriting va ob-havo haqida ma'lumot oling.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className={`flex-1 p-2 rounded-md focus:outline-none focus:ring-2 transition ${isDarkMode
                            ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 text-white'
                            : 'border border-gray-300 focus:ring-[#0EA5E9]'
                            }`}
                        placeholder="Masalan: Tashkent"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={fetchWeather}
                        className={`flex items-center gap-2 p-2 px-4 rounded-md transition ${isDarkMode
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-[#0EA5E9] hover:bg-sky-600 text-white'
                            }`}
                    >
                        <FaSearchLocation />
                        Qidirish
                    </motion.button>
                </div>

                <AnimatePresence>
                    {loading && (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`mt-6 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                            ⏳ Yuklanmoqda...
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {error && (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 text-center text-red-500"
                        >
                            ❌ {error}
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {weatherData && (
                        <motion.div
                            key="weather"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                            className={`mt-8 p-6 rounded-md shadow-md ${isDarkMode
                                ? 'bg-gray-800 border-gray-700 text-white'
                                : 'bg-[#e0f7ff] border-[#0EA5E9] text-gray-700'
                                } border`}
                        >
                            <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-[#0EA5E9]'}`}>
                                {weatherData.name}
                            </h2>
                            <p className="capitalize">{weatherData.weather[0].description}</p>
                            <p className="text-3xl font-bold">{weatherData.main.temp}°C</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.section>
    );
};

export default MainPage;