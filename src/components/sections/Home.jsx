import headshot from "/headshot.png";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between w-full max-w-5xl px-4 pt-20">
                
                {/* LEFT COLUMN */}
                <div className="text-center md:text-left z-10 md:w-1/2">
                    <h1 
                        className="relative inline-block text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r 
                        from-purple-600 to-blue-500 bg-clip-text text-transparent leading-right opacity-0 fade-in-up"
                        style={{ animationDelay: "0.4s" }}
                    >
                        Hi there! I'm Fatima
                        <span className="shimmer">Hi there! I'm Fatima</span>
                    </h1>

                    <p 
                        className="text-gray-300 text-lg mb-8 max-w-lg opacity-0 fade-in-up"
                        style={{ animationDelay: "0.8s" }}
                    >
                        Detail-oriented Frontend Developer with a background in data analysis, Fullstack Unity Development, and Content Writing. 
                    </p>

                    <div 
                        className="flex justify-center md:justify-start space-x-4 opacity-0 fade-in-up"
                        style={{ animationDelay: "1.2s" }}
                    >
                        <a href="#projects" 
                            className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-3 px-6 rounded font-medium 
                            transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View Project
                        </a>
                        <a href="#contact" 
                            className="border border-purple-300/50 text-purple-300 py-3 px-6 rounded font-medium transition-all 
                            duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-purple-500/10">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN (HEADSHOT) */}
                <div 
                    className="mt-10 md:mt-0 md:w-1/2 flex justify-center opacity-0 fade-in-up"
                    style={{ animationDelay: "0s" }}
                >
                    <div className="relative group">
                        <div className="rounded-full p-[4px] bg-gradient-to-r from-purple-500 to-blue-500">
                            <img 
                                src={headshot} 
                                alt="Fatima Headshot" 
                                className="rounded-full w-64 h-64 object-cover"
                            />
                        </div>
                        {/* Glow on hover */}
                        <div >
                            <a 
                                href="#about" 
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 
                                to-blue-500 opacity-0 group-hover:opacity-15 blur-2xl transition duration-500 cursor-pointer"
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
