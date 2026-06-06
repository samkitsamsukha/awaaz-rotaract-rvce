import React, { useEffect, useState } from 'react';
import { BarChart3, Clock, Globe2, Menu, Mic, Sparkles, TrendingUp, Users, X } from 'lucide-react';
import PartnersPage from './components/Partners';
import ContactPage from './components/ContactPage';
import ContributorsPage from './components/ContributorsPage';
import AboutPage from './components/AboutPage';
import AudioLibraryPage from './components/AudioLibrary';
import audioFiles from './data/audioFiles';

const awards = [
    {
        image: '/award2025.png',
        title: 'Best in Area Of Focus',
        highlight: '(Education)',
        badge: 'Awarded by Rotary District Organisation 3191 2024-25',
        alt: 'Miracle Awards 2024-25 - Best in Area of Focus (Education)',
    },
    {
        image: '/outstandingproject2024.png',
        title: 'Outstanding Project',
        highlight: 'By A Rotaract Club',
        badge: 'Awarded by Rotaract South Asia MDIO',
        alt: 'Outstanding Project By A Rotaract Club (RSA MDIO)',
    },
    {
        image: '/mostimpactfulinitiative2024.png',
        title: 'Most Impactful Initiative',
        highlight: 'University Based Club',
        badge: 'Awarded by Rotary District Organisation 3191 2023-24',
        alt: 'Most Impactful Initiative By A University Based Club',
    },
    {
        image: '/outstandingliteracyeducation2024.png',
        title: 'Outstanding Project in',
        highlight: 'Literacy & Education Avenue',
        badge: 'Awarded by SEARIC MDIO during T.U.R.F. Indore',
        alt: 'Outstanding Project in Literacy and Education Avenue',
    },
];

const impactTimeline = [
    { year: 2023, ngos: 14 },
    { year: 2024, ngos: 15 },
    { year: 2025, ngos: 21 },
    { year: 2026, ngos: 18 },
];

const allImpactYears = [2023, 2024, 2025, 2026];

const audioCountByYear = audioFiles.reduce((accumulator, audio) => {
    accumulator[audio.year] = (accumulator[audio.year] || 0) + 1;
    return accumulator;
}, {});

const audioCountByLanguage = audioFiles.reduce((accumulator, audio) => {
    accumulator[audio.language] = (accumulator[audio.language] || 0) + 1;
    return accumulator;
}, {});

const formatRuntime = (seconds = 0) => {
    if (!Number.isFinite(seconds) || seconds <= 0) {
        return '0h 0m';
    }

    const roundedMinutes = Math.round(seconds / 60);
    const hours = Math.floor(roundedMinutes / 60);
    const minutes = roundedMinutes % 60;

    return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
};

const AwaazWebsite = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [totalRuntimeSeconds, setTotalRuntimeSeconds] = useState(null);

    useEffect(() => {
        let cancelled = false;

        const loadDurations = async () => {
            const durations = await Promise.all(
                audioFiles.map(
                    (audio) =>
                        new Promise((resolve) => {
                            const tempAudio = new Audio();
                            tempAudio.preload = 'metadata';
                            tempAudio.src = audio.url;

                            const finish = () => {
                                resolve(Number.isFinite(tempAudio.duration) ? tempAudio.duration : 0);
                            };

                            tempAudio.addEventListener('loadedmetadata', finish, { once: true });
                            tempAudio.addEventListener('error', finish, { once: true });
                        })
                )
            );

            if (!cancelled) {
                setTotalRuntimeSeconds(durations.reduce((sum, duration) => sum + duration, 0));
            }
        };

        loadDurations();

        return () => {
            cancelled = true;
        };
    }, []);

    const Nav = () => {
        const [open, setOpen] = useState(false);

        const pages = [
            { key: 'home', label: 'Home' },
            { key: 'about', label: 'About' },
            { key: 'audio', label: 'Audio Library' },
            { key: 'beneficiaries', label: 'Beneficiaries' },
            { key: 'contributors', label: 'Contributors' },
            { key: 'contact', label: 'Contact' },
        ];

        const handleNav = (page) => {
            setCurrentPage(page);
            setOpen(false);
        };

        return (
            <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
                <div className="mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <a
                                href="https://rotaractrvce.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 group"
                                aria-label="Rotaract Club of RVCE Website"
                            >
                                <div className="h-16 w-16 md:h-20 md:w-20">
                                    <img src="/rotaract.png" alt="Rotaract Club of RVCE Logo" />
                                </div>
                            </a>

                            <div className="leading-tight">
                                <button
                                    onClick={() => handleNav('home')}
                                    className="text-left text-3xl font-bold text-[#D61264] transition-colors hover:text-rose-700"
                                    aria-label="Awaaz Home"
                                >
                                    Awaaz
                                </button>
                                <a
                                    href="https://rotaractrvce.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-xs font-medium text-gray-500 transition-colors hover:text-gray-700 md:text-base"
                                >
                                    An Initiative by the Rotaract Club of RVCE
                                </a>
                            </div>
                        </div>

                        <div className="hidden gap-6 md:flex">
                            {pages.map((page) => (
                                <button
                                    key={page.key}
                                    onClick={() => handleNav(page.key)}
                                    className={`text-sm font-medium transition-colors focus:outline-none ${currentPage === page.key ? 'text-[#D61264]' : 'text-gray-700 hover:text-[#D61264]'}`}
                                    aria-current={currentPage === page.key ? 'page' : undefined}
                                >
                                    {page.label}
                                </button>
                            ))}
                        </div>

                        <button
                            className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            {open ? <X /> : <Menu />}
                        </button>
                    </div>

                    {open && (
                        <div className="mt-4 flex flex-col gap-3 border-t pt-4 md:hidden">
                            {pages.map((page) => (
                                <button
                                    key={page.key}
                                    onClick={() => handleNav(page.key)}
                                    className={`rounded-lg px-2 py-2 text-left font-medium transition-colors ${currentPage === page.key ? 'bg-rose-50 text-[#D61264]' : 'text-gray-700 hover:bg-gray-100'}`}
                                >
                                    {page.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        );
    };

    const HomePage = () => {
        const totalRecordings = audioFiles.length;
        const uniqueContributors = new Set(audioFiles.map((audio) => audio.contributor)).size;
        const languageEntries = Object.entries(audioCountByLanguage).sort((first, second) => second[1] - first[1]);
        const audioYearEntries = allImpactYears.map((year) => ({
            year,
            count: audioCountByYear[year] || 0,
        }));
        const ngoYearEntries = impactTimeline.map((entry) => ({
            year: entry.year,
            count: entry.ngos,
        }));
        const chartMax = Math.max(
            ...ngoYearEntries.map((entry) => entry.count),
            ...audioYearEntries.map((entry) => entry.count),
            1
        );
        const finalNgoCount = impactTimeline[impactTimeline.length - 1].ngos;
        const recordingsPerNgo = totalRecordings / finalNgoCount;
        const runtimeLabel = totalRuntimeSeconds === null ? 'Loading runtime…' : formatRuntime(totalRuntimeSeconds);

        const statCards = [
            {
                label: 'Year-wise NGOs reached',
                value: '42',
                detail: impactTimeline.map((entry) => `${entry.year}: ${entry.ngos}`).join(' · '),
                icon: <Users size={18} />,
                tone: 'from-purple-500 to-purple-500',
            },
            {
                label: 'Audiobooks recorded by year',
                value: totalRecordings.toString(),
                detail: audioYearEntries.map((entry) => `${entry.year}: ${entry.count}`).join(' · '),
                icon: <Mic size={18} />,
                tone: 'from-rose-500 to-rose-500',
            },
            {
                label: 'All-time languages',
                value: languageEntries.length.toString(),
                detail: languageEntries.map(([language, count]) => `${language}: ${count}`).join(' · '),
                icon: <Globe2 size={18} />,
                tone: 'from-emerald-500 to-emerald-500',
            },
            {
                label: 'Content runtime',
                value: runtimeLabel,
                detail: 'Pulled live from audio metadata',
                icon: <Clock size={18} />,
                tone: 'from-amber-500 to-amber-500',
            },
        ];

        const barHeight = (value) => {
            if (!value) {
                return '0%';
            }

            return `${Math.max((value / chartMax) * 100, 8)}%`;
        };

        return (
            <div className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white">
                <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
                <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-200/20 blur-3xl" />

                <section className="relative mx-auto max-w-7xl px-6 pb-8 pt-8 lg:pb-8 lg:pt-8">
                    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#D61264] shadow-sm backdrop-blur">
                                <Sparkles size={14} />
                                A journey of voices, data, and access
                            </div>

                            <div className="space-y-5">
                                <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-gray-950 md:text-6xl lg:text-7xl">
                                    Every Voice
                                    <span className="block bg-linear-to-r from-[#D61264] via-rose-500 to-fuchsia-500 bg-clip-text text-transparent">
                                        Builds a Library of Impact
                                    </span>
                                </h1>
                                <p className="max-w-2xl text-lg leading-8 text-gray-700 md:text-xl">
                                    Awaaz turns stories into accessible audio and turns that work into measurable reach. The hero below maps our yearly NGO partnerships, audiobook growth, language spread, and total listening time in one glance.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => setCurrentPage('audio')}
                                    className="group inline-flex items-center gap-2 rounded-full bg-[#D61264] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-rose-500/25 transition-all hover:-translate-y-0.5 hover:bg-rose-700 hover:shadow-2xl"
                                    aria-label="Explore our audio library"
                                >
                                    Explore Audio Library
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </button>
                                <button
                                    onClick={() => setCurrentPage('beneficiaries')}
                                    className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-7 py-4 text-base font-semibold text-gray-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-md"
                                    aria-label="View our beneficiaries"
                                >
                                    View Beneficiaries
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl bg-[#D61264]/10 blur-3xl" />
                            <div className="relative overflow-hidden rounded-3xl border border-slate-800/10 bg-white p-5 text-black shadow-[0_30px_100px_rgba(15,23,42,0.35)] md:p-7">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_34%)]" />
                                <div className="relative flex items-start justify-between gap-4">
                                    <div>
                                        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-black/70">
                                            <BarChart3 size={12} />
                                            Impact dashboard
                                        </div>
                                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                                            Awaaz in Motion
                                        </h2>
                                    </div>
                                </div>

                                <div className="relative mt-6 rounded-3xl border border-black/10 bg-black/5 p-4">
                                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-black/45">
                                        <span>NGOs reached</span>
                                        <span>Audiobooks recorded</span>
                                    </div>

                                    <div className="mt-5 grid h-64 grid-cols-4 items-end gap-3">
                                        {allImpactYears.map((year) => {
                                            const ngoValue = ngoYearEntries.find((entry) => entry.year === year)?.count || 0;
                                            const audioValue = audioYearEntries.find((entry) => entry.year === year)?.count || 0;

                                            return (
                                                <div key={year} className="flex h-full flex-col items-center justify-end gap-2">
                                                    <div className="flex h-full w-full items-end gap-2">
                                                        <div className="flex h-full flex-1 items-end">
                                                            <div
                                                                className="w-full rounded-t-2xl bg-gradient-to-t from-[#D61264] via-rose-500 to-rose-300 shadow-[0_0_24px_rgba(214,18,100,0.28)] transition-all"
                                                                style={{ height: barHeight(ngoValue) }}
                                                                title={`${year} NGOs reached: ${ngoValue}`}
                                                            />
                                                        </div>
                                                        <div className="flex h-full flex-1 items-end">
                                                            <div
                                                                className="w-full rounded-t-2xl bg-gradient-to-t from-cyan-500 via-sky-400 to-emerald-300 shadow-[0_0_24px_rgba(34,211,238,0.24)] transition-all"
                                                                style={{ height: barHeight(audioValue) }}
                                                                title={`${year} audiobooks recorded: ${audioValue}`}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="text-[11px] font-semibold text-black/70">{year}</div>
                                                    <div className="flex items-center gap-3 text-[10px] text-black/45">
                                                        <span>{ngoValue || '—'}</span>
                                                        <span>{audioValue || '—'}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-black/55">
                                        <span className="inline-flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-[#D61264]" />
                                            NGOs reached
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                                            Audiobooks recorded
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-4 xl:grid-cols-4">
                        {statCards.map((card) => (
                            <div
                                key={card.label}
                                className="group rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(15,23,42,0.12)]"
                            >
                                <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${card.tone} px-3 py-1 text-xs font-semibold text-white`}>
                                    {card.icon}
                                    {card.label}
                                </div>
                                <div className="mt-4 text-3xl font-black tracking-tight text-gray-950">
                                    {card.value}
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {card.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {awards.map((award, index) => (
                    <section key={index} className="relative mx-auto max-w-6xl px-6 py-24">
                        <div className="rounded-3xl border border-rose-100 bg-white/70 p-10 shadow-lg backdrop-blur-xl md:p-16">
                            <div className="grid items-center gap-12 md:grid-cols-2">
                                <div className="flex justify-center">
                                    <img
                                        src={award.image}
                                        alt={award.alt}
                                        className="max-w-sm w-full rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                                    />
                                </div>

                                <div>
                                    <span className="inline-block mb-4 rounded-full bg-rose-100 px-4 py-1 text-sm tracking-wide text-rose-700">
                                        {award.badge}
                                    </span>

                                    <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                                        {award.title} <br />
                                        <span className="text-[#D61264]">{award.highlight}</span>
                                    </h2>

                                    {award.description1 && (
                                        <p className="mb-4 text-lg leading-relaxed text-gray-700">
                                            {award.description1}
                                        </p>
                                    )}

                                    {award.description2 && (
                                        <p className="text-gray-600">
                                            {award.description2}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        );
    };

    const Footer = () => (
        <footer className="bg-gray-900 py-4 text-gray-300">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <p className="mx-auto mb-2 max-w-2xl text-gray-400">
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
            {currentPage === 'audio' && <AudioLibraryPage />}
            {currentPage === 'beneficiaries' && <PartnersPage />}
            {currentPage === 'contributors' && <ContributorsPage />}
            {currentPage === 'contact' && <ContactPage />}
            <Footer />
        </div>
    );
};

export default AwaazWebsite;
