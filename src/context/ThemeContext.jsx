// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // LocalStorage dan theme ni o'qish
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        }
    }, []);

    // Har safar theme o'zgarsa, HTML class va localStorage yangilanadi
    useEffect(() => {
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Tema almashtiruvchi va bevosita o'rnatadigan funksiyalar
    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const setTheme = (theme) => {
        setIsDarkMode(theme === 'dark');
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme ThemeProvider ichida ishlatilishi kerak');
    }
    return context;
};
