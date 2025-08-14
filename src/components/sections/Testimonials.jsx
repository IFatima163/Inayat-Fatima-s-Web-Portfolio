import RevealOnScroll from "../RevealOnScroll"

export const Testimonials = () => {
        return (
        <section id="testimonials" className="min-h-screen flex items-center justify-center py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <RevealOnScroll>
                        {/* Section Heading */}
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 
                                bg-clip-text text-transparent text-center">
                            Testimonials
                        </h2>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <RevealOnScroll>
                            {/* Emmad */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                <div className="flex items-center gap-4 mb-2">
                                <img
                                     src="https://ui-avatars.com/api/?name=Emmad&background=4B0082&color=fff&size=128" 
                                    alt="Emmad"
                                    className="w-12 h-12 rounded-full border border-purple-500/30 object-cover"
                                />
                                    <h3 className="text-xl font-bold mb-2">Emmad, Freelancing Client</h3>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Ok so working with Fatima was an absolute pleasure. She delivered outstanding 
                                    work with great attention to detail and a high level of professionalism. 
                                    From the beginning, she understood my requirements clearly and executed 
                                    everything flawlessly and on time with reasonable charges. Her communication 
                                    was prompt and clear, and she always made sure I was satisfied with every 
                                    step of the process. I truly appreciate her dedication, expertise, and the 
                                    quality of her work. I highly recommend Fatima and would definitely love to 
                                    work with her again in the future!
                                </p>

                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Sunbla */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                <div className="flex items-center gap-4 mb-2">
                                <img
                                     src="https://ui-avatars.com/api/?name=Sunbla&background=8B5CF6&color=fff&size=128" 
                                    alt="Sunbla"
                                    className="w-12 h-12 rounded-full border border-purple-500/30 object-cover"
                                />
                                    <h3 className="text-xl font-bold mb-2">Sunbla, Former Colleague</h3>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Fatima worked with our company with a great dedication. She always had a 
                                    positive attitude towards work and with her colleagues. She provided great 
                                    support wherever needed, was always eager to learn and adapt quickly. I 
                                    would definitely recommend her. She will be a great asset to any team she 
                                    will join 🙌
                                </p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Hammad */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                <div className="flex items-center gap-4 mb-2">
                                <img
                                    src="https://ui-avatars.com/api/?name=Hammad&background=9333EA&color=fff&size=128"
                                    alt="Hammad"
                                    className="w-12 h-12 rounded-full border border-purple-500/30 object-cover"
                                />
                                    <h3 className="text-xl font-bold mb-2">Hammad, Freelancing Client</h3>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Even when we were on tight deadlines, she never missed a delivery.
                                </p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            {/* Yulia */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                <div className="flex items-center gap-4 mb-2">
                                <img
                                    src="https://ui-avatars.com/api/?name=Yulia&background=3B82F6&color=fff&size=128"
                                    alt="Yulia"
                                    className="w-12 h-12 rounded-full border border-purple-500/30 object-cover"
                                />
                                    <h3 className="text-xl font-bold mb-2">Yulia, Former Employer @ Kiddyschool</h3>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Fatima is very responsible contractor, she completed the tasks thoroughly 
                                    and didn't hesitate to ask questions when it's needed, even though did her 
                                    own research to find an answer. Pretty independent and reliable contractor. 
                                    Will definitely consider Fatima for future projects.
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
        </section>
    )
}