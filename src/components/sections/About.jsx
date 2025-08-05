import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const frontendSkills = [
        "React",
        "Typescript",
        "TailwindCSS",
        "Vite",
        "Vercel",
        "HTML",
        "CSS",
        "Bootstrap"
    ]

    const backendSkills = [
        "Python",
        "Java",
        "Javascript",
        "C",
        "C#",
        "Node.JS",
        "OOP",
        "SQL"
    ]

    const technicalSkills = [
        "Full Stack Web Development",
        "AI & Machine Learning",
        "Data Analysis & Visualization",
        "Game Development",
        "Software Documentation",
        "Microsoft Excel",
        "Agile & Scrum"
    ]  

    const toolsUsed = [
        "Firebase", 
        "Unity", 
        "Notion", 
        "Pipedrive CRM", 
        "GitHub", 
        "VSCode", 
        "Jupyter Notebook", 
        "Gimp & Canva"   
    ]

    const softSkills = [
        "Teamwork", 
        "Problem-solving", 
        "Research", 
        "Leadership", 
        "Communication", 
        "Adaptive"
    ]
    const hobbies = [
        "Chess & Sudoku",
        "Video Games",
        "Art/ Painting",
        "Anime, Manga, Books"
    ]
    
    const languages = [
        "English (5/5)", 
        "Urdu (5/5)",
        "Sindhi (4/5)",
        "Hindi (3/5)",
        "German (1/5)"
    ]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            {/*<RevealOnScroll>*/}
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 
                            bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:border-purple-500/30 
                                 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] hover:-translate-y-1 transition-all">
                        <div>
                            <p className="text-gray-300 mb-6">
                                Focused on building responsive web applications using React and Tailwind CSS. 
                                Experienced in developing, deploying, and maintaining React-based web projects with 
                                API integrations. Looking for a remote junior frontend developer role.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-0.5">
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Hobbies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {hobbies.map((tech, key) => (
                                            <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Languages</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {languages.map((tech, key) => (
                                            <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="skills" className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-purple-500/30 
                                 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-4">Skills</h3>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-0.5">
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {frontendSkills.map((tech, key) => (
                                            <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {backendSkills.map((tech, key) => (
                                            <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {technicalSkills.map((tech, key) => (
                                            <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Familiar Tools</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {toolsUsed.map((tech, key) => (
                                            <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {softSkills.map((tech, key) => (
                                            <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                    text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-purple-500/30 
                                 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>
                                    <strong className="text-white">
                                        Masters of Science in Computing | Research-based</strong><br/>
                                    @ Multimedia University, Cyberjaya, Malaysia (2025 - 2026)<br/>
                                    <b>Research Keywords:</b> AI, Predictive Analysis, Dynamic Resource Allocation, CNNs, GAN
                                </li>
                            </ul>
                            <br/>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>
                                    <strong className="text-white">
                                        Bachelor of Science in Software Engineering</strong><br/>
                                    @ Mohammad Ali Jinnah University, Karachi, Pakistan (2020 - 2024)<br/>
                                    <b>CGPA: 3.88 | Silver Medalist | Double Honor-Roll</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div id="experience" className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-purple-500/30 
                                 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                            <div className="space-y-4 text-gray-400">
                                <div>
                                    <h4 className="font-semibold text-white">Web Developer | Freelance (Mar 2025 - Ongoing)</h4>
                                    <ul className="list-disc ml-4">
                                        <li>Developed, deployed, and maintain customer websites, and domains.</li>
                                        <li>Applied SEO optimization, and monthly maintenance checks.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Junior Data Analyst | QueTee Ent., Remote (July 2024 - Mar 2025)</h4>
                                    <ul className="list-disc ml-4">
                                        <li>Validated and processed large volumes of structured data for reporting accuracy.</li>
                                        <li>Performed risk assessments and quality checks across datasets.</li>
                                        <li>Designed and executed statistical analysis and scenario creation for business decisions.</li>
                                        <li>Authored detailed reports and dashboards using Power BI and Excel.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Data Analyst | MAQ B2B Solutions, Remote (Jan 2024 - June 2024)</h4>
                                    <ul className="list-disc ml-4">
                                        <li>Executed data cleansing and transformation procedures to enhance data integrity.</li>
                                        <li>Conducted root cause analysis and quality audits for internal processes.</li>
                                        <li>Prepared QA-driven visual reports and documentation.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Unity Developer Intern | Softic Solutions, Remote (Sep 2023 - Dec 2023)</h4>
                                    <ul className="list-disc ml-4">
                                        <li>Designed, and developed a full-stack mobile application using Unity.</li>
                                        <li>Integrated Firebase Realtime Database.</li>
                                        <li>Maintained software documentation.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Shopify Product Listing | Freelance (Aug 2023)</h4>
                                    <ul className="list-disc ml-4">
                                        <li>Reviewed product descriptions and media assets for quality assurance.</li>
                                        <li>Applied SEO and content validation strategies to optimize listings.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Product & Socials Manager | Cheelings, Remote (Mar 2023 - July 2023)</h4>
                                    <ul className="list-disc ml-4">
                                        <li>Monitored digital content quality and engagement metrics.</li>
                                        <li>Ensured brand consistency across communication channels.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Sales Administrator | Kiddy School, Remote (Feb 2023)</h4>
                                    <ul className="list-disc ml-4">
                                        <li>Maintained lead data integrity using Pipedrive CRM.</li>
                                        <li>Ensured accuracy in scheduling and client documentation.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Content Writer | Freelance (Jan 2022 - Dec 2023)</h4>
                                    <ul className="list-disc ml-4">
                                        <li>Proofread and edited technical documents for factual accuracy and quality.</li>
                                        <li>Developed content aligned with industry standards and QA guidelines.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*</RevealOnScroll>*/}
        </section>
    )
}