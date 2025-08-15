import RevealOnScroll from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20"> 
            {/*<RevealOnScroll>*/}
                <div className="max-w-5xl mx-auto px-4">
                    <RevealOnScroll>
                        {/* Section Heading */}
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 
                                bg-clip-text text-transparent text-center">
                            Featured Projects
                        </h2>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* <RevealOnScroll>
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">AI-Powered System for Disaster & Crime Management</h3>
                                <p className="text-gray-400 mb-4">
                                    A research paper going in depth about the existing disaster & crime response systems,
                                    and their flaws/ missing features. It also introduces a new solution with the help of 
                                    Predictive Analysis, Dynamic Resource Allocations, CNNs, GANs, and Sentiment Analysis.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                            {["AI & Machine Learning", "Research"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                    transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                Add the following after research paper has been published
                                <div className="flex justify-end items-center">
                                    <a href="#" target="_blank" className="text-purple-400 hover:text-purple-300 
                                    transition-colors my-4">View Paper</a>
                                </div>
                            </div>
                        </RevealOnScroll> */}
                        <RevealOnScroll>
                            {/* Crypto Tracker */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition flex flex-col h-full"
                            >
                                <img 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/CryptoTracker.png`} 
                                    alt="Cryptocurrency Tracker Preview" 
                                    className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg mb-4 border border-purple-500/20"
                                />
                                <h3 className="text-xl font-bold mb-2">Cryptocurrency Tracker with CoinGecko API</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    A single page tabular showcase of current pricing & 24 hr state of the top 100 cyrptocurrencies with a pop-up 
                                    window to view the chart of each coin. It also consists of an option to sort the coins with regards to their price and
                                    the option to favorite none to multiple coins for future reference.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "TailwindCSS", "Vite", "API Integration", "Prettier", "ApexCharts.js"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/IFatima163/Cryptocurrency-Tracker" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                    <a href="https://ifatima163.github.io/Cryptocurrency-Tracker/" target="_blank" 
                                            className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >View Website</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Weather App */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition flex flex-col h-full">
                                <img 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/WeatherApp.png`} 
                                    alt="Weather App Preview" 
                                    className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg mb-4 border border-purple-500/20"
                                />
                                <h3 className="text-xl font-bold mb-2">Weather App with OpenWeatherMap API</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    Webpage where you can search any city name to view the current weather of that place.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "TailwindCSS", "Vite", "HTML", "CSS"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/IFatima163/Weather-App-with-OpenWeatherMap-API" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                    <a href="https://ifatima163.github.io/Weather-App-with-OpenWeatherMap-API/" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >View Website</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Task Manager */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition flex flex-col h-full">
                                <img 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/TaskManager.png`}  
                                    alt="Task Manager Preview" 
                                    className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg mb-4 border border-purple-500/20"
                                />
                                <h3 className="text-xl font-bold mb-2">Efficio: Task Manager</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    A simple task manager web-app created as a practice project to understand useState, useEffect, events, and .map().
                                    It consists of simple add, update, delete options with a "Delete All Tasks" option as well, a category to specify 
                                    whether your task is general, personal, or other, and a category to set the priority of you task. It also shows a 
                                    visual bar at the bottom to track progress, as well as countdown for total tasks completed.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                            {["React", "TailwindCSS", "Vite", "HTML", "CSS"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                    transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/IFatima163/Efficio-TaskManager.git" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Web Dev Portfolio */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition flex flex-col h-full">
                                <img 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/WebPortfolio.png`}  
                                    alt="Web Dev Portfolio Preview" 
                                    className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg mb-4 border border-purple-500/20"
                                />
                                <h3 className="text-xl font-bold mb-2">Web-Development Portfolio</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    A very pretty and user-friendly portfolio website created to showcase my professional career 
                                    over the years. Some people even claim that you're visiting that exact portfolio website 
                                    right now. Me- I'm some people...
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                            {["React", "TailwindCSS", "Vite", "HTML", "CSS"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                    transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/IFatima163/Inayat-Fatima-s-Web-Portfolio" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Game Dev Portfolio */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition flex flex-col h-full">
                                <video 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                    preload="auto"
                                    alt="Game Dev Portfolio Playthrough"
                                    className="rounded-lg mb-4 border border-purple-500/20 w-full h-48 md:h-64 lg:h-72 object-cover"
                                >
                                <source 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/GamePortfolio.mp4`} 
                                    type="video/mp4" 
                                />
                                </video>
                                <h3 className="text-xl font-bold mb-2">2D Top-Down Tile-Based Game (Game Dev. Portfolio | Outdated)</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    Designed, developed, tested, and deployed (on itch.io) a 2D top-down tile-based game to showcase 
                                    my game development skills. Inspired heavily by Stardew Valley.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["C#", "SQL", "Agile & Scrum", "VSCode", "Unity", "Game Development", "Gimp & Canva"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/IFatima163/iFatima-s_Interactive_Portfolio.git" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                    <a href="https://inayatfatima.itch.io/ifatima-portfolio" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Play Now</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* AFA */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition flex flex-col h-full">
                                <img 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/AFA.png`}  
                                    alt="AFA Preview" 
                                    className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg mb-4 border border-purple-500/20"
                                />
                                <h3 className="text-xl font-bold mb-2">Artificial Farokht Assistant (AFA)</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    Developed and tested ERP-CRM-POS hybrid solution. Led QA efforts on backend modules, 
                                    and was the team lead through the entire lifecycle of the project.
                                    In charge of documentation, data handling, machine learning algorithms.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["Python", "AI & Machine Learning", "Data Analysis & Visualization", "Software Documentation", 
                                            "Agile & Scrum", "VSCode", "Leadership"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                            transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/alihassan0007/AFA.git" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Deaf & Dumb Comm. App */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition flex flex-col h-full">
                                <img 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/Deaf&Dumb.png`}  
                                    alt="Deaf & Dumb Preview" 
                                    className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg mb-4 border border-purple-500/20"
                                />
                                <h3 className="text-xl font-bold mb-2">Deaf & Dumb Communication App</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    Full stack developed communication help to ease the communication process between those that 
                                    are verbally disabled & those that are enabled. Created as an internship project as a 
                                    "Unity Developer Intern" for "Softic Solutions".
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["C#", "SQL", "Agile & Scrum", "VSCode", "Unity", "Game Development", "Firebase"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                            transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/IFatima163/Deaf-Dumb-Communication-Android-App.git" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Kitchen Chaos */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                            >
                                <video 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                    preload="auto"
                                    alt="Kitchen Chaos Playthrough"
                                    className="rounded-lg mb-4 border border-purple-500/20 w-full h-48 md:h-64 lg:h-72 object-cover"
                                >
                                <source 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/KitchenChaos.mp4`} 
                                    type="video/mp4" 
                                />
                                </video>
                                <h3 className="text-xl font-bold mb-2">Kitchen Chaos</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    Practice Project single-player game used as training during my 4-month long internship. Followed a YouTube tutorial.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["C#", "VSCode", "Unity", "Game Development"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                            transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/IFatima163/KitchenChaos-WebGame.git" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Mega Slasher */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                            >
                                <video 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                    preload="auto"
                                    alt="Mega Slasher Playthrough"
                                    className="rounded-lg mb-4 border border-purple-500/20 w-full h-48 md:h-64 lg:h-72 object-cover"
                                >
                                <source 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/MegaSlasher.mp4`} 
                                    type="video/mp4" 
                                />
                                </video>
                                <h3 className="text-xl font-bold mb-2">Mega Slasher</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    A 2D mobile & web clicker game targeting best score. Created as a Course project during BSSE.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["C#", "VSCode", "Unity", "Game Development"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                            transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/IFatima163/MegaSlasher-Mobile-Web-Game.git" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Monster Chase */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition flex flex-col h-full"
                            >
                                <video 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                    preload="auto"
                                    alt="Monster Chase Playthrough"
                                    className="rounded-lg mb-4 border border-purple-500/20 w-full h-48 md:h-64 lg:h-72 object-cover"
                                >
                                <source 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/MonsterChase.mp4`} 
                                    type="video/mp4" 
                                />
                                </video>
                                <h3 className="text-xl font-bold mb-2">Monster Chase</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    A 2D infinite runner game created as a practice project. Followed a YouTube tutorial.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["C#", "VSCode", "Unity", "Game Development"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                            transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/IFatima163/MonsterChase-WebGame.git" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Black Jack */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition flex flex-col h-full">
                                <img 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/BlackJack.jpeg`} 
                                    alt="Black Jack Preview" 
                                    className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg mb-4 border border-purple-500/20"
                                />
                                <h3 className="text-xl font-bold mb-2">Black Jack</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    A simple game of Black Jack played on the browser. Created following a YouTube tutorial.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["HTML", "CSS", "Javascript", "Game Development"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                            transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/IFatima163/Black-Jack-using-JS.git" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* People Counter */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition flex flex-col h-full">
                                <img 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/PeopleCounter.jpeg`}
                                    alt="People Counter Preview" 
                                    className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg mb-4 border border-purple-500/20"
                                />
                                <h3 className="text-xl font-bold mb-2">People Counter</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    A simple project to calculate an increment and visualize that change in real time.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["HTML", "CSS", "Javascript", "Game Development"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                            transition-all">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/IFatima163/PeopleCounter.git" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Watch-Later Priority */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition flex flex-col h-full">
                                <img 
                                    src={`${import.meta.env.BASE_URL}ProjectMedia/WatchLaterList.jpeg`} 
                                    alt="Wath Later List Preview" 
                                    className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg mb-4 border border-purple-500/20"
                                />
                                <h3 className="text-xl font-bold mb-2">Watch Later Priority List</h3>
                                <p className="text-gray-400 mb-4 flex-grow">
                                    Backend code to act as an extension to the YouTube watch-later list. Core-purpose was to allow videos
                                    to be added with an additional "priority" rating which then allowed the user to sort their watch-later 
                                    list in terms of highest or lowest priority.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["Java", "VSCode"].map((tech, key) => (
                                        <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                            transition-all">
                                                {tech}
                                        </span>
                                    ))}                                
                                </div>
                                
                                <div className="mt-auto flex justify-end gap-3">
                                    <a href="https://github.com/IFatima163/Watch-Later-List-using-Java" target="_blank" 
                                        className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                                        font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                                    >Open in GitHub</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div> 
                </div>
            {/*</RevealOnScroll>*/}
        </section>
    )
}