import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20"> 
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 
                            bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">AI-Powered System for Disaster & Crime Management</h3>
                            <p className="text-gray-400 mb-4">
                                A research paper going in depth about the existing disaster & crime response systems,
                                and their flaws/ missing features. It also introduces a new solution with the help of 
                                Predictive Analysis, Dynamic Resource Allocations, CNNs, GANs, and Sentiment Analysis.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                        {["AI & Machine Learning", "Research"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                transition-all">
                                            {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Add the following after research paper has been published
                            <div className="flex justify-end items-center">
                                <a href="#" target="_blank" className="text-blue-400 hover:text-blue-300 
                                transition-colors my-4">View Paper</a>
                            </div>*/}
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Web-Development Portfolio</h3>
                            <p className="text-gray-400 mb-4">
                                A very pretty and user-friendly portfolio website created to showcase my professional career 
                                over the years. Some people even claim that you're visiting that exact portfolio website 
                                right now. Me- I'm some people...
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                        {["React", "TailwindCSS", "Vite", "Vercel", "HTML", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                transition-all">
                                            {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Add GitHub link here after creating it
                            <div className="flex justify-end items-center">
                                <a href="#" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors 
                                my-4">Open in GitHub</a>
                            </div>*/}
                        </div>
                        
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">2D Top-Down Tile-Based Game (Game Dev. Portfolio | Outdated)</h3>
                            <p className="text-gray-400 mb-4">
                                Designed, developed, tested, and deployed (on itch.io) a 2D top-down tile-based game to showcase 
                                my game development skills. Inspired heavily by Stardew Valley.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C#", "SQL", "Agile & Scrum", "VSCode", "Unity", "Game Development", "Gimp & Canva"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                            {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end items-center gap-2">
                                <a href="https://github.com/IFatima163/iFatima-s_Interactive_Portfolio.git" target="_blank" 
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">Open in GitHub</a>
                                <a href="https://inayatfatima.itch.io/ifatima-portfolio" target="_blank" 
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    | Play Now
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Artificial Farokht Assistant (AFA)</h3>
                            <p className="text-gray-400 mb-4">
                                Developed and tested ERP-CRM-POS hybrid solution. Led QA efforts on backend modules, 
                                and was the team lead through the entire lifecycle of the project.
                                In charge of documentation, data handling, machine learning algorithms.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "AI & Machine Learning", "Data Analysis & Visualization", "Software Documentation", 
                                        "Agile & Scrum", "VSCode", "Leadership"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                        transition-all">
                                            {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end items-center">
                                <a href="https://github.com/alihassan0007/AFA.git" target="_blank" className="text-blue-400 
                                        hover:text-blue-300 transition-colors my-4">
                                    Open in GitHub
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Deaf & Dumb Communication App</h3>
                            <p className="text-gray-400 mb-4">
                                Full stack developed communication help to ease the communication process between those that 
                                are verbally disabled & those that are enabled. Created as an internship project as a 
                                "Unity Developer Intern" for "Softic Solutions".
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C#", "SQL", "Agile & Scrum", "VSCode", "Unity", "Game Development", "Firebase"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                        transition-all">
                                            {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end items-center">
                                <a href="https://github.com/IFatima163/Deaf-Dumb-Communication-Android-App.git" target="_blank" 
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    Open in GitHub
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Kitchen Chaos</h3>
                            <p className="text-gray-400 mb-4">
                                Practice Project single-player game used as training during my 4-month long internship. Followed a YouTube tutorial.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C#", "VSCode", "Unity", "Game Development"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                        transition-all">
                                            {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end items-center">
                                <a href="https://github.com/IFatima163/KitchenChaos-WebGame.git" target="_blank" 
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    Open in GitHub
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Mega Slasher</h3>
                            <p className="text-gray-400 mb-4">
                                A 2D mobile & web clicker game targeting best score. Created as a Course project during BSSE.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C#", "VSCode", "Unity", "Game Development"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                        transition-all">
                                            {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end items-center">
                                <a href="https://github.com/IFatima163/MegaSlasher-Mobile-Web-Game.git" target="_blank" 
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    Open in GitHub
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Monster Chase</h3>
                            <p className="text-gray-400 mb-4">
                                A 2D infinite runner game created as a practice project. Followed a YouTube tutorial.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C#", "VSCode", "Unity", "Game Development"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                        transition-all">
                                            {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end items-center">
                                <a href="https://github.com/IFatima163/MonsterChase-WebGame.git" target="_blank" 
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    Open in GitHub
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Black Jack</h3>
                            <p className="text-gray-400 mb-4">
                                A simple game of Black Jack played on the browser. Created following a YouTube tutorial.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "Javascript", "Game Development"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                        transition-all">
                                            {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end items-center">
                                <a href="https://github.com/IFatima163/Black-Jack-using-JS.git" target="_blank" 
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    Open in GitHub
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">People Counter</h3>
                            <p className="text-gray-400 mb-4">
                                A simple project to calculate an increment and visualize that change in real time.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "Javascript", "Game Development"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                        transition-all">
                                            {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end items-center">
                                <a href="https://github.com/IFatima163/PeopleCounter.git" target="_blank" 
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    Open in GitHub
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Watch Later Priority List</h3>
                            <p className="text-gray-400 mb-4">
                                Backend code to act as an extension to the YouTube watch-later list. Core-purpose was to allow videos
                                to be added with an additional "priority" rating which then allowed the user to sort their watch-later 
                                list in terms of highest or lowest priority.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "VSCode"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] 
                                                        transition-all">
                                            {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}