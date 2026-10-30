
import React from 'react';

const projects = [
    {
        title: 'RepoLens AI',
        category: 'AGENTIC AI · DEVELOPER TOOLS',
        description:
            'A GitHub Intelligence Agent that answers repository questions using Haystack, Gemini, and MCP. Includes repository-aware RAG with ChromaDB and retrieval evaluation.',
        technologies: ['Python', 'Haystack', 'Gemini', 'MCP', 'ChromaDB'],
        github: 'https://github.com/shravani22patil/repolens-ai',
        demo: 'https://repolens-ai-64raukl3ttf4t6ee2agbdv.streamlit.app/',
        status: 'AI AGENT',
    },
    {
        title: 'SecAgent',
        category: 'AI ENGINEERING · SECURITY AUTOMATION',
        description:
            'A multi-stage security assessment pipeline that parses Nmap results, matches potential CVEs, applies input restrictions, and generates structured reports.',
        technologies: ['Python', 'FastAPI', 'Nmap', 'REST APIs'],
        github: 'https://github.com/shravani22patil/secagent',
        demo: 'https://secagent-kc32.onrender.com/',
        status: 'AUTOMATION',
    },
    {
        title: 'VisionVoice AI',
        category: 'MULTIMODAL AI · ACCESSIBILITY',
        description:
            'A visual-to-audio assistant that extracts structured information from images and PDFs using Gemini and converts content into spoken narration.',
        technologies: ['Python', 'Gemini', 'Streamlit', 'gTTS'],
        github: 'https://github.com/shravani22patil/VisionVoice-AI',
        demo: 'https://visionvoice-ai-khcy4dq9v34nhsyhdxfyt2.streamlit.app/',
        status: 'MULTIMODAL AI',
    },
    {
        title: 'RaceVector',
        category: 'AGENTIC AI · F1 RACE ANALYSIS',
        description:
            'Extended an open-source F1 race-analysis platform with an AI Race Engineer endpoint using structured race facts and Groq tool calling. Implemented streaming race analysis, server-side API credential handling, and Cloudflare Workers deployment with R2 caching and Analytics Engine. Achieved 8/8 passing agent evaluation cases and 234/234 passing tests across 14 files.',
        technologies: [
            'TypeScript',
            'React 18',
            'Cloudflare Workers',
            'Groq API',
            'Vitest',
        ],
        github: 'https://github.com/shravani22patil/RaceVector',
        demo: 'https://racevector.racevector.workers.dev/',
                status: 'AI AGENT',
    },
    {
        title: 'LinkedIn Job Decay Tracker',
        category: 'DATA ANALYTICS · JOB MARKET INTELLIGENCE',
        description:
            'Analyzed 62,000+ job postings using survival analysis to investigate posting lifetimes, hiring trends, and job-market patterns across categories and geographies. Built an interactive FastAPI and Streamlit analytics application with data processing, filtering, and visualizations.',
        technologies: [
            'Python',
            'FastAPI',
            'Streamlit',
            'Pandas',
            'Survival Analysis',
            'Railway',
        ],
        github: 'https://github.com/shravani22patil/linkedin-job-decay-tracker',
        demo: 'https://linkedin-job-decay-tracker-queyw7nttenrpqmru4uoqr.streamlit.app/',
        status: 'DATA ANALYTICS',
    },
];

const Projects: React.FC = () => {
    return (
        <div className="site-page-content" style={{ paddingBottom: 32 }}>
            <p style={{ fontSize: 12, letterSpacing: 2, opacity: 0.7 }}>
                SELECTED WORK / 2026
            </p>

            <h1>AI Engineering Projects</h1>

            <p style={{ maxWidth: 720, lineHeight: 1.8 }}>
                I build AI agents, LLM-powered applications, and reliable
                backend systems. Here are some projects exploring agentic
                workflows, retrieval-augmented generation, and AI automation.
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                    gap: 20,
                    marginTop: 28,
                }}
            >
                {projects.map((project, index) => (
                    <article
                        key={project.title}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            minWidth: 0,
                            padding: 22,
                            border: '1px solid var(--border-color, #88888866)',
                            borderRadius: 10,
                            background: 'var(--card-background, transparent)',
                            boxSizing: 'border-box',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: 10,
                                alignItems: 'center',
                                marginBottom: 18,
                            }}
                        >
                            <span style={{ fontSize: 12, opacity: 0.7 }}>
                                PROJECT {String(index + 1).padStart(2, '0')}
                            </span>

                            <span
                                style={{
                                    fontSize: 10,
                                    letterSpacing: 1,
                                    border: '1px solid currentColor',
                                    borderRadius: 4,
                                    padding: '4px 7px',
                                }}
                            >
                                {project.status}
                            </span>
                        </div>

                        <p
                            style={{
                                fontSize: 11,
                                letterSpacing: 1,
                                lineHeight: 1.6,
                                opacity: 0.7,
                                margin: '0 0 8px',
                            }}
                        >
                            {project.category}
                        </p>

                        <h2 style={{ fontSize: 22, margin: '0 0 12px' }}>
                            {project.title}
                        </h2>

                        <p style={{ lineHeight: 1.75, fontSize: 14, flex: 1 }}>
                            {project.description}
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 7,
                                margin: '12px 0 20px',
                            }}
                        >
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    style={{
                                        fontSize: 11,
                                        padding: '5px 8px',
                                        borderRadius: 4,
                                        background:
                                            'var(--tag-background, #88888818)',
                                        border:
                                            '1px solid var(--border-color, #88888844)',
                                    }}
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 10,
                                marginTop: 'auto',
                            }}
                        >
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    padding: '9px 12px',
                                    border: '1px solid currentColor',
                                    borderRadius: 5,
                                    fontSize: 12,
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                }}
                            >
                                Live Demo ↗
                            </a>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    padding: '9px 12px',
                                    border: '1px solid var(--border-color, #88888866)',
                                    borderRadius: 5,
                                    fontSize: 12,
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                }}
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            <div style={{ marginTop: 32 }}>
                <p style={{ lineHeight: 1.7 }}>
                    Interested in the implementation? Explore my GitHub profile
                    for code, experiments, and additional projects.
                </p>

                <a
                    href="https://github.com/shravani22patil"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 600 }}
                >
                    Explore GitHub ↗
                </a>
            </div>
        </div>
    );
};

export default Projects;


