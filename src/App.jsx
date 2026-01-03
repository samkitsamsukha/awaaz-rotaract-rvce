import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Heart, Users, Clock, ChevronDown, Mail, Phone, MapPin, Filter, Search } from 'lucide-react';
import { Crown, Mic, Sparkles, Award } from 'lucide-react';

const audioFiles = [
  {
    id: 1,
    title: "Shaheed Bhagat Singh",
    year: 2025,
    grade: "3-5",
    language: "Hindi",
    category: "Story",
    contributor: "Rtr. Pratham M Pimpalshende",
    url: "https://rotaractrvce.com/awaaz/2024/hindi/ShaheedBhagatSingh.mp3"
  },
  {
    id: 2,
    title: "Arjuna and the Bird's Eye",
    year: 2025,
    grade: "3-5",
    language: "English",
    category: "Story",
    contributor: "Rtr. Priyam Parashar",
    url: "https://rotaractrvce.com/awaaz/2024/english/ArjunaAndBirdsEye.m4a"
  },
  {
    id: 3,
    title: "Krisha and Arjuna",
    year: 2025,
    grade: "3-5",
    language: "English",
    category: "Story",
    contributor: "Rtr. Priyam Parashar",
    url: "https://rotaractrvce.com/awaaz/2024/english/KrishnaAndArjuna.m4a"
  },
  {
    id: 4,
    title: "Eklavya - The Silent Disciple",
    year: 2025,
    grade: "3-5",
    language: "English",
    category: "Story",
    contributor: "Rtr. Priyam Parashar",
    url: "https://rotaractrvce.com/awaaz/2024/english/EklavyaTheSilentDisciple.m4a"
  },
  {
    id: 5,
    title: "Milo The Cat",
    year: 2025,
    grade: "3-5",
    language: "English",
    category: "Poem",
    contributor: "Rtr. Priyam Parashar",
    url: "https://rotaractrvce.com/awaaz/2024/english/MiloTheCat.m4a"
  },
  {
    id: 5,
    title: "The Dream Train",
    year: 2025,
    grade: "3-5",
    language: "English",
    category: "Poem",
    contributor: "Rtr. Priyam Parashar",
    url: "https://rotaractrvce.com/awaaz/2024/english/TheDreamTrain.m4a"
  },
  {
    id: 5,
    title: "I Can Still Fly - Aashi Verma",
    year: 2025,
    grade: "3-5",
    language: "English",
    category: "Poem",
    contributor: "Rtr. Priyam Parashar",
    url: "https://rotaractrvce.com/awaaz/2024/english/ICanStillFlyByAashiVerma.m4a"
  },
];

const eventChairs = [
  {
    year: 2024,
    chairs: ["Rtr. Disha M S", "Rtr. Shrishti"]
  },
  {
    year: 2025,
    chairs: ["Rtr. Yashaswini Rajiv Kumar", "Rtr. Swati Gorampalli"]
  },
  {
    year: 2026,
    chairs: ["Rtr. Aditi Amit Kallolkar"]
  }
]

const partnerNGOs = [
  { name: "Akshar Foundation", location: "Mumbai, Maharashtra", purpose: "Literacy & Education for underprivileged children", audioCount: 24 },
  { name: "Pratham Education", location: "Pune, Maharashtra", purpose: "Quality education for every child", audioCount: 18 },
  { name: "Teach For India", location: "Bangalore, Karnataka", purpose: "Educational equity through leadership", audioCount: 31 },
  { name: "Smile Foundation", location: "Delhi, NCR", purpose: "Education, healthcare & livelihood", audioCount: 22 },
];

const timeline = [
  { year: "2021", title: "The Beginning", description: "Awaaz was born from a simple conviction: every child deserves to hear stories that inspire. We started with 3 NGOs and 50 audio recordings.", ngos: 3, hours: 12 },
  { year: "2022", title: "Growing Voices", description: "Our community expanded. More volunteers joined, more stories were told. We crossed 100 recordings and reached 15 NGOs across 3 states.", ngos: 15, hours: 45 },
  { year: "2023", title: "Building Bridges", description: "Multilingual content became our strength. We added Hindi, Marathi, and Tamil recordings, ensuring no child felt left behind.", ngos: 28, hours: 87 },
  { year: "2024", title: "Impact Unfolds", description: "Today, Awaaz is a living library of hope. With 40+ NGO partnerships and 200+ hours of content, we continue to amplify voices that matter.", ngos: 42, hours: 215 },
];

// Audio Player Component
const AudioPlayer = ({ title, url }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress bar
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const percent =
        (audio.currentTime / audio.duration) * 100 || 0;
      setProgress(percent);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  return (
    <div className="flex items-center gap-3 p-3 bg-rose-50 rounded-lg border border-rose-100">
      <audio ref={audioRef} preload="metadata">
        {/* Preferred format first */}
        <source src={url} type="audio/mpeg" />
        <source src={url} type="audio/mp4" />
        <source src={url} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center bg-[#D61264] text-white rounded-full hover:bg-rose-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
      </button>

      <div className="flex-1">
        <div className="text-sm font-medium text-gray-800 mb-1">
          {title}
        </div>

        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-rose-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

// Main App Component
const AwaazWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [filterYear, setFilterYear] = useState('all');
  const [filterGrade, setFilterGrade] = useState('all');
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Navigation
  const Nav = () => (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-sans font-bold text-[#D61264] hover:text-rose-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 rounded"
            aria-label="Awaaz Home"
          >
            Awaaz - A Rotaract Club of RVCE Initiative
          </button>
          <div className="flex gap-6">
            {['home', 'about', 'journey', 'audio', 'partners', 'contributors', 'contact'].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`text-sm font-medium transition-colors focus:outline-none focus:underline ${currentPage === page ? 'text-[#D61264]' : 'text-gray-700 hover:text-[#D61264]'
                  }`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page === 'home' ? 'Home' :
                  page === 'about' ? 'About' :
                    page === 'journey' ? 'Our Journey' :
                      page === 'audio' ? 'Audio Library' :
                        page === 'partners' ? 'Partners' :
                          page === 'contributors' ? 'Contributors' : 'Contact'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  // Home Page
  const HomePage = () => (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-50 via-rose-50/70 to-white">

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

      {/* Quote Section */}
      <section className="relative max-w-4xl mx-auto px-6 py-24">
        <div className="relative bg-gradient-to-br from-[#D61264] to-rose-500 text-white p-14 rounded-[3rem] shadow-2xl">
          <div className="absolute inset-0 bg-white/10 rounded-[3rem] backdrop-blur-sm" />

          <div className="relative z-10">
            <Heart className="mx-auto mb-8 opacity-90" size={52} />
            <blockquote className="text-2xl md:text-3xl font-sans text-center leading-relaxed">
              “A voice is more than sound.
              It is presence, comfort, and connection.
              <span className="block mt-4">
                Through Awaaz, we build bridges where distance once stood.”
              </span>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );


  // About Page
  const AboutPage = () => (
    <div className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-sans font-bold text-gray-900 mb-8">About Awaaz</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p className="text-xl">
            Awaaz began not as a project, but as a conviction. A belief that every child,
            regardless of circumstance, deserves access to stories that inspire, educate, and comfort.
          </p>

          <h2 className="text-3xl font-sans font-bold text-gray-900 mt-12 mb-6">Why Awaaz Exists</h2>
          <p>
            In many communities, books are a luxury. Internet access is inconsistent. But voices—voices
            travel. They reach through devices shared among families, through community centers, through
            the simple act of gathering to listen together.
          </p>
          <p>
            Awaaz creates audio content that transcends barriers of literacy, accessibility, and privilege.
            We partner with NGOs serving underprivileged children, recording stories, lessons, and messages
            of hope in multiple languages.
          </p>

          <div className="bg-rose-50 border-l-4 border-[#D61264] p-8 my-12 rounded-r-lg">
            <h3 className="text-2xl font-sans font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-800">
              To amplify voices that educate, inspire, and connect—ensuring no child is left unheard.
            </p>
          </div>

          <div className="bg-rose-50 border-l-4 border-[#D61264] p-8 my-12 rounded-r-lg">
            <h3 className="text-2xl font-sans font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-800">
              A world where every child has access to stories and knowledge through the simple,
              powerful medium of voice.
            </p>
          </div>

          <h2 className="text-3xl font-sans font-bold text-gray-900 mt-12 mb-6">Core Values</h2>
          <ul className="space-y-4">
            <li><strong className="text-[#D61264]">Empathy:</strong> We listen first, create second.</li>
            <li><strong className="text-[#D61264]">Accessibility:</strong> Every child, every voice, every story matters.</li>
            <li><strong className="text-[#D61264]">Conviction:</strong> We are driven by purpose, not publicity.</li>
            <li><strong className="text-[#D61264]">Community:</strong> We grow together, learn together, serve together.</li>
          </ul>
        </div>
      </section>
    </div>
  );

  // Journey Page
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

  // Audio Library Page
  const AudioLibraryPage = () => {
    const filteredAudio = audioFiles.filter(audio => {
      return (filterYear === 'all' || audio.year.toString() === filterYear) &&
        (filterGrade === 'all' || audio.grade === filterGrade) &&
        (filterLanguage === 'all' || audio.language === filterLanguage) &&
        (filterCategory === 'all' || audio.category === filterCategory) &&
        (searchQuery === '' || audio.title.toLowerCase().includes(searchQuery.toLowerCase()));
    });

    return (
      <div className="min-h-screen bg-white">
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-sans font-bold text-gray-900 mb-4">Audio Library</h1>
          <p className="text-xl text-gray-600 mb-12">Listen to stories that inspire and educate</p>

          {/* Filters */}
          <div className="bg-rose-50 p-6 rounded-2xl mb-8 border border-rose-100">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="text-[#D61264]" size={24} />
              <h2 className="text-lg font-semibold text-gray-900">Filter Content</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label="Filter by year"
              >
                <option value="all">All Years</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
              <select
                value={filterGrade}
                onChange={(e) => setFilterGrade(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label="Filter by grade"
              >
                <option value="all">All Grades</option>
                <option value="1-2">Grade 1-2</option>
                <option value="3-5">Grade 3-5</option>
                <option value="6-8">Grade 6-8</option>
                <option value="9-12">Grade 9-12</option>
              </select>
              <select
                value={filterLanguage}
                onChange={(e) => setFilterLanguage(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label="Filter by language"
              >
                <option value="all">All Languages</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Marathi">Marathi</option>
              </select>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label="Filter by category"
              >
                <option value="all">All Categories</option>
                <option value="Story">Story</option>
                <option value="Fable">Fable</option>
                <option value="Poem">Poem</option>
                <option value="Educational">Educational</option>
                <option value="Motivational">Motivational</option>
              </select>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label="Search audio content"
              />
            </div>
          </div>

          {/* Audio List */}
          <div className="space-y-4">
            {filteredAudio.map(audio => (
              <div key={audio.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{audio.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full">{audio.category}</span>
                      <span>Grade {audio.grade}</span>
                      <span>•</span>
                      <span>{audio.language}</span>
                      <span>•</span>
                      <span>{audio.year}</span>
                      <span>•</span>
                      <span>{audio.contributor}</span>
                    </div>
                  </div>
                </div>
                <AudioPlayer title={audio.title} url={audio.url} />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };

  // Partners Page
  const PartnersPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-sans font-bold text-gray-900 mb-4 text-center">Partner NGOs</h1>
        <p className="text-xl text-gray-600 text-center mb-16">Building bridges through collaboration</p>

        <div className="grid md:grid-cols-2 gap-8">
          {partnerNGOs.map((ngo, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-sans font-bold text-gray-900 mb-3">{ngo.name}</h3>
              <div className="flex items-start gap-2 text-gray-600 mb-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-[#D61264]" />
                <span>{ngo.location}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{ngo.purpose}</p>
              <div className="bg-rose-50 px-4 py-3 rounded-lg">
                <span className="text-rose-700 font-semibold">{ngo.audioCount} audio recordings</span>
                <span className="text-gray-600"> created in collaboration</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

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
                EVENT CHAIRS
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


  // Contact Page
  const ContactPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-sans font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
        <p className="text-xl text-gray-600 text-center mb-16">We'd love to hear from you</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-sans font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-[#D61264] mt-1" size={24} />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a href="mailto:hello@awaaz.org" className="text-gray-600 hover:text-[#D61264] transition-colors">
                    hello@awaaz.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-[#D61264] mt-1" size={24} />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Phone</div>
                  <a href="tel:+919876543210" className="text-gray-600 hover:text-[#D61264] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-[#D61264] mt-1" size={24} />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Location</div>
                  <div className="text-gray-600">Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-gray-900 mb-4">Follow Our Journey</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-[#D61264] hover:bg-[#D61264] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-[#D61264] hover:bg-[#D61264] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-[#D61264] hover:bg-[#D61264] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-sans font-bold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label="Your name"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label="Email address"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label="Subject"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label="Your message"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#D61264] text-white px-8 py-3 rounded-lg font-medium hover:bg-rose-700 transition-colors focus:outline-none focus:ring-4 focus:ring-rose-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 mb-2 max-w-2xl mx-auto">
            Awaaz - A Rotaract Club of RVCE Initiative
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
      {currentPage === 'journey' && <JourneyPage />}
      {currentPage === 'audio' && <AudioLibraryPage />}
      {currentPage === 'partners' && <PartnersPage />}
      {currentPage === 'contributors' && <ContributorsPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer />
    </div>
  );
};

export default AwaazWebsite;