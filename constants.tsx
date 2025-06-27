import React from 'react';
import { Skill, Project, FAQ } from './types';

// Icons as JSX components
export const ReactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113 100.3" fill="currentColor" className="w-8 h-8"><path d="M68.2 20.2c3.9-6.8-2.3-15.4-10.4-15.4-8.2 0-14.3 8.6-10.4 15.4l29.4 50.8c3.9 6.8-2.3 15.4-10.4 15.4-8.2 0-14.3-8.6-10.4-15.4L68.2 20.2zM102.5 35.2c-6.8-3.9-15.4 2.3-15.4 10.4l-14.6 25.4c-6.8 3.9-15.4-2.3-15.4-10.4L71.7 35.2c-6.8-3.9-15.4 2.3-15.4 10.4 0 8.2 8.6 14.3 15.4 10.4l14.6-25.4c6.8-3.9 15.4 2.3 15.4 10.4 0 8.2-8.6 14.3-15.4 10.4L102.5 35.2zM10.4 65.2c6.8 3.9 15.4-2.3 15.4-10.4L40.4 29.3c6.8-3.9 15.4 2.3 15.4 10.4 0 8.2-8.6 14.3-15.4 10.4L25.8 75.6c-6.8 3.9-15.4-2.3-15.4-10.4z"/><circle cx="56.5" cy="50.2" r="11.3"/></svg>;
export const TSIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#3178c6" className="w-8 h-8"><path fill="#fff" d="M0 0h48v48H0z"/><path d="M22.5 22.3h-4.3v13.4h4.3v-13.4zm10.6-2c-1.8 0-3.2.6-4.4 1.5l1.7 2.4c.7-.6 1.5-1 2.6-1 1.4 0 2.2.7 2.2 2v.4h-.2c-.7-.5-1.7-.8-2.7-.8-2.5 0-4.3 1.8-4.3 4.4s1.8 4.4 4.3 4.4c1 0 1.9-.3 2.7-.8h.2v.4c0 1.2-.8 1.9-2.2 1.9-1 0-1.8-.4-2.6-1l-1.7 2.4c1.1 1 2.6 1.6 4.4 1.6 3 0 5.4-1.9 5.4-5.6v-4.9c0-2.8-1.9-4.8-5.1-4.8zM31 35.3c0-1.2.8-2.1 2.3-2.1s2.3.9 2.3 2.1-.8 2.1-2.3 2.1-2.3-.9-2.3-2.1zM48 0v48H0V0h48z"/></svg>;
export const NodeJSIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12.33.24a.8.8 0 00-.66 0L2.25 5.8a.8.8 0 00-.42.7V17.5a.8.8 0 00.42.7l9.42 5.56a.8.8 0 00.66 0l9.42-5.56a.8.8 0 00.42-.7V6.5a.8.8 0 00-.42-.7L12.33.24zM11.6 21.3V12l-8.43-4.96 5.88 10.18L11.6 21.3zm6.6-4.82l-5.87-3.41v-7.1l8.44 4.96-2.57 5.55z"/></svg>;
export const PythonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path fill="#3776ab" d="M11.25 20.37V15H7.5s-4.5 0-4.5-4.5V2.62h9v4.5H7.5c0 1.12.87 3.38 3.75 3.38h3.38V2.62h9v8.25c0 4.5-4.5 4.5-4.5 4.5h-3.38z"/><path fill="#ffd43b" d="M12.75 3.63v4.5h3.75s4.5 0 4.5-4.5V0h-9v3.63h.75zM11.25 20.37v-4.5H7.5s-4.5 0-4.5 4.5v3.38h9v-3.38h-.75z"/></svg>;
export const SQLIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM11 18H8v-2h3v2zm0-4H8v-2h3v2zm0-4H8V8h3v2zm5 6h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3V8h3v2z"/></svg>;
export const TailwindIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12.001,4.5C7.297,4.5,4.002,7.203,4.002,10.5c0,2.12,1.15,3.96,2.887,5.054C5.83,16.518,5.002,17.4,5.002,18c0,0.414,0.336,0.75,0.75,0.75c0.413,0,0.75-0.336,0.75-0.75c0-0.24-0.093-0.468-0.248-0.648c0.975-0.546,1.752-1.545,1.752-2.731c0-1.428-1.042-2.65-2.426-3.115c0.457-1.78,1.96-3.135,3.871-3.135c1.469,0,2.737,0.71,3.585,1.795c0.982-1.246,2.449-2.045,4.163-2.045c2.761,0,5,2.239,5,5s-2.239,5-5,5c-1.714,0-3.181-0.8-4.163-2.045C14.738,15.79,13.469,16.5,12.001,16.5c-1.911,0-3.414-1.355-3.871-3.135c1.383,0.465,2.426,1.687,2.426,3.115c0,1.187-0.777,2.185-1.752,2.731c-0.155,0.18-0.248,0.408-0.248,0.648c0,0.414,0.336,0.75,0.75,0.75c0.413,0,0.75-0.336,0.75-0.75c0-0.6-0.828-1.482-1.884-2.446C8.852,14.46,8.002,12.62,8.002,10.5c0-2.481,2.39-4.5,5.332-4.5c1.87,0,3.46,1.013,4.33,2.529C17.755,8.39,18.806,8,20,8c1.657,0,3,1.343,3,3s-1.343,3-3,3c-1.194,0-2.245-0.61-2.668-1.529C16.54,12.987,14.94,12,13.068,12c-2.94,0-5.332-2.019-5.332-4.5z"/></svg>;
export const CppIcon = () => <svg fill="#00599c" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 210" xmlSpace="preserve" className="w-8 h-8"><path d="M105,0C47.103,0,0,47.103,0,105s47.103,105,105,105s105-47.103,105-105S162.897,0,105,0z M117.844,118.844h-31.812v-2.812h31.812V118.844z M117.844,103.844h-31.812v-2.812h31.812V103.844z M141.281,88.844h-2.812v-2.812h-2.812v-2.812h2.812v-2.812h2.812v2.812h2.812v2.812h-2.812V88.844z M155.656,88.844h-2.812v-2.812h-2.812V82.22h2.812v-2.812h2.812v2.812h2.812v2.812h-2.812V88.844z M93.407,159.215c-29.25,0-53-23.75-53-53s23.75-53,53-53c8.938,0,17.313,2.25,24.813,6.25l-5.625,10.125c-5.813-2.688-12.375-4.313-19.188-4.313c-21.688,0-39.25,17.563-39.25,39.25s17.563,39.25,39.25,39.25c6.813,0,13.375-1.625,19.188-4.313l5.625,10.125C110.719,156.965,102.344,159.215,93.407,159.215z"/></svg>;
export const WebDevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>;
export const AppDevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>;


export const SKILLS: Skill[] = [
  { name: 'Web Dev', icon: <WebDevIcon /> },
  { name: 'App Dev', icon: <AppDevIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'TypeScript', icon: <TSIcon /> },
  { name: 'Node.js', icon: <NodeJSIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'C++', icon: <CppIcon /> },
  { name: 'SQL', icon: <SQLIcon /> },
  { name: 'TailwindCSS', icon: <TailwindIcon /> },
];

export const PROJECTS: Project[] = [
    {
    title: 'AI Video Generator',
    description: 'A cutting-edge tool that leverages AI to generate video content from text prompts. A demonstration is available on LinkedIn.',
    tags: ['Python', 'Generative AI', 'Machine Learning', 'API'],
    imageUrl: 'https://picsum.photos/seed/aivideo/400/300',
    linkedinUrl: 'https://www.linkedin.com/in/ahmad-ibrahim-78385a326/',
  },
  {
    title: 'PortfolioAI',
    description: 'My personal portfolio website built with React, TypeScript, and Tailwind CSS, featuring a Gemini-powered AI assistant to answer questions about me.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    imageUrl: 'https://picsum.photos/seed/portfolio/400/300',
    githubUrl: 'https://github.com',
  },
  {
    title: 'UOS Course Planner',
    description: 'A web application to help University of Sargodha students plan their academic semesters, visualize prerequisites, and track degree progress.',
    tags: ['React', 'Firebase', 'Data Structures'],
    imageUrl: 'https://picsum.photos/seed/courseplanner/400/300',
    liveUrl: '#',
    githubUrl: 'https://github.com',
  },
  {
    title: 'MarketView',
    description: 'A data analysis tool for visualizing stock market trends. Implemented with Python for data fetching and processing, and D3.js for charting.',
    tags: ['Python', 'Flask', 'D3.js', 'API'],
    imageUrl: 'https://picsum.photos/seed/marketview/400/300',
    githubUrl: 'https://github.com',
  },
];

export const FAQS: FAQ[] = [
    {
        question: "What technologies is Ahmad most passionate about?",
        answer: "Ahmad is deeply passionate about full-stack development, especially using the React ecosystem for the frontend and Node.js for the backend. He is also keenly interested in the practical applications of Generative AI."
    },
    {
        question: "What is his career goal?",
        answer: "Ahmad aims to become a versatile full-stack developer, contributing to innovative teams and building impactful technology solutions that are both functional and user-friendly."
    },
    {
        question: "How can I contact Ahmad for opportunities?",
        answer: "You can reach out via the contact links in the menu or at the bottom of the page. For direct inquiries, you can ask the AI assistant for his WhatsApp number."
    },
    {
        question: "Is the AI assistant on this site custom-built?",
        answer: "Yes! The AI assistant is powered by Google's Gemini API. It's integrated into the React application to provide information based on Ahmad's profile."
    }
];

export const MENU_ICON = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>;
export const GITHUB_ICON = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.58 9.58 0 0 1 5 0c1.912-1.3 2.75-1.026 2.75-1.026.55 1.375.2 2.4.1 2.65.637.7 1.025 1.6 1.025 2.688 0 3.837-2.337 4.687-4.562 4.937.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"/></svg>;
export const LINKEDIN_ICON = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 5H5v10h3V8zm-1.5-2.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm12.5 5.5v5H16v-4.5c0-1.1-.4-1.9-1.4-1.9-1.1 0-1.6.7-1.6 1.9V18h-3V8h3v1.3c.4-.7 1.2-1.3 2.7-1.3 2 0 3.3 1.3 3.3 4z"/></svg>;
export const EMAIL_ICON = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm17 2-8.018 6.414a1 1 0 0 1-1.206-.011L4 6h16z"/></svg>;
export const LIVE_DEMO_ICON = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1"><path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V14h-2v6H4V6h6V4zm10-2h-4v2h2.59L12 10.59 13.41 12 20 5.41V8h2V2z"/></svg>;
export const FACEBOOK_ICON = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33V21.878A10.003 10.003 0 0022 12z"/></svg>;
export const INSTAGRAM_ICON = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.149 0-3.505.012-4.726.069-2.733.123-3.951 1.344-4.072 4.072-.057 1.22-.069 1.575-.069 4.726s.012 3.506.069 4.726c.121 2.729 1.339 3.949 4.072 4.072 1.221.057 1.577.069 4.726.069s3.505-.012 4.726-.069c2.733-.123 3.951-1.344 4.072-4.072.057-1.22.069-1.575.069-4.726s-.012-3.506-.069-4.726c-.121-2.729-1.339-3.949-4.072-4.072-1.221-.057-1.577-.069-4.726-.069zm0 2.882c-1.955 0-3.528 1.573-3.528 3.528s1.573 3.528 3.528 3.528 3.528-1.573 3.528-3.528-1.573-3.528-3.528-3.528zm0 5.616c-1.151 0-2.088-.937-2.088-2.088s.937-2.088 2.088-2.088 2.088.937 2.088 2.088-.937 2.088-2.088 2.088zm5.082-6.273c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/></svg>;
