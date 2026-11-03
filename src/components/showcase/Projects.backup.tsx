import React from 'react';

const projects = [
    {
        title: 'RepoLens AI',
        category: 'AGENTIC AI · DEVELOPER TOOLS',
        description:
            'A GitHub Intelligence Agent that answers repository questions using Haystack, Gemini, and MCP. Includes repository-aware RAG with ChromaDB and retrieval evaluation.',
        technologies: ['Python', 'Haystack', 'Gemini', 'MCP', 'ChromaDB'],
        link: '',
        status: 'AI AGENT',
    },
    {
        title: 'SecAgent',
        category: 'AI ENGINEERING · SECURITY AUTOMATION',
        description:
            'A multi-stage security assessment pipeline that parses Nmap results, matches potential CVEs, applies input restrictions, and generates structured reports.',
        technologies: ['Python', 'FastAPI', 'Nmap', 'REST APIs'],
        link: '',
        status: 'AUTOMATION',
    },
    {
        title: 'VisionVoice AI',
        category: 'MULTIMODAL AI · ACCESSIBILITY',
        description:
            'A visual-to-audio assistant that extracts structured information from images and PDFs using Gemini and converts content into spoken narration.',
        technologies: ['Python', 'Gemini', 'Streamlit', 'gTTS'],
        link: '',
        status: 'MULTIMODAL AI',
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
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
                                PROJECT 0{index + 1}
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
                                        background: 'var(--tag-background, #88888818)',
                                        border: '1px solid var(--border-color, #88888844)',
                                    }}
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        {project.link ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontWeight: 600, fontSize: 13 }}
                            >
                                View repository ↗
                            </a>
                        ) : (
                            <span style={{ fontSize: 12, opacity: 0.6 }}>
                                Repository link to be added
                            </span>
                        )}
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

