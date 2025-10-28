import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white fixed top-0 left-0 z-50">
            {/* Left Section */}
            <div className="flex items-center gap-3">
                <img
                    src="/rotaract.png"
                    alt="Awaaz Logo"
                    className="w-10 h-10 object-contain"
                />
                <h1 className="text-lg font-semibold text-gray-800">
                    Awaaz: A Rotaract RVCE Initiative
                </h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6 text-gray-700 font-medium">
                <Link to="/about" className="hover:text-blue-600 transition">About Us</Link>
                <Link to="/terms" className="hover:text-blue-600 transition">Terms</Link>
                <Link to="/feedback" className="hover:text-blue-600 transition">Feedback</Link>
            </div>
        </nav>
    );
}
