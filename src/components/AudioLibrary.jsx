import audioFiles from "../data/audioFiles";
import { useState, useRef, useEffect } from "react";
import { Filter, Search, Play, Pause } from "lucide-react";

const formatTime = (seconds = 0) => {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
};

const AudioRow = ({
    audio,
    isActive,
    isPlaying,
    onPlay,
    progress,       // 0 - 100
    currentTime,    // seconds
    duration,       // seconds
    rowDuration,    // this row's specific duration
    onSeek,
}) => {
    const displayDuration = isActive ? duration : rowDuration;

    return (
        <div className="flex items-center gap-4 p-3 bg-rose-50 rounded-lg border border-rose-100">
            {/* Play Button */}
            <button
                onClick={() => onPlay(audio)}
                className="w-10 h-10 flex items-center justify-center bg-[#D61264] text-white rounded-full hover:bg-rose-700 transition-colors flex-shrink-0"
            >
                {isPlaying && isActive ? (
                    <Pause size={18} />
                ) : (
                    <Play size={18} className="ml-0.5" />
                )}
            </button>

            {/* Title + Progress */}
            <div className="flex-1">
                <div className="text-sm font-medium text-gray-800 mb-1">
                    {audio.title}
                </div>

                {/* Progress Bar */}
                <div
                    className="h-1.5 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
                    onClick={(e) => {
                        if (isActive) {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (e.clientX - rect.left) / rect.width;
                            onSeek(percent);
                        }
                    }}
                >
                    <div
                        className={`h-full bg-[#D61264] ${isActive && isPlaying ? 'transition-all' : ''}`}
                        style={{ width: `${isActive ? progress : 0}%` }}
                    />
                </div>

                {/* Time Info */}
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{isActive ? formatTime(currentTime) : "0:00"} / {formatTime(displayDuration)}</span>
                </div>
            </div>
        </div>
    );
};

const AudioLibraryPage = () => {
    const audioRef = useRef(null);

    const [currentAudio, setCurrentAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [audioDurations, setAudioDurations] = useState({});
    const [filterGrade, setFilterGrade] = useState("all");
    const [filterLanguage, setFilterLanguage] = useState("all");
    const [filterCategory, setFilterCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [filterContributor, setFilterContributor] = useState("all");

    const contributors = ["all", ...new Set(audioFiles.map(a => a.contributor))];

    const filteredAudio = audioFiles.filter((audio) => {
        return (
            (filterGrade === "all" || audio.grade === filterGrade) &&
            (filterLanguage === "all" || audio.language === filterLanguage) &&
            (filterCategory === "all" || audio.category === filterCategory) &&
            (filterContributor === "all" || audio.contributor === filterContributor) &&
            (searchQuery === "" ||
                audio.title.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    });


    // Preload audio durations
    useEffect(() => {
        audioFiles.forEach((audio) => {
            if (!audioDurations[audio.id]) {
                const tempAudio = new Audio(audio.url);
                tempAudio.addEventListener("loadedmetadata", () => {
                    setAudioDurations((prev) => ({
                        ...prev,
                        [audio.id]: tempAudio.duration,
                    }));
                });
            }
        });
    }, []);

    const handlePlay = (audio) => {
        if (!audioRef.current) return;

        // If clicking same audio → toggle
        if (currentAudio && currentAudio.id === audio.id) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
            return;
        }

        // New audio → stop previous, load new
        setCurrentAudio(audio);
        audioRef.current.src = audio.url;
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handleSeek = (percent) => {
        if (!audioRef.current || !currentAudio) return;
        const newTime = percent * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
        setProgress(percent * 100);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            const percent = (audio.currentTime / audio.duration) * 100 || 0;
            setProgress(percent);
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration || 0);
        };

        audio.addEventListener("timeupdate", updateProgress);
        audio.addEventListener("loadedmetadata", updateProgress);
        audio.addEventListener("ended", () => setIsPlaying(false));

        return () => {
            audio.removeEventListener("timeupdate", updateProgress);
            audio.removeEventListener("loadedmetadata", updateProgress);
        };
    }, []);


    return (
        <div className="min-h-screen bg-white pb-28">
            <audio ref={audioRef} />

            <section className="max-w-6xl mx-auto px-6 py-16">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">Audio Library</h1>
                <p className="text-xl text-gray-600 mb-12">
                    Listen to stories that inspire and educate
                </p>
                {/* Filters */}
                <div className="bg-rose-50 p-6 rounded-2xl mb-8 border border-rose-100">
                    <div className="flex items-center gap-4 mb-4">
                        <Filter className="text-[#D61264]" size={24} />
                        <h2 className="text-lg font-semibold text-gray-900">Filter Content</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4 mb-4">

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
                            <option value="Kannada">Kannada</option>
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
                        <select
                            value={filterContributor}
                            onChange={(e) => setFilterContributor(e.target.value)}
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                            aria-label="Filter by contributor"
                        >
                            {contributors.map((c) => (
                                <option key={c} value={c}>
                                    {c === "all" ? "All Contributors" : c}
                                </option>
                            ))}
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
                    {filteredAudio.map((audio) => (
                        <div
                            key={audio.id}
                            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {audio.title}
                            </h3>
                            <div className="text-gray-700 text-sm space-x-2 mb-4">
                                <span className="hidden md:inline">{audio.year}</span>
                                <span className="hidden md:inline">•</span>
                                <span>{audio.language}</span>
                                <span>•</span>
                                <span className="hidden md:inline">Grade {audio.grade}</span>
                                <span className="hidden md:inline">•</span>
                                <span className="hidden md:inline">{audio.category}</span>
                                <span className="hidden md:inline">•</span>
                                <span>{audio.contributor}</span>
                            </div>
                            <AudioRow
                                audio={audio}
                                isActive={currentAudio?.id === audio.id}
                                isPlaying={isPlaying}
                                onPlay={handlePlay}
                                progress={currentAudio?.id === audio.id ? progress : 0}
                                currentTime={currentTime}
                                duration={duration}
                                rowDuration={audioDurations[audio.id] || 0}
                                onSeek={handleSeek}
                            />

                        </div>
                    ))}
                </div>
            </section>

            {/* ✅ STICKY NOW PLAYING BAR */}
            {currentAudio && (
                <div className="fixed bottom-0 left-0 right-0 bg-[#d61264] border-t border-rose-200 shadow-lg">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-8">
                        <button
                            onClick={() => handlePlay(currentAudio)}
                            className="w-12 h-12 rounded-full bg-white text-[#D61264] flex items-center justify-center"
                        >
                            {isPlaying ? <Pause /> : <Play className="ml-1" />}
                        </button>

                        <div className="flex-1">

                            <div className="font-bold text-white">
                                Now Playing
                            </div>

                            <div className="font-semibold text-gray-300">
                                {currentAudio.title}
                            </div>

                            <div className="h-1.5 bg-black rounded-full overflow-hidden mt-2">
                                <div
                                    className="h-full bg-white"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AudioLibraryPage;    