import React from 'react';
import ResumeDownload from './ResumeDownload';

const experiences = [
    {
        company: 'FlyRank AI',
        location: 'Remote · Chicago, USA',
        role: 'Backend AI Engineering Intern',
        duration: 'Jun 2026 – Aug 2026',
        summary:
            'Worked on backend engineering assignments focused on REST API development, data persistence, authentication, and web-scraping pipelines.',
        highlights: [
            'Developed a FastAPI REST API across three staged assignments, progressing from in-memory storage to SQLite and Dockerized PostgreSQL.',
            'Implemented Pydantic request and response schemas, reusable Supabase JWT authentication dependencies, protected routes, and Swagger API documentation.',
            'Built a six-stage web-scraping pipeline with pagination, eight-field extraction, price normalization, URL-based deduplication, caching, and HTTP error handling.',
            'Generated structured JSON outputs for validated records, failures, and run metrics, and checked idempotency across repeated runs.',
        ],
        technologies: [
            'Python',
            'FastAPI',
            'Pydantic',
            'PostgreSQL',
            'SQLite',
            'Docker',
            'Supabase Auth',
        ],
    },
    {
        company: 'UniConverge Technologies · Upskill Campus',
        location: 'Remote · Noida, India',
        role: 'Data Science & Machine Learning Intern',
        duration: 'Apr 2026 – Jun 2026',
        summary:
            'Worked on computer vision and machine learning tasks involving agricultural image data and model development.',
        highlights: [
            'Fine-tuned a YOLOv8 model on agricultural field images for crop and weed detection across sesame crop varieties.',
            'Applied Keras ImageDataGenerator augmentation to improve class balance.',
            'Completed a machine learning capstone covering data preprocessing, feature engineering, model training, and evaluation on an industrial dataset.',
        ],
        technologies: [
            'Python',
            'YOLOv8',
            'Keras',
            'Image Augmentation',
            'Machine Learning',
        ],
    },
    {
        company: 'Edunet Foundation · VOIS & Vodafone',
        location: 'Remote · Maharashtra, India',
        role: 'Data Analyst Intern',
        duration: 'Sep 2025 – Oct 2025',
        summary:
            'Worked with customer feedback data to support sentiment analysis, trend monitoring, and business reporting.',
        highlights: [
            'Processed more than 50,000 customer feedback records using Pandas and NumPy.',
            'Implemented an LLM-assisted ETL pipeline for trend detection and weekly summaries.',
            'Created three Power BI dashboards to track Net Promoter Score (NPS), churn signals, and campaign KPIs.',
        ],
        technologies: [
            'Python',
            'Pandas',
            'NumPy',
            'LLM-assisted ETL',
            'Power BI',
        ],
    },
];

const Experience: React.FC = () => {
    return (
        <div className="site-page-content" style={{ paddingBottom: 32 }}>
            <p style={{ fontSize: 12, letterSpacing: 2, opacity: 0.7 }}>
                CAREER / EXPERIENCE
            </p>

            <h1>Experience</h1>

            <p style={{ maxWidth: 720, lineHeight: 1.8 }}>
                My experience spans backend engineering, machine learning,
                and data analytics. Each role has helped me develop practical
                skills in building systems, working with data, and solving
                technical problems.
            </p>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 24,
                    marginTop: 32,
                }}
            >
                {experiences.map((experience, index) => (
                    <article
                        key={experience.company}
                        style={{
                            padding: 24,
                            border: '1px solid var(--border-color, #88888866)',
                            borderRadius: 10,
                            boxSizing: 'border-box',
                            minWidth: 0,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                flexWrap: 'wrap',
                                gap: 12,
                                marginBottom: 16,
                            }}
                        >
                            <div style={{ minWidth: 0, flex: '1 1 250px' }}>
                                <p
                                    style={{
                                        fontSize: 12,
                                        letterSpacing: 1,
                                        opacity: 0.65,
                                        margin: '0 0 8px',
                                    }}
                                >
                                    EXPERIENCE 0{index + 1}
                                </p>

                                <h2
                                    style={{
                                        fontSize: 23,
                                        margin: '0 0 8px',
                                        overflowWrap: 'anywhere',
                                    }}
                                >
                                    {experience.company}
                                </h2>

                                <h3 style={{ margin: '0 0 6px', fontSize: 16 }}>
                                    {experience.role}
                                </h3>

                                <p style={{ fontSize: 13, opacity: 0.7, margin: 0 }}>
                                    {experience.location}
                                </p>
                            </div>

                            <span
                                style={{
                                    fontSize: 12,
                                    border: '1px solid var(--border-color, #88888866)',
                                    borderRadius: 5,
                                    padding: '7px 10px',
                                    whiteSpace: 'normal',
                                }}
                            >
                                {experience.duration}
                            </span>
                        </div>

                        <p style={{ lineHeight: 1.8 }}>
                            {experience.summary}
                        </p>

                        <ul style={{ paddingLeft: 22, lineHeight: 1.8 }}>
                            {experience.highlights.map((highlight) => (
                                <li key={highlight} style={{ marginBottom: 8 }}>
                                    {highlight}
                                </li>
                            ))}
                        </ul>

                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 8,
                                marginTop: 18,
                            }}
                        >
                            {experience.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    style={{
                                        fontSize: 11,
                                        padding: '6px 9px',
                                        borderRadius: 4,
                                        background: 'var(--tag-background, #88888818)',
                                        border: '1px solid var(--border-color, #88888844)',
                                    }}
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            <div style={{ marginTop: 32 }}>
                <h3>Want more details?</h3>

                <p style={{ lineHeight: 1.8 }}>
                    My resume includes additional information about my
                    education, technical skills, projects, and certifications.
                </p>

                <ResumeDownload />
            </div>
        </div>
    );
};

export default Experience;
