import React, { useState, useEffect, useRef } from 'react';
import { Project, Skill, FAQ } from './types';
import { PROJECTS, SKILLS, FAQS, GITHUB_ICON, LINKEDIN_ICON, EMAIL_ICON, LIVE_DEMO_ICON, MENU_ICON, FACEBOOK_ICON, INSTAGRAM_ICON } from './constants';
import { Chatbot } from './components/Chatbot';
import { profileImage } from './profileImage';


// --- INLINED COMPONENTS FOR NEW FEATURES ---

const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            if (dotRef.current && outlineRef.current) {
                dotRef.current.style.left = `${clientX}px`;
                dotRef.current.style.top = `${clientY}px`;

                outlineRef.current.animate({
                    left: `${clientX}px`,
                    top: `${clientY}px`
                }, { duration: 500, fill: "forwards" });
            }
        };

        const handleMouseDown = () => dotRef.current?.style.setProperty('transform', 'translate(-50%, -50%) scale(2)');
        const handleMouseUp = () => dotRef.current?.style.setProperty('transform', 'translate(-50%, -50%) scale(1)');

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        
        document.querySelectorAll('a, button, .interactive').forEach(el => {
            el.addEventListener('mouseover', () => outlineRef.current?.classList.add('hovered'));
            el.addEventListener('mouseout', () => outlineRef.current?.classList.remove('hovered'));
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            <div ref={outlineRef} className="cursor-outline"></div>
            <div ref={dotRef} className="cursor-dot"></div>
        </>
    );
};

const IntroAnimation: React.FC = () => (
    <div className="w-screen h-screen bg-[#f0f4f8] flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
        <style>{`
            @keyframes rotate-cube {
                0% { transform: rotateX(-30deg) rotateY(0deg); }
                100% { transform: rotateX(-30deg) rotateY(360deg); }
            }
            .cube {
                width: 200px;
                height: 200px;
                position: relative;
                transform-style: preserve-3d;
                animation: rotate-cube 8s infinite linear;
            }
            .cube__face {
                position: absolute;
                width: 200px;
                height: 200px;
                border: 2px solid #4682B4;
                background: rgba(176, 224, 230, 0.3);
                font-size: 2rem;
                font-weight: bold;
                color: #2F4F4F;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .cube__face--front  { transform: rotateY(0deg) translateZ(100px); }
            .cube__face--right  { transform: rotateY(90deg) translateZ(100px); }
            .cube__face--back   { transform: rotateY(180deg) translateZ(100px); }
            .cube__face--left   { transform: rotateY(-90deg) translateZ(100px); }
            .cube__face--top    { transform: rotateX(90deg) translateZ(100px); }
            .cube__face--bottom { transform: rotateX(-90deg) translateZ(100px); }
        `}</style>
        <div className="cube">
            <div className="cube__face cube__face--front">Ahmad</div>
            <div className="cube__face cube__face--right">Ibrahim</div>
            <div className="cube__face cube__face--back">CS Student</div>
            <div className="cube__face cube__face--left">Developer</div>
            <div className="cube__face cube__face--top"></div>
            <div className="cube__face cube__face--bottom"></div>
        </div>
    </div>
);

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => (
     <div className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="w-72 h-full bg-white/80 backdrop-blur-md shadow-lg p-8 flex flex-col">
            <h2 className="text-2xl font-bold text-blue-600 mb-8">Menu</h2>
            <nav className="flex flex-col space-y-4 text-lg">
                <a href="#about" onClick={onClose} className="text-slate-700 hover:text-blue-600 transition-colors interactive">About</a>
                <a href="#skills" onClick={onClose} className="text-slate-700 hover:text-blue-600 transition-colors interactive">Skills</a>
                <a href="#projects" onClick={onClose} className="text-slate-700 hover:text-blue-600 transition-colors interactive">Projects</a>
                <a href="#education" onClick={onClose} className="text-slate-700 hover:text-blue-600 transition-colors interactive">Education</a>
                <a href="#faq" onClick={onClose} className="text-slate-700 hover:text-blue-600 transition-colors interactive">FAQs</a>
                <a href="#contact" onClick={onClose} className="text-slate-700 hover:text-blue-600 transition-colors interactive">Contact</a>
            </nav>
            <div className="mt-auto flex justify-center items-center gap-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors interactive">{GITHUB_ICON}</a>
                <a href="https://www.linkedin.com/in/ahmad-ibrahim-78385a326/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors interactive">{LINKEDIN_ICON}</a>
                <a href="https://www.facebook.com/ahmad.ibrahim.476265" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors interactive">{FACEBOOK_ICON}</a>
                <a href="https://www.instagram.com/ahmad_ibrahim_aheer/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors interactive">{INSTAGRAM_ICON}</a>
                <a href="mailto:ahmad.ibrahim.cs@email.com" className="text-slate-600 hover:text-blue-600 transition-colors interactive">{EMAIL_ICON}</a>
            </div>
        </div>
        {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/20 z-40"></div>}
    </div>
);

const Section: React.FC<{ children: React.ReactNode; id: string; className?: string }> = ({ children, id, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current?.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return <section ref={ref} id={id} className={`scroll-animate ${className}`}>{children}</section>;
};

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50">
    <div className="text-blue-500 mb-2">{skill.icon}</div>
    <span className="text-slate-600 font-medium text-center text-sm">{skill.name}</span>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:scale-105 flex flex-col group interactive">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <p className="text-slate-500 mb-4 text-sm flex-grow">{project.description}</p>
            <div className="flex items-center justify-start gap-4 mt-auto">
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 interactive">
                        {GITHUB_ICON} Code
                    </a>
                )}
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 interactive">
                        {LIVE_DEMO_ICON} Demo
                    </a>
                )}
                {project.linkedinUrl && (
                    <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 interactive">
                        {LINKEDIN_ICON} View Post
                    </a>
                )}
            </div>
        </div>
    </div>
);

const FaqItem: React.FC<{ faq: FAQ }> = ({ faq }) => (
    <details className="bg-white p-6 rounded-lg shadow-sm transition-shadow hover:shadow-md">
        <summary className="font-semibold text-slate-800 text-lg interactive list-none flex justify-between items-center">
            {faq.question}
            <span className="text-blue-500 transform transition-transform details-arrow rotate-0">&gt;</span>
        </summary>
        <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
    </details>
);

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <IntroAnimation />;
    }

    return (
        <div className="bg-[#f0f4f8] text-slate-800 min-h-screen">
            <style>{`
                details[open] .details-arrow { transform: rotate(90deg); }
                .animate-fade-in-up {
                    animation: fadeInUp 0.5s ease-out forwards;
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <CustomCursor />
            <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

            <button onClick={() => setMenuOpen(true)} className="fixed top-6 left-6 z-30 p-2 bg-white/50 backdrop-blur-sm rounded-full text-slate-700 hover:bg-white transition-colors shadow-md interactive">
                {MENU_ICON}
            </button>
            
            <div className="container mx-auto px-6 md:px-12 py-12">
                
                <header className="text-center py-20">
                    <div className="scroll-animate visible">
                      <img src={profileImage} alt="Ahmad Ibrahim" className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-xl object-cover"/>
                      <h1 className="text-5xl md:text-6xl font-bold text-slate-800 tracking-tight">Ahmad Ibrahim</h1>
                      <p className="mt-4 text-xl md:text-2xl text-slate-500">
                          CS Student | Web & App Developer
                      </p>
                       <p className="mt-2 text-lg text-blue-600 font-semibold">
                          UNIVERSITY OF SARGODHA
                      </p>
                    </div>
                </header>

                <main className="space-y-24 md:space-y-32">
                    <Section id="about" className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-600">About Me</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            I am a passionate and driven Computer Science student with a strong interest in full-stack web development and artificial intelligence. I thrive on solving complex problems and building elegant, user-centric applications. My goal is to leverage technology to create meaningful and innovative solutions.
                        </p>
                    </Section>

                    <Section id="skills">
                        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Technical Skills</h2>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4 max-w-5xl mx-auto">
                            {SKILLS.map(skill => <SkillBadge key={skill.name} skill={skill} />)}
                        </div>
                    </Section>

                    <Section id="projects">
                        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">My Projects</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {PROJECTS.map(project => <ProjectCard key={project.title} project={project} />)}
                        </div>
                    </Section>

                     <Section id="education" className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-600">Education</h2>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                           <h3 className="text-xl font-semibold text-slate-800">Bachelor of Science in Computer Science</h3>
                           <p className="text-blue-600 font-medium mt-1">UNIVERSITY OF SARGODHA</p>
                           <p className="text-slate-500 mt-2">Expected Graduation: 2025</p>
                        </div>
                    </Section>

                    <Section id="faq" className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {FAQS.map((faq, index) => <FaqItem key={index} faq={faq} />)}
                        </div>
                    </Section>

                    <Section id="contact" className="text-center">
                         <h2 className="text-3xl font-bold mb-6 text-blue-600">Get In Touch</h2>
                         <p className="text-slate-600 mb-8 max-w-xl mx-auto">I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to connect with me.</p>
                         <div className="flex justify-center items-center gap-6">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors p-3 bg-white rounded-full shadow-md interactive">{GITHUB_ICON}</a>
                            <a href="https://www.linkedin.com/in/ahmad-ibrahim-78385a326/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors p-3 bg-white rounded-full shadow-md interactive">{LINKEDIN_ICON}</a>
                            <a href="https://www.facebook.com/ahmad.ibrahim.476265" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors p-3 bg-white rounded-full shadow-md interactive">{FACEBOOK_ICON}</a>
                            <a href="https://www.instagram.com/ahmad_ibrahim_aheer/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors p-3 bg-white rounded-full shadow-md interactive">{INSTAGRAM_ICON}</a>
                            <a href="mailto:ahmad.ibrahim.cs@email.com" className="text-slate-600 hover:text-blue-600 transition-colors p-3 bg-white rounded-full shadow-md interactive">{EMAIL_ICON}</a>
                         </div>
                    </Section>
                </main>
            </div>
            
            <footer className="text-center py-6 border-t border-slate-200 mt-20">
                <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Ahmad Ibrahim. All rights reserved.</p>
            </footer>

            <Chatbot />
        </div>
    );
};

export default App;
