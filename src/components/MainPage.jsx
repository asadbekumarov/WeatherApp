// import React, { useState } from 'react';
// import { getWeather } from '../api/weather';

// const MainPage = () => {
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const fetchWeather = async () => {
//         setLoading(true);
//         setError('');
//         try {
//             const data = await getWeather(city);
//             setWeatherData(data);
//         } catch (error) {
//             setError(error.message);
//         }
//         setLoading(false);
//     };

//     return (
//         <div className="p-4 max-w-md mx-auto">
//             <h1 className="text-3xl font-bold mb-4">Weather App</h1>
//             <p className="mb-4">Shahar nomini kiriting va ob-havo haqida ma'lumot oling.</p>

//             <div className="flex items-center">
//                 <input
//                     type="text"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     className="p-2 border rounded w-full"
//                     placeholder="Shahar nomini kiriting"
//                 />
//                 <button
//                     onClick={fetchWeather}
//                     className="ml-2 p-2 bg-blue-500 text-white rounded"
//                 >
//                     Qidirish
//                 </button>
//             </div>

//             {loading && <div className="mt-4">Yuklanmoqda...</div>}
//             {error && <div className="mt-4 text-red-500">{error}</div>}

//             {weatherData && (
//                 <div className="mt-4 border p-4 rounded bg-blue-100">
//                     <h2 className="text-xl font-bold">{weatherData.name}</h2>
//                     <p className="capitalize">{weatherData.weather[0].description}</p>
//                     <p className="text-lg">{weatherData.main.temp}°C</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MainPage;
import React, { useState } from 'react';
import { getWeather } from '../api/weather';

const MainPage = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await getWeather(city);
            setWeatherData(data);
        } catch (error) {
            setError(error.message || "Xatolik yuz berdi");
        }
        setLoading(false);
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-[#0EA5E9] mb-2 text-center">Weather App</h1>
            <p className="mb-4 text-center text-gray-600">Shahar nomini kiriting va ob-havo haqida ma'lumot oling.</p>

            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
                    placeholder="Masalan: Tashkent"
                />
                <button
                    onClick={fetchWeather}
                    className="p-2 px-4 bg-[#0EA5E9] hover:bg-sky-600 text-white rounded-md transition"
                >
                    Qidirish
                </button>
            </div>

            {loading && <div className="mt-4 text-gray-700">⏳ Yuklanmoqda...</div>}
            {error && <div className="mt-4 text-red-500">❌ {error}</div>}

            {weatherData && (
                <div className="mt-6 p-4 border border-[#0EA5E9] rounded-md bg-[#e0f7ff]">
                    <h2 className="text-xl font-semibold text-[#0EA5E9]">{weatherData.name}</h2>
                    <p className="capitalize text-gray-700">{weatherData.weather[0].description}</p>
                    <p className="text-2xl font-bold">{weatherData.main.temp}°C</p>
                </div>
            )}
        </div>
    );
};

export default MainPage;
