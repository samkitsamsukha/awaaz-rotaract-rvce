export default function Terms() {
    return (
        <div className="min-h-screen bg-rose-50 text-rose-900 px-8 py-24">
            <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg leading-relaxed max-w-3xl">
                By accessing and using Awaaz, a Rotaract RVCE initiative, you agree to abide by
                the guidelines and policies set forth by the club and the institution.
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-lg max-w-3xl">
                <li>Users must submit authentic and respectful content.</li>
                <li>No form of harassment, plagiarism, or misinformation is tolerated.</li>
                <li>Rotaract RVCE reserves the right to moderate all submissions.</li>
                <li>Any misuse of the platform may result in restricted access.</li>
            </ul>
            <p className="mt-4 text-lg max-w-3xl">
                Your participation reflects your acknowledgment of these terms.
            </p>
        </div>
    );
}