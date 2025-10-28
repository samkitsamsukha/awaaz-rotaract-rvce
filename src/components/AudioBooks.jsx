import { useState, useEffect } from "react";
import { PlayCircle, ArrowLeft } from "lucide-react";
import data from "../data/data.json";

export default function AudioBooks() {
    
    const [selectedLanguage, setSelectedLanguage] = useState(null);


    return (
        <div className="min-h-screen bg-rose-50 px-6 py-10 text-rose-900">

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-center
               bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-10">
                Audiobooks Library
            </h1>

            {/* If no language selected – Show Language Options */}
            {!selectedLanguage && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedLanguage(item)}
                            className="cursor-pointer p-6 rounded-2xl bg-white border border-rose-100 
                            shadow-md hover:shadow-xl transition-all text-center"
                        >
                            <h2 className="text-2xl font-bold text-rose-700 mb-2">
                                {item.language}
                            </h2>
                            <p className="text-rose-600 text-sm">
                                {item.numberOfAudioBooks} Audiobooks
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* If language selected – Show Details */}
            {selectedLanguage && (
                <div className="animate-fadeIn">
                    <button
                        className="flex items-center gap-2 text-rose-700 hover:text-rose-900 mb-6"
                        onClick={() => setSelectedLanguage(null)}
                    >
                        <ArrowLeft /> Back
                    </button>

                    <h2 className="text-3xl font-bold mb-8 text-rose-800">
                        {selectedLanguage.language} Audiobooks
                    </h2>

                    {/* CLASS GROUPINGS */}
                    <div className="space-y-12">

                        {/* Class 1 (Class 1–5) */}
                        <div>
                            <h3 className="text-2xl font-semibold text-rose-700 mb-4">
                                Class 1–5
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {selectedLanguage.class1?.map((book, idx) => (
                                    <AudioBookCard key={idx} book={book} />
                                ))}
                            </div>
                        </div>

                        {/* Class 2 (Class 6–9) */}
                        <div>
                            <h3 className="text-2xl font-semibold text-rose-700 mb-4">
                                Class 6–9
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {selectedLanguage.class2?.map((book, idx) => (
                                    <AudioBookCard key={idx} book={book} />
                                ))}
                            </div>
                        </div>

                        {/* Class 3 (Class 10–12) */}
                        <div>
                            <h3 className="text-2xl font-semibold text-rose-700 mb-4">
                                Class 10–12
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {selectedLanguage.class3?.map((book, idx) => (
                                    <AudioBookCard key={idx} book={book} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ------------------ AUDIOBOOK CARD COMPONENT ------------------ */

function AudioBookCard({ book }) {
    return (
        <div className="bg-white rounded-2xl border border-rose-100 shadow-md hover:shadow-xl transition-all">
            <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-40 object-cover rounded-t-2xl"
            />

            <div className="p-5">
                <h4 className="text-lg font-bold text-rose-800">{book.title}</h4>

                <a
                    href={book.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 w-full flex items-center justify-center gap-2 
                        bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-xl 
                        transition-all shadow-md"
                >
                    <PlayCircle size={20} />
                    Play Audio
                </a>
            </div>
        </div>
    );
}
