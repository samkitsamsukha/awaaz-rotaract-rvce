import React from "react";
import { MapPin } from "lucide-react";
const partnerNGOs = [
  {
    name: "Akshar Foundation",
    description: "Empowering underprivileged children through literacy and education in Mumbai.",
    requirement: "Audio stories and educational content in Marathi and Hindi for children aged 6-12.",
    location: "Mumbai, Maharashtra",
  },
  {
    name: "Pratham Education",
    description: "Providing quality education to children in rural and urban India.",
    requirement: "Engaging audio lessons and stories in English and Hindi for children aged 5-10.",
    location: "Pune, Maharashtra",
  }
];

export default function PartnersPage() {
    return <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
        <section className="max-w-screen mx-auto px-6 py-16">
            <h1 className="text-5xl font-sans font-bold text-gray-900 mb-4 text-center">Beneficiaries</h1>
            <p className="text-xl text-gray-600 text-center mb-16">Building bridges through collaboration</p>

            <div className="grid md:grid-cols-3 gap-8">
                {partnerNGOs.map((ngo, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-sans font-bold text-gray-900 mb-3">{ngo.name}</h3>
                        <div className="flex items-start gap-2 text-gray-600 mb-3">
                            <MapPin size={18} className="flex-shrink-0 mt-1 text-[#D61264]" />
                            <span>{ngo.location}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">{ngo.description}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
}