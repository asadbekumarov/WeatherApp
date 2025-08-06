# Weather Forecast App

Bu loyiha ReactJS (Vite) asosida yaratilgan ob-havo prognoz ilovasi bo‘lib, foydalanuvchiga tanlangan shaharning joriy va 5 kunlik ob-havo ma’lumotlarini ko‘rsatadi.


##  Ilova funksiyalari

-  Shahar nomi orqali ob-havoni qidirish
-  5 kunlik prognoz kartalari (kunlik ob-havo)
-  Light/Dark tema rejimi (`ThemeContext` orqali boshqariladi)
-  Sozlamalar sahifasi (default shahar, tema tanlash)
-  Foydalanuvchi sozlamalarini `localStorage`da saqlash
-  FSD (Feature-Sliced Design) arxitektura
-  Accessibility (ARIA atributlari, klaviatura navigatsiyasi)
-  Responsiv dizayn (mobil qurilmalar uchun moslashgan)
-  `framer-motion` orqali animatsiyalar


## Texnologiyalar

- ReactJS + Vite
- TailwindCSS
- React Router DOM
- Axios
- OpenWeatherMap API
- Framer Motion
- localStorage
- Custom Theme Context


## Ishga tushirish yo‘riqnomasi

1. **Proyektni klonlash**:

```bash
git clone https://github.com/asadbekumarov/WeatherApp.git
cd your-repo-name
Loyihani ishga tushirish uchun kerakli paketlarni o‘rnatish:
npm install
.env fayl yaratib, API kalitini yozish:
VITE_OPENWEATHER_API_KEY=your_api_key_here
Loyihani ishga tushirish:
npm run dev
Papkalar tuzilmasi
src/
├── api/                # API funksiyalar
│   └── weather.js
├── components/         # UI komponentlar
│   ├── ForecastPage.jsx
│   └── MainPage.jsx
│   └── Header.jsx
│   └── SettingsPage.jsx
├── context/            # ThemeContext
│   └── ThemeContext.jsx
├── pages/              # Sahifalar
│   ├── Home.jsx
│   ├── Forecast.jsx
│   └── Settings.jsx
├── App.jsx             # Root komponent
├── main.jsx            # Entry file
└── index.css           # TailwindCSS konfiguratsiyasi
Muallif
Ism: Asadbek Umarov
Telegram: @asad_umarov