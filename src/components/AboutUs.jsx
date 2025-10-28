import { Volume2 } from "lucide-react";

export default function AboutUs() {
    const textToSpeak = `
        Awaaz is a Rotaract RVCE initiative that creates audiobooks to support
        visually impaired students. Our mission is to make education inclusive
        by providing clear, high-quality audio content recorded by volunteers.
        We believe that every student deserves equal access to learning,
        and Awaaz is our way of bringing knowledge closer to those who need it most.
    `;

    const handleSpeak = () => {
        const speech = new SpeechSynthesisUtterance(textToSpeak);
        speech.lang = "en-IN";
        speech.rate = 0.70;
        speech.pitch = 1;

        const voices = window.speechSynthesis.getVoices();

        // Try to pick an Indian English voice
        const indianVoice =
            voices.find(v =>
                v.name.toLowerCase().includes("india") ||
                v.name.toLowerCase().includes("indian") ||
                v.lang.toLowerCase() === "en-in"
            );

        if (indianVoice) {
            speech.voice = indianVoice;
        }

        window.speechSynthesis.speak(speech);
    };

    return (
        <div className="min-h-screen bg-rose-50 px-6 md:px-16 py-24 text-rose-900">

            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight 
                bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                    About Us
                </h1>

                <button
                    onClick={handleSpeak}
                    className="flex items-center gap-2 bg-rose-200 hover:bg-rose-300 
                    text-rose-900 px-4 py-2 rounded-xl shadow-md transition-all"
                >
                    <Volume2 size={22} />
                    Speak
                </button>
            </div>

            {/* Mission Section */}
            <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed animate-fadeIn">
                <span className="font-semibold text-rose-700">Awaaz</span> is a Rotaract RVCE
                initiative dedicated to supporting visually impaired and blind learners by
                creating clear, accessible audiobooks. Our volunteers record academic lessons,
                stories, and resource materials — ensuring that no student is held back due
                to lack of accessible content.
            </p>

            {/* Highlight Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-14">
                <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl 
                border border-rose-100 transition-all">
                    <h3 className="text-xl font-bold text-rose-700 mb-2">Our Purpose</h3>
                    <p className="text-rose-800">
                        To make education inclusive by converting written content into audiobooks
                        for students who are blind or have low vision.
                    </p>
                </div>

                <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl 
                border border-rose-100 transition-all">
                    <h3 className="text-xl font-bold text-rose-700 mb-2">Our Vision</h3>
                    <p className="text-rose-800">
                        A world where every learner — regardless of visual ability — has equal
                        access to knowledge, resources, and opportunities.
                    </p>
                </div>

                <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl 
                border border-rose-100 transition-all">
                    <h3 className="text-xl font-bold text-rose-700 mb-2">Our Work</h3>
                    <p className="text-rose-800">
                        From textbooks to literature and reference materials, we record high-quality
                        audio content that helps visually impaired students continue learning
                        independently.
                    </p>
                </div>
            </div>

            {/* Info Section */}
            <div className="mt-20 flex flex-col md:flex-row items-center gap-10">

                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4 text-rose-700">Why Awaaz Matters</h2>
                    <p className="text-lg leading-relaxed text-rose-900">
                        ✦ Many students who are blind struggle with inaccessible textbooks. <br />
                        ✦ Audiobooks bridge this gap by making learning independent and stress-free. <br />
                        ✦ Every Awaaz volunteer helps bring someone closer to education. <br />
                        ✦ Our recordings uplift confidence, support academic growth, and ensure dignity.
                    </p>
                </div>

                <div className="md:w-1/2">
                    <img
                        alt="Inclusive Learning Illustration"
                        className="rounded-3xl shadow-lg border border-rose-100"
                        src="https://img.freepik.com/free-vector/audio-book-concept-illustration_114360-8365.jpg"
                    />
                </div>
            </div>
        </div>
    );
}
