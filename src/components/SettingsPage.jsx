// src/components/SettingsPage.jsx
import React, { useState, useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function SettingsPage() {
    const [saved, setSaved] = useState(false);
    const { isDarkMode, toggleTheme, defaultCity, setCity } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(isDarkMode ? 'dark' : 'light');
    const [selectedCity, setSelectedCity] = useState(defaultCity);

    useEffect(() => {
        setSelectedTheme(isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const handleSave = () => {
        toggleTheme();
        setCity(selectedCity); // Shaharni saqlash
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <motion.section className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="py-10 px-4 max-w-xl mx-auto min-h-screen"
            >
                <motion.div
                    layout
                    className={`p-6 rounded-xl shadow-lg transition-all ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                >
                    <h2 className={`text-3xl font-bold mb-2 text-center ${isDarkMode ? 'text-blue-400' : 'text-[#0EA5E9]'}`}>
                        Sozlamalar
                    </h2>
                    <p className={`text-center mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Ilova sozlamalarini quyida o'zgartirishingiz mumkin.
                    </p>

                    <div className="space-y-6">
                        {/* Til tanlash */}
                        <div>
                            <label className={`block mb-2 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Til:</label>
                            <select
                                className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 transition ${isDarkMode
                                    ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 text-white'
                                    : 'border border-gray-300 focus:ring-[#0EA5E9]'
                                    }`}
                            >
                                <option value="uz">O'zbekcha</option>
                                <option value="ru">Русский</option>
                                <option value="en">English</option>
                            </select>
                        </div>

                        {/* Tema tanlash */}
                        <div>
                            <label className={`block mb-2 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tema:</label>
                            <select
                                value={selectedTheme}
                                onChange={(e) => setSelectedTheme(e.target.value)}
                                className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 transition ${isDarkMode
                                    ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 text-white'
                                    : 'border border-gray-300 focus:ring-[#0EA5E9]'
                                    }`}
                            >
                                <option value="light">Yorug'</option>
                                <option value="dark">Qorong'u</option>
                            </select>
                        </div>

                        {/* Default shahar tanlash */}
                        <div>
                            <label className={`block mb-2 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Default Shahar:</label>
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 transition ${isDarkMode
                                    ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 text-white'
                                    : 'border border-gray-300 focus:ring-[#0EA5E9]'
                                    }`}
                            >
                                <option value="Toshkent">Toshkent</option>
                                <option value="Samarkand">Samarkand</option>
                                <option value="Bukhara">Bukhara</option>
                            </select>
                        </div>
                    </div>

                    {/* Saqlash tugmasi */}
                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        whileHover={{ scale: 1.03 }}
                        onClick={handleSave}
                        className={`mt-8 w-full p-2 rounded-md font-semibold shadow-sm transition ${isDarkMode
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-[#0EA5E9] hover:bg-sky-600 text-white'
                            }`}
                    >
                        Saqlash
                    </motion.button>

                    {/* Saqlanganini bildirish */}
                    <AnimatePresence>
                        {saved && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="mt-4 flex items-center justify-center text-green-500 font-medium"
                            >
                                <FiCheckCircle className="mr-2 text-xl" />
                                Sozlamalar saqlandi!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.section>
        </motion.section>
    );
}

export default SettingsPage;
