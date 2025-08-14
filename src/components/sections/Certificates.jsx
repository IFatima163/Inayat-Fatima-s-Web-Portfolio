import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

export const Certificates = () => {
    const [showBadges, setShowBadges] = useState(false);

    const googleBadges = [
        "Introduction to Generative AI – Google Cloud Skills Boost",
        "Introduction to Image Generation – Google Cloud Skills Boost",
        "Machine Learning Operations (MLOps) for Generative AI – Google Cloud Skills Boost",
        "Machine Learning Operations (MLOps) with Vertex AI: Model Evaluation – Google Cloud Skills Boost",
        "Responsible AI for Developers: Fairness & Bias – Google Cloud Skills Boost",
        "Responsible AI for Developers: Interpretability & Transparency – Google Cloud Skills Boost",
        "Responsible AI for Developers: Privacy & Safety – Google Cloud Skills Boost",
        "Introduction to Security in the World of AI – Google Cloud Skills Boost"
    ];

    return (
        <section id="certificates" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 
                        bg-clip-text text-transparent text-center">
                        Certificates
                    </h2>

                    <div id="skills" className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 
                            hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition-all">
                            <ol className="list-decimal list-inside text-white-200 space-y-2">
                                <li>Unity Development Internship – Softic Solutions</li>
                                <li>Introduction to Data Analytics – IBM</li>
                                <li>Google My Business – Google</li>
                                <li>Generative AI - Google Cloud Badges ({googleBadges.length})
                                    <button
                                        className="border border-purple-300/50 text-purple-300 py-1.2 px-3 rounded font-medium transition-all 
                                            duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-purple-500/10 ml-3"
                                        onClick={() => setShowBadges(!showBadges)}
                                    >
                                        {showBadges ? "Hide" : "View All"}
                                    </button>

                                    {showBadges && (
                                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                                            {googleBadges.map((badge, index) => (
                                                <li key={index}>{badge}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
