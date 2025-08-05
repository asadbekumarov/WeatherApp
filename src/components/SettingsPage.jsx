import React from 'react';

function SettingsPage() {
    return (
        <section className="py-8 px-4 max-w-xl mx-auto">
            <div className="bg-white shadow-md p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-[#0EA5E9] mb-2">Sozlamalar</h2>
                <p className="text-gray-600 mb-6">
                    Bu yerda ilova sozlamalarini o'zgartirishingiz mumkin.
                </p>

                <div className="space-y-4">
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Til:</label>
                        <select className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]">
                            <option value="uz">O'zbekcha</option>
                            <option value="ru">Русский</option>
                            <option value="en">English</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Tema:</label>
                        <select className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]">
                            <option value="light">Yorug'</option>
                            <option value="dark">Qorong'u</option>
                        </select>
                    </div>
                </div>

                <button className="mt-6 w-full p-2 bg-[#0EA5E9] hover:bg-sky-600 text-white rounded-md transition font-medium">
                    Saqlash
                </button>
            </div>
        </section>
    );
}

export default SettingsPage;
    