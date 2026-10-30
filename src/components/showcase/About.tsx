
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';
import pinkPhoto from '../../assets/pictures/shravani-pink.jpg.jpeg';
import blazerPhoto from '../../assets/pictures/shravani-blazer.jpg.jpeg';

const About: React.FC = () => {
    const [frontPhoto, setFrontPhoto] = useState<'blazer' | 'pink'>('blazer');

    const photos = [
        {
            id: 'blazer' as const,
            src: blazerPhoto,
            alt: 'Shravani wearing a beige blazer',
        },
        {
            id: 'pink' as const,
            src: pinkPhoto,
            alt: 'Shravani wearing a pink shirt',
        },
    ];

    const backPhoto = frontPhoto === 'blazer' ? 'pink' : 'blazer';

    return (
        <div className="site-page-content">
            <p style={{ fontSize: 12, letterSpacing: 2, opacity: 0.7 }}>
                ABOUT / INTRODUCTION
            </p>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '24px 0 36px',
                }}
            >
                <div
                    aria-label="Photo gallery. Click the photo behind to bring it to the front."
                    style={{
                        position: 'relative',
                        width: 'min(100%, 300px)',
                        height: 350,
                        perspective: 1000,
                    }}
                >
                    {photos.map((photo) => {
                        const isFront = photo.id === frontPhoto;
                        const isBack = photo.id === backPhoto;

                        return (
                            <button
                                key={photo.id}
                                type="button"
                                onClick={() => setFrontPhoto(photo.id)}
                                aria-label={
                                   isFront
                                     ? 'Show this photo behind the other photo'
                                     : 'Bring this photo to the front'
                                }
                                style={{
                                    position: 'absolute',
                                    top: isFront ? 0 : 12,
                                    left: isFront ? 0 : 28,
                                    width: 'min(270px, calc(100% - 30px))',
                                    height: 330,
                                    padding: 7,
                                    border: '1px solid var(--border-color, #88888866)',
                                    borderRadius: 12,
                                    background: 'var(--card-background, #fff)',
                                    boxShadow: isFront
                                        ? '0 12px 30px rgba(0, 0, 0, 0.20)'
                                        : '0 8px 20px rgba(0, 0, 0, 0.14)',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    transform: isFront
                                        ? 'rotate(0deg) scale(1)'
                                        : 'rotate(7deg) scale(0.96)',
                                    transformOrigin: 'center center',
                                    transition:
                                        'transform 450ms ease, top 450ms ease, left 450ms ease, box-shadow 450ms ease',
                                    zIndex: isFront ? 2 : 1,
                                    opacity: isBack ? 0.96 : 1,
                                }}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    draggable={false}
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center 30%',
                                        borderRadius: 7,
                                    }}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            <h1 style={{ marginLeft: -16 }}>Hello, I'm Shravani.</h1>

            <h3>Computer Science Engineering Student | AI Engineering</h3>

            <br />

            <div className="text-block">
                <p>
                    I'm a Computer Science Engineering student at SSVPS
                    Bapusaheb Shivajirao Deore College of Engineering, Dhule,
                    graduating in 2027. I'm interested in building practical
                    AI applications, intelligent agents, and LLM-powered systems.
                </p>

                <br />

                <p>
                    My work spans AI agent development, retrieval-augmented
                    generation (RAG), backend API development, machine learning,
                    and data processing. I've worked with tools and technologies
                    such as Python, FastAPI, Haystack, Gemini, MCP, ChromaDB,
                    and Docker to build and experiment with real-world applications.
                </p>

                <br />

                <p>
                    Through internships and independent projects, I've explored
                    both the AI application layer and the backend systems that
                    support it. I enjoy understanding how different components
                    work together, integrating tools and APIs, and improving
                    the reliability of AI-powered workflows.
                </p>

                <br />

                <h3>What I'm Exploring</h3>

                <br />

                <p>
                    I'm currently focused on agentic AI, LLM application
                    engineering, tool calling, RAG, and AI automation. My goal
                    is to keep building useful systems, strengthen my engineering
                    fundamentals, and contribute to meaningful AI projects.
                </p>

                <br />

                <h3>Beyond Technology</h3>

                <br />

                <p>
                    I also enjoy creative work, including art and design.
                    I like the combination of creativity and technology, and
                    I'm interested in how thoughtful design can make technical
                    products more useful and approachable.
                </p>

                <br />

                <p>
                    Thanks for visiting my portfolio! Explore my{' '}
                    <Link to="/projects">projects</Link>, learn about my
                    experience, or reach out through the{' '}
                    <Link to="/contact">contact page</Link>.
                </p>

                <p>
                    You can also email me at{' '}
                    <a href="mailto:shravanipatil580@gmail.com">
                        shravanipatil580@gmail.com
                    </a>.
                </p>
            </div>

            <ResumeDownload />
        </div>
    );
};

export default About;
