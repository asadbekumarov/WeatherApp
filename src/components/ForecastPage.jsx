// import React from 'react'
// import { CiCalendar } from "react-icons/ci";

// function ForecastPage() {
//     return (
//         <section>
//             <div>
//                 <CiCalendar />
//                 <h2 className="text-2xl font-semibold text-[#0EA5E9]">5 kunlik ob-havo prognozi</h2>
//                 <p className="text-gray-600">Bu yerda 5 kunlik ob-havo prognozini ko'rishingiz mumkin.</p>
//                 <div>
//                     <input className="border border-gray-300 p-2 rounded-md" placeholder='shahar nomini kiriting' type="text" />
//                     <button className="p-2 px-4 bg-[#0EA5E9] hover:bg-sky-600 text-white rounded-md transition">
//                         Qidirish
//                     </button>
//                 </div>
//                 <div className="mt-4">
//                     {/* Prognoz ma'lumotlari bu yerda ko'rsatiladi */}
//                     <p className="text-gray-700">Prognoz ma'lumotlari...</p>

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ForecastPage
import React from 'react';
import { CiCalendar } from "react-icons/ci";

function ForecastPage() {
    return (
        <section className="py-8 px-4 max-w-3xl mx-auto">
            <div className="bg-white shadow-md p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                    <CiCalendar className="text-3xl text-[#0EA5E9]" />
                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">
                        5 kunlik ob-havo prognozi
                    </h2>
                </div>

                <p className="text-gray-600 mb-6">
                    Bu yerda 5 kunlik ob-havo prognozini ko'rishingiz mumkin.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <input
                        className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
                        placeholder="Shahar nomini kiriting"
                        type="text"
                    />
                    <button className="p-2 px-4 bg-[#0EA5E9] hover:bg-sky-600 text-white rounded-md transition">
                        Qidirish
                    </button>
                </div>

                <div className="mt-4">
                    {/* Prognoz ma'lumotlari bu yerda ko'rsatiladi */}
                    <div className="bg-[#e0f7ff] border border-[#0EA5E9] p-4 rounded text-gray-700">
                        Prognoz ma'lumotlari...
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ForecastPage;
