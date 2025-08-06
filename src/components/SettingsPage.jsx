import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

function SettingsPage() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(isDarkMode ? 'dark' : 'light');
    const [defaultCity, setDefaultCity] = useState('');
    const [saved, setSaved] = useState(false);
    const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
    const textColor = isDarkMode ? 'text-white' : 'text-gray-900';

    useEffect(() => {
        const storedCity = localStorage.getItem('defaultCity');
        if (storedCity) {
            setDefaultCity(storedCity);
        }
    }, []);

    useEffect(() => {
        if ((selectedTheme === 'dark' && !isDarkMode) || (selectedTheme === 'light' && isDarkMode)) {
            toggleTheme();
        }
    }, [selectedTheme]);

    const handleSave = () => {
        localStorage.setItem('defaultCity', defaultCity);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <motion.section className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <section className="py-10 px-4 max-w-xl mx-auto min-h-screen ">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${cardBg} shadow-lg p-6 rounded-2xl`}
                >
                    <h2 className="text-2xl font-semibold text-[#0EA5E9] dark:text-white mb-4">Sozlamalar</h2>

                    <div className='mb-6 ${cardBg}'>
                        <label className="block text-gray-700 dark:text-gray-200 mb-2">Mavzu (Theme):</label>
                        <select
                            value={selectedTheme}
                            onChange={(e) => setSelectedTheme(e.target.value)}
                            className="w-full p-2 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-200 mb-2">Default shahar:</label>
                        <input
                            type="text"
                            value={defaultCity}
                            onChange={(e) => setDefaultCity(e.target.value)}
                            placeholder="Masalan: Tashkent"
                            className="w-full p-2 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                    </div>

                    <button
                        onClick={handleSave}
                        className="bg-[#0EA5E9] text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
                    >
                        Saqlash
                    </button>

                    {saved && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-4 flex items-center text-green-600"
                        >
                            <FiCheckCircle className="mr-2" />
                            Sozlamalar saqlandi!
                        </motion.div>
                    )}
                </motion.div>
            </section>
        </motion.section>
    );
}

export default SettingsPage;
