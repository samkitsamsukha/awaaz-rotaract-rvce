import React from "react";

const timeline = [
  { year: "2021", title: "The Beginning", description: "Awaaz was born from a simple conviction: every child deserves to hear stories that inspire. We started with 3 NGOs and 50 audio recordings.", ngos: 3, hours: 12 },
  { year: "2022", title: "Growing Voices", description: "Our community expanded. More volunteers joined, more stories were told. We crossed 100 recordings and reached 15 NGOs across 3 states.", ngos: 15, hours: 45 },
  { year: "2023", title: "Building Bridges", description: "Multilingual content became our strength. We added Hindi, Marathi, and Tamil recordings, ensuring no child felt left behind.", ngos: 28, hours: 87 },
  { year: "2024", title: "Impact Unfolds", description: "Today, Awaaz is a living library of hope. With 40+ NGO partnerships and 200+ hours of content, we continue to amplify voices that matter.", ngos: 42, hours: 215 },
];

const JourneyPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
        <section className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-5xl font-sans font-bold text-gray-900 mb-4 text-center">Our Journey</h1>
            <p className="text-xl text-gray-600 text-center mb-16">Four years of voices, stories, and impact</p>

            <div className="space-y-12">
                {timeline.map((item, index) => (
                    <div key={item.year} className="relative">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 bg-[#D61264] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                                    {item.year}
                                </div>
                            </div>
                            <div className="flex-1 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                                <h3 className="text-2xl font-sans font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
                                <div className="flex gap-6 text-sm text-gray-600">
                                    <span><strong className="text-[#D61264]">{item.ngos}</strong> NGOs</span>
                                    <span><strong className="text-[#D61264]">{item.hours}</strong> hours of content</span>
                                </div>
                            </div>
                        </div>
                        {index < timeline.length - 1 && (
                            <div className="absolute left-10 top-20 w-0.5 h-12 bg-rose-200" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    </div>
);

export default JourneyPage;