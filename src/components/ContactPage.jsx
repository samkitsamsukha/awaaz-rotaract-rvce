import React from "react";
import { MapPin, Instagram, Globe, X, Linkedin, Mail, Phone } from "lucide-react";

const ContactPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
        <section className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">
                Contact
            </h1>
            <p className="text-lg text-gray-600 text-center mb-20">
                Reach out to the leadership or connect with us online
            </p>

            <div className="grid md:grid-cols-2 gap-14">
                {/* LEFT */}
                <div className="space-y-12">
                    {/* Location */}
                    <div className="flex gap-4 items-start">
                        <MapPin size={26} className="text-[#D61264]" />
                        <div>
                            <p className="font-semibold text-gray-900">Location</p>
                            <p className="text-gray-600">
                                R.V. College of Engineering,
                                Mysore Road, Bengaluru - 560059,
                                Karnataka, India
                            </p>
                        </div>
                    </div>

                    {/* Socials */}
                    <div>
                        <p className="font-semibold text-gray-900 mb-4">
                            Online Presence
                        </p>
                        <div className="flex gap-5">
                            {[
                                { icon: Instagram, label: "Instagram", href: "#" },
                                { icon: Globe, label: "Website", href: "#" },
                                { icon: X, label: "X", href: "#" },
                                { icon: Linkedin, label: "LinkedIn", href: "#" },
                            ].map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-11 h-11 rounded-full border border-rose-200 flex items-center justify-center
                             text-[#D61264] hover:bg-[#D61264] hover:text-white
                             transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="space-y-8">
                    {/* President */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-7">
                        <p className="text-sm tracking-wide text-[#D61264] font-semibold mb-1">
                            PRESIDENT
                        </p>
                        <p className="text-xl font-bold text-gray-900 mb-4">
                            Rtr. Pratham M Pimpalshende
                        </p>

                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-center gap-3">
                                <Mail size={18} />
                                <a
                                    href="mailto:president@rotaractrvce.com"
                                    className="hover:text-[#D61264]"
                                >
                                    president@rotaractrvce.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} />
                                +91 83901 24801
                            </div>
                        </div>
                    </div>

                    {/* Secretary */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-7">
                        <p className="text-sm tracking-wide text-[#D61264] font-semibold mb-1">
                            SECRETARY
                        </p>
                        <p className="text-xl font-bold text-gray-900 mb-4">
                            Rtr. Nivriti Jain
                        </p>

                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-center gap-3">
                                <Mail size={18} />
                                <a
                                    href="mailto:secretary@rotaractrvce.com"
                                    className="hover:text-[#D61264]"
                                >
                                    secretary@rotaractrvce.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} />
                                +91 94833 12725
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default ContactPage;