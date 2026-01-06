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

export default AboutPage;