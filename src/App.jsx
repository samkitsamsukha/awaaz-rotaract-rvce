import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Heart, Users, Clock, ChevronDown, Mail, Phone, MapPin, Filter, Search } from 'lucide-react';
import { Crown, Mic, Sparkles, Award } from 'lucide-react';
import Construction from './components/Construction';
import { Instagram, Linkedin, Globe, X } from "lucide-react";
import PartnersPage from './components/Partners';
import ContactPage from './components/ContactPage';
import ContributorsPage from './components/ContributorsPage';
import AboutPage from './components/AboutPage';
import JourneyPage from './components/JourneyPage';
import AudioLibraryPage from './components/AudioLibrary';
import { Menu } from "lucide-react";

const awards = [
  {
    image: "/award2025.png",
    title: "Best in Area Of Focus",
    highlight: "(Education)",
    badge: "Awarded by Rotary District Organisation 3191 2024-25",
    alt: "Miracle Awards 2024-25 - Best in Area of Focus (Education)",
  },
  {
    image: "/outstandingproject2024.png",
    title: "Outstanding Project",
    highlight: "By A Rotaract Club",
    badge: "Awarded by Rotaract South Asia MDIO",
    alt: "Outstanding Project By A Rotaract Club (RSA MDIO)",
  },
  {
    image: "/mostimpactfulinitiative2024.png",
    title: "Most Impactful Initiative",
    highlight: "University Based Club",
    badge: "Awarded by Rotary District Organisation 3191 2023-24",
    alt: "Most Impactful Initiative By A University Based Club",
  },
  {
    image: "/outstandingliteracyeducation2024.png",
    title: "Outstanding Project in",
    highlight: "Literacy & Education Avenue",
    badge: "Awarded by SEARIC MDIO during T.U.R.F. Indore",
    alt: "Outstanding Project in Literacy and Education Avenue",
  },
];

const AwaazWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const Nav = () => {
    const [open, setOpen] = useState(false);



    const pages = [
      { key: "home", label: "Home" },
      { key: "about", label: "About" },
      // { key: "journey", label: "Our Journey" },
      { key: "audio", label: "Audio Library" },
      { key: "beneficiaries", label: "Beneficiaries" },
      { key: "contributors", label: "Contributors" },
      { key: "contact", label: "Contact" },
    ];

    const handleNav = (page) => {
      setCurrentPage(page);
      setOpen(false);
    };

    return (
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo / Title */}
            <div className="flex items-center gap-3">
              {/* Rotaract Logo + Text → External Website */}
              <a
                href="https://rotaractrvce.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                aria-label="Rotaract Club of RVCE Website"
              >
                <div className="w-15 h-15 md:w-20 md:h-20">
                  <img src="/rotaract.png" alt="Rotaract Club of RVCE Logo" />
                </div>
              </a>

              <div className="leading-tight">
                {/* Awaaz → Home */}
                <button
                  onClick={() => handleNav("home")}
                  className="text-lg md:text-2xl font-bold text-[#D61264] hover:text-rose-700 transition-colors text-left"
                  aria-label="Awaaz Home"
                >
                  <div className="text-3xl">Awaaz</div>
                </button>

                {/* Rotaract Text → External Website */}
                <a
                  href="https://rotaractrvce.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-base text-gray-500 font-medium hover:text-gray-700 transition-colors block"
                >
                  An Initiative by the Rotaract Club of RVCE
                </a>
              </div>
            </div>


            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {pages.map((p) => (
                <button
                  key={p.key}
                  onClick={() => handleNav(p.key)}
                  className={`text-sm font-medium transition-colors focus:outline-none ${currentPage === p.key
                    ? "text-[#D61264]"
                    : "text-gray-700 hover:text-[#D61264]"
                    }`}
                  aria-current={currentPage === p.key ? "page" : undefined}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden mt-4 border-t pt-4 flex flex-col gap-3">
              {pages.map((p) => (
                <button
                  key={p.key}
                  onClick={() => handleNav(p.key)}
                  className={`text-left px-2 py-2 rounded-lg font-medium transition-colors ${currentPage === p.key
                    ? "text-[#D61264] bg-rose-50"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    );
  };

  // Home Page
  const HomePage = () => (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-50 via-rose-50/70 to-white">
      {/* <Construction /> */}
      {/* Background Art Elements */}
      <div className="absolute top-[-6rem] left-[-6rem] w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />
      <div className="absolute top-40 right-[-5rem] w-80 h-80 bg-rose-300/30 rounded-full blur-3xl" />

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-rose-100 text-rose-700 text-sm tracking-wide">
            A Journey of Voices & Stories
          </span>

          <h1 className="text-5xl md:text-6xl font-sans font-bold text-gray-900 mb-8 leading-tight">
            Every Voice <br />
            <span className="text-[#D61264]">Tells a Story</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Awaaz is a quiet revolution — one story, one recording, one connection at a time.
            We create audio that reaches where books cannot, bridging hearts through voices.
          </p>

          <button
            onClick={() => setCurrentPage('audio')}
            className="group relative inline-flex items-center gap-2 bg-[#D61264] text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg transition-all hover:bg-rose-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-rose-300"
            aria-label="Explore our audio library"
          >
            Explore Our Library
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Clock size={32} />,
              title: "4+ Years",
              desc: "of creating meaningful impact through audio storytelling",
            },
            {
              icon: <Users size={32} />,
              title: "42 NGOs",
              desc: "connected and empowered across multiple states",
            },
            {
              icon: <Volume2 size={32} />,
              title: "215+ Hours",
              desc: "of audio content created with love and purpose",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-md border border-rose-100 transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[#D61264]">
                {item.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-3 text-center">
                {item.title}
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      {awards.map((award, index) => (
        <section key={index} className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-rose-100 p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Award Image */}
              <div className="flex justify-center">
                <img
                  src={award.image}
                  alt={award.alt}
                  className="max-w-sm w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Award Text */}
              <div>
                <span className="inline-block mb-4 px-4 py-1 rounded-full bg-rose-100 text-rose-700 text-sm tracking-wide">
                  {award.badge}
                </span>

                <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 mb-6">
                  {award.title} <br />
                  <span className="text-[#D61264]">{award.highlight}</span>
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {award.description1}
                </p>

                <p className="text-gray-600">
                  {award.description2}
                </p>
              </div>

            </div>
          </div>
        </section>
      ))}

    </div>
  );

  // Audio Library Page






  // Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 mb-2 max-w-2xl mx-auto">
            Awaaz - An Initiative by the Rotaract Club of RVCE
          </p>
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {/* {currentPage === 'journey' && <JourneyPage />} */}
      {currentPage === 'audio' && <AudioLibraryPage />}
      {currentPage === 'beneficiaries' && <PartnersPage />}
      {currentPage === 'contributors' && <ContributorsPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer />
    </div>
  );
};

export default AwaazWebsite;