import RevealOnScroll from "../RevealOnScroll"

export const About = () => {
    const coreFrontendSkills = ["React","Typescript","Tailwind CSS","Vite","ShadCN"]
    const additionalFrontendSkills = ["HTML","CSS","Bootstrap","Framer Motion","Prettier", "Lucide"]
    const coreBackendSkills = ["Python","Java","Javascript","SQL","OOP"]
    const additionalBackendExposure = ["C","C#"]
    const technicalExpertise = ["Full Stack Web Development","API Integration","AI & Machine Learning","Data Analysis & Visualization",
        "Game Development","Software Documentation","Agile & Scrum"]
    const toolsUsed = ["WordPress","Hostinger","GoDaddy","Shopify","Squarespace","Wix","Firebase","Supabase","GitHub","VS Code","Notion","Jupyter Notebook","Unity", "ApexCharts.js","Clerk"]
    const designTools = ["Gimp","Canva"]
    const softSkills = ["Teamwork","Problem-solving","Research","Leadership","Communication","Adaptive"]
    const hobbies = ["Chess & Sudoku","Video Games","Art/ Painting","Anime, Manga, Books"]
    const languages = ["English (5/5)","Urdu (5/5)","Sindhi (4/5)","Hindi (3/5)","German (1/5)"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
                <div className="max-w-3xl mx-auto px-4">
                    <RevealOnScroll>
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 
                                bg-clip-text text-transparent text-center">
                            About Me
                        </h2>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        {/* Hobbies, Languages, Awards */}
                        <div className="rounded-xl p-8 border-white/10 border hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] hover:-translate-y-1 transition-all">
                            <div>
                                <p className="text-gray-300 mb-6">
                                    Focused on building responsive web applications using React and Tailwind CSS. 
                                    Experienced in developing, deploying, and maintaining web-apps with 
                                    API integrations. <br/><br/>
                                    Open towards full-stack web development roles and collaboration opportunities.
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

                                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                        <h3 className="text-xl font-bold mb-4">Honors & Awards</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                                <li>
                                                    <strong className="text-white">
                                                        Silver Medal Achiever Certificate</strong><br/>
                                                    Issued by Mohammad Ali Jinnah University (Jul 2024)<br/>
                                                    For having the second highest CGPA in the batch (CGPA: 3.88)<br/>
                                                </li>
                                            </ul>
                                            <br/>
                                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                                <li>
                                                    <strong className="text-white">
                                                        Chancellor Honour Roll for Spring 2023</strong><br/>
                                                    Issued by Mohammad Ali Jinnah University (Nov 2023)<br/>
                                                    Issued for scoring 3.9+ GPA in Spring 2023<br/>
                                                </li>
                                            </ul>
                                            <br/>
                                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                                <li>
                                                    <strong className="text-white">
                                                        President Honour Roll for Fall 2022</strong><br/>
                                                    Issued by Mohammad Ali Jinnah University (May 2023)<br/>
                                                    Issued for scoring a perfect 4 GPA in Fall 2022<br/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        {/* Skills */}
                        <div id="skills" className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition-all">
                                <h3 className="text-xl font-bold mb-4">Skills</h3>
                                <div>
                                    <h4 className="font-semibold text-white">Specialization</h4>
                                    <p className="text-gray-300 mb-6 pt-2">I build interactive, data-driven applications 
                                        with a focus on clean UI, seamless backend integration, and scalable architecture.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-0.5">
                                    {/* Frontend */}
                                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                        <h3 className="text-xl font-bold mb-4">Core Frontend Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {coreFrontendSkills.map((tech, key) => (
                                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                        text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all"></div>
                                        <h3 className="text-xl font-bold mb-4">Additional Frontend Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {additionalFrontendSkills.map((tech, key) => (
                                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                        text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Backend */}
                                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                        <h3 className="text-xl font-bold mb-4">Core Backend Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {coreBackendSkills.map((tech, key) => (
                                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                        text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all"></div>
                                            <h3 className="text-xl font-bold mb-4">Additional Backend Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {additionalBackendExposure.map((tech, key) => (
                                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                        text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Technical Skills */}
                                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                        <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {technicalExpertise.map((tech, key) => (
                                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                        text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Tools & Platforms */}
                                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                        <h3 className="text-xl font-bold mb-4">Tools & Platforms (Actively Used)</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {toolsUsed.map((tech, key) => (
                                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                        text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all"></div>
                                        <h3 className="text-xl font-bold mb-4">Design Tools</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {designTools.map((tech, key) => (
                                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                                        text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Soft Skills */}
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
                    </RevealOnScroll>
                    <RevealOnScroll>
                        {/* Education */}
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
                    </RevealOnScroll>
                    <RevealOnScroll>
                        {/* Work Experience */}
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
                    </RevealOnScroll>    
                </div>
        </section>
    )
}