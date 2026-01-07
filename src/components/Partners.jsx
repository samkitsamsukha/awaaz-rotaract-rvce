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
    },
    {
        name: "Sri Rakum School For The Blind And The Sighted Unprivileged",
        description: "Providing free, inclusive education for visually impaired and underprivileged children from nursery to postgraduate level, integrating blind and sighted students in one learning environment. Focused on academics, life skills, and confidence-building to help students lead independent lives.",
        location: "Indiranagar 1st Stage, Bangalore, India"
    },
    {
        name: "National Association for the Blind Kerala",
        description: "Working across Kerala to support and advocate for persons with visual and other disabilities, the National Association for the Blind Kerala focuses on education, inclusion, and equal opportunities. With decades of experience, it empowers thousands to lead dignified and independent lives.",
        location: "Plammoodu, Thiruvananthapuram, Kerala"
    },
    {
        name: "JMR Blind School (Ashakiran Trust)",
        description: "Established in 1991, Ashakiran Trust is dedicated to the education and welfare of blind and physically challenged children through its residential school and vocational training programs. The organization focuses on holistic development, providing education, care, and life skills with the support of committed trustees and well-wishers.",
        location: "Haladakatta, Siddapur, Karnataka"
    },
    {
        name: "Thaaikarangal Charitable Trust",
        description: "Founded in 2019, Thaaikarangal Charitable Trust is committed to empowering the visually challenged by creating equal opportunities for education and personal growth. The trust focuses on holistic development, enabling individuals to excel across academics, careers, and life pursuits.",
        location: "Kannan Nagar, VOC Nagar Post, Thanjavur, Tamil Nadu"
    },
    {
        name: "Navjyot Andhjan Mandal, Paldi",
        description: "Dedicated to supporting blind students pursuing higher education, this organization provides essential residential, study, and living facilities for visually impaired individuals in Ahmedabad. Focused on empowerment through education, it works to remove barriers and promote independence and dignity for the blind community.",
        location: "Ahmedabad, Gujarat"
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