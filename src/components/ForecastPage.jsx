// src/components/ForecastPage.jsx
import React, { useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { getForecast } from '../api/weather';

const ForecastPage = () => {
    const [city, setCity] = useState('');
    const [forecastData, setForecastData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { isDarkMode } = useTheme();

    const handleSearch = async () => {
        if (!city.trim()) return;

        setLoading(true);
        setError('');
        try {
            const data = await getForecast(city);
            const filtered = data.list.filter(item => item.dt_txt.includes('12:00:00'));
            setForecastData(filtered);
        } catch {
            setError('❌ Ma’lumotni olishda xatolik yuz berdi');
            setForecastData([]);
        } finally {
            setLoading(false);
        }
    };

    const containerClass = isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900';
    const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`min-h-screen py-10 px-4 ${containerClass}`}
        >
            <div className={`max-w-4xl mx-auto p-6 rounded-xl shadow ${cardBg}`}>
                <div className="flex items-center gap-3 mb-6">
                    <CiCalendar className="text-3xl text-sky-500" />
                    <h2 className="text-2xl font-semibold text-sky-500">
                        5 kunlik ob-havo prognozi
                    </h2>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <input
                        type="text"
                        placeholder="Shahar nomini kiriting"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className={`flex-1 p-2 rounded-md border focus:outline-none focus:ring-2 ${isDarkMode
                            ? 'bg-gray-700 border-gray-600 text-white focus:ring-sky-500'
                            : 'border-gray-300 focus:ring-sky-400'
                            }`}
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSearch}
                        className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition"
                    >
                        Qidirish
                    </motion.button>
                </div>

                <AnimatePresence>
                    {loading && (
                        <motion.p
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center text-sm"
                        >
                            ⏳ Yuklanmoqda...
                        </motion.p>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {error && (
                        <motion.p
                            key="error"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center text-red-500 text-sm"
                        >
                            {error}
                        </motion.p>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {forecastData.length > 0 && (
                        <motion.div
                            key="forecast"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6"
                        >
                            {forecastData.map((item) => (
                                <motion.div
                                    key={item.dt}
                                    className={`p-4 rounded-xl shadow-md transition ${isDarkMode ? 'bg-gray-700' : 'bg-[#e0f7ff]'}`}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="text-lg font-semibold mb-1">
                                        {new Date(item.dt_txt).toLocaleDateString('uz-UZ', {
                                            weekday: 'long',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </h3>
                                    <p className="capitalize mb-1">{item.weather[0].description}</p>
                                    <p className="text-2xl font-bold">{item.main.temp}°C</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default ForecastPage;
