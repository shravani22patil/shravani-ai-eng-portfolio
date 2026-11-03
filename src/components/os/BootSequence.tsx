import React, { useEffect, useState } from 'react';

interface BootSequenceProps {
    onStart: () => void;
}

const BootSequence: React.FC<BootSequenceProps> = ({ onStart }) => {
    const [showStart, setShowStart] = useState(false);
    const [progress, setProgress] = useState(0);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setProgress((previous) => {
                const next = Math.min(previous + 10, 100);

                if (next === 100) {
                    window.clearInterval(timer);
                    setTimeout(() => setShowStart(true), 700);
                }

                return next;
            });
        }, 180);

        return () => window.clearInterval(timer);
    }, []);

    const startPortfolio = () => {
        setFinished(true);
        setTimeout(onStart, 250);
    };

    if (finished) return null;

    return (
        <div style={styles.screen}>
            <div style={styles.panel}>
                <div style={styles.header}>
                    <div>
                        <div style={styles.green}>SHRAVANI,</div>
                        <div style={styles.green}>PATIL SYSTEMS</div>
                    </div>
                    <div>
                        <div>PORTFOLIO BIOS</div>
                        <div>VERSION 1.0</div>
                    </div>
                </div>

                <hr />

                <p>SHRAVANI PORTFOLIO INITIALIZATION</p>
                <p>Checking system ........ OK</p>
                <p>Loading AI projects ... {progress}%</p>

                <div style={styles.track}>
                    <div style={{ ...styles.fill, width: `${progress}%` }} />
                </div>

                {progress === 100 && (
                    <p style={styles.green}>PORTFOLIO READY</p>
                )}

                {showStart && (
                    <div style={styles.startArea}>
                        <p>Welcome to my digital workspace.</p>
                        <button style={styles.button} onClick={startPortfolio}>
                            START PORTFOLIO
                        </button>
                    </div>
                )}

                <div style={styles.footer}>
                    AI ENGINEERING • MACHINE LEARNING • INNOVATION
                </div>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    screen: {
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        fontFamily: 'monospace',
        boxSizing: 'border-box',
    },
    panel: {
        width: '100%',
        maxWidth: 720,
        border: '2px solid #fff',
        padding: 28,
        boxSizing: 'border-box',
        boxShadow: '0 0 24px rgba(0,255,100,0.12)',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 20,
        lineHeight: 1.7,
        fontSize: 13,
    },
    green: {
        color: '#00ff66',
        fontWeight: 'bold',
    },
    track: {
        height: 8,
        border: '1px solid #00ff66',
        margin: '20px 0',
    },
    fill: {
        height: '100%',
        background: '#00ff66',
        transition: 'width 180ms linear',
    },
    startArea: {
        marginTop: 28,
        textAlign: 'center',
    },
    button: {
        background: '#000',
        color: '#00ff66',
        border: '2px solid #00ff66',
        padding: '12px 24px',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: 12,
    },
    footer: {
        borderTop: '1px solid #444',
        paddingTop: 16,
        marginTop: 32,
        fontSize: 11,
        color: '#999',
        textAlign: 'center',
    },
};

export default BootSequence;