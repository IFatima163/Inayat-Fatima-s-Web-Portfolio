import { RevealOnScroll } from "../RevealOnScroll"

export const Certificates = () => {
        return (
        <section id="certificates" className="min-h-screen flex items-center justify-center py-20">
            {/*<RevealOnScroll>*/} 
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 
                            bg-clip-text text-transparent text-center">
                        Certificates
                    </h2>
                    
                    <div id="skills" className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-purple-500/30 
                                 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition-all">
                            <ol className="list-decimal list-inside text-gray-400 space-y-2">
                                <li>Introduction to Generative AI – Google Cloud Skills Boost</li>
                                <li>Introduction to Image Generation – Google Cloud Skills Boost</li>
                                <li>Machine Learning Operations (MLOps) for Generative AI – Google Cloud Skills Boost</li>
                                <li>Machine Learning Operations (MLOps) with Vertex AI: Model Evaluation – Google Cloud Skills Boost</li>
                                <li>Responsible AI for Developers: Fairness & Bias – Google Cloud Skills Boost</li>
                                <li>Responsible AI for Developers: Interpretability & Transparency – Google Cloud Skills Boost</li>
                                <li>Responsible AI for Developers: Privacy & Safety – Google Cloud Skills Boost</li>
                                <li>Introduction to Security in the World of AI – Google Cloud Skills Boost</li>
                                <li>Unity Development Internship – Softic Solutions</li>
                                <li>Introduction to Data Analytics – IBM</li>
                                <li>Google My Business – Google</li>
                            </ol>
                        </div>
                    </div>
                </div>
            {/*</RevealOnScroll>*/}
        </section>
    )
}