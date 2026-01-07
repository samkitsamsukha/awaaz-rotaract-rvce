import React from "react";
import { MapPin } from "lucide-react";

const partnerNGOs = [
    {
        name: "Adarsh Community Development Services",
        description: "A non-profit organization working at the grassroots level to support underprivileged communities. They focus on social welfare initiatives such as education support, livelihood development, and community empowerment in and around Bangalore.",
        location: "B Narayanaswamy Building, Whitefield, Immadihalli, Bangalore - 560066 (Near Kaveri Bakery)"
    },
    {
        name: "Mithra Jyoti Trust",
        description: "A non-profit organization dedicated to empowering persons with visual impairment and other disabilities. They work in the areas of education, skill development, assistive technology, and inclusive employment support. Requirements: English and Kannada moral stories and poems.",
        location: "No. P22, 31st Main Road, 18th Cross, HSR Layout Sector 1, Bangalore - 560102 (Behind NIFT College)"
    },
    {
        name: "Shree Sharada Devi Andhara Vikasa Kendra",
        description: "They work to support and uplift visually impaired individuals and other marginalized groups. The organization focuses on rehabilitation, education, skill training, and social integration to promote independent living.",
        location: "Gopala Housing, Gopal Gowda Extension, Shivamogga, Karnataka - 577205"
    },
    {
        name: "National Association for the Blind, Bhopal",
        description: "They work towards the welfare and empowerment of persons with visual impairment. They focus on education, rehabilitation, skill development, assistive aids, and promoting equal opportunities for independent living. Requirements: Kannada moral stories.",
        location: "Shri Rameshwaram, Bagmugaliya, Bhopal, Madhya Pradesh - 462043"
    },
    {
        name: "The Welfare Schools for Blind",
        description: "They provide specialized education and residential care for children with visual impairment. The school focuses on inclusive learning, life skills training, and rehabilitation to help students lead independent and confident lives.",
        location: "Near Darji Pokhari, Ranipatna, Manikhamb, Balasore, Gopalgoan, Odisha - 756001"
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