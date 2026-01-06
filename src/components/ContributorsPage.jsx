import React from "react";
import audioFiles from "../data/audioFiles";
import { Sparkles, Mic } from "lucide-react";

const eventChairs = [
    {
        year: "2020-21",
        chairs: ["Rtr. Abhinand S Bhavan"]
    },
    {
        year: "2022-23",
        chairs: ["Rtr. Pari Raheja"]
    },
    {
        year: "2023-24",
        chairs: ["Rtr. Disha M S", "Rtr. Shrishti"]
    },
    {
        year: "2024-25",
        chairs: ["Rtr. Yashaswini Rajiv Kumar", "Rtr. Swati Gorampalli"]
    },
]

const ContributorsPage = () => {
    const uniqueContributors = [
        ...new Set(audioFiles.map(audio => audio.contributor))
    ].sort();

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50/30">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <section className="relative max-w-7xl mx-auto px-4 py-12">
                {/* Page Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 border border-rose-200 mb-4">
                        <Sparkles className="text-rose-600" size={16} />
                        <span className="text-xs font-black uppercase tracking-widest text-rose-700">
                            The People Behind Awaaz
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 tracking-tight">
                        CONTRIBUTORS
                    </h1>
                    <p className="text-xl md:text-base text-gray-700 max-w-2xl mx-auto">
                        The voices, leaders, and hands that shaped Awaaz
                    </p>
                </div>

                {/* Event Chairs Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <p className="text-2xl md:text-3xl font-bold text-[#6f0833] tracking-tight">
                            PROJECT CHAIRS
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {eventChairs.map(({ year, chairs }, idx) => (
                            <div
                                key={year}
                                className="group relative"
                            >
                                {/* Glow Effect */}


                                {/* Card */}
                                <div className="relative bg-white p-5 rounded-2xl border border-rose-200 hover:border-rose-400 transition-all duration-300 hover:shadow-md">
                                    {/* Year Badge */}
                                    <div className="inline-block mb-3">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg" />
                                            <div className="relative px-4 py-1.5 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg">
                                                <span className="text-base font-black text-white tracking-wider">
                                                    {year}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chairs List */}
                                    <div className="space-y-1.5">
                                        {chairs.map((chair, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 text-gray-900 font-semibold"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                                <span>{chair}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Voice Contributors Section */}
                <div>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Mic className="text-[#6f0833]" size={32} />
                        <p className="text-2xl md:text-3xl font-bold text-[#6f0833] tracking-tight">
                            VOICE CONTRIBUTORS
                        </p>
                    </div>

                    {/* Count Badge */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-rose-200">
                            <span className="text-3xl font-black bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">
                                {uniqueContributors.length}
                            </span>
                            <span className="text-sm font-black uppercase tracking-wider text-gray-900">
                                Amazing Voices
                            </span>
                        </div>
                    </div>

                    {/* Contributors Grid */}
                    <div className="relative">
                        {/* Grid Glow */}
                        <div className="absolute inset-0 rounded-3xl blur-2xl" />

                        <div className="relative bg-white p-5 rounded-3xl border border-rose-200 shadow-xl">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                                {uniqueContributors.map((name, index) => (
                                    <div
                                        key={index}
                                        className="group relative"
                                    >
                                        {/* Hover Glow */}
                                        <div className="absolute -inset-0.5  rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />

                                        {/* Card */}
                                        <div className="relative  px-3 py-2.5 rounded-xl border border-rose-200 group-hover:border-rose-400 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-rose-500 group-hover:animate-pulse" />
                                                <p className="text-sm text-gray-900 truncate">
                                                    {name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="flex justify-center mt-8">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
                            <div className="w-3 h-3 rounded-full bg-rose-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContributorsPage;