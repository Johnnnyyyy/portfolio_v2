'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SplashLoader.module.css';
import Image from 'next/image';

export default function SplashLoader() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Signal client hydrated
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
            
            // Total duration: 2s (logo alone) + 2.5s (ring growth + glow) + 0.5s (hold) = 5s total
            const totalTimer = setTimeout(() => {
                document.body.style.overflow = 'auto';
                setIsVisible(false);
            }, 5000);

            return () => {
                document.body.style.overflow = 'auto';
                clearTimeout(totalTimer);
            };
        }
    }, []);

    if (!isMounted) return null; // Avoid hydration mismatch

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={styles.splashContainer}
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999, backgroundColor: '#050505', pointerEvents: 'none' }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    {/* Animated Background Particles */}
                    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={styles.particleFloat}
                                style={{
                                    position: 'absolute',
                                    width: '6px', height: '6px',
                                    background: 'linear-gradient(to right, rgba(96, 165, 250, 0.5), rgba(168, 85, 247, 0.5))',
                                    borderRadius: '9999px',
                                    left: `${(i * 18) % 100}%`,
                                    top: `${(i * 15) % 100}%`,
                                    animationDelay: `${i * 0.1}s`,
                                }}
                                animate={{
                                    scale: [0.8, 1.4, 0.8],
                                    opacity: [0.3, 0.9, 0.3],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        ))}
                    </div>

                    {/* FULL SCREEN Flex Container to force absolute center over everything */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Central Grouping Container */}
                        <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            
                            {/* Energy Waves Behind Logo */}
                            <motion.div 
                                style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2, duration: 0.5 }} // Appears after 2s
                            >
                                <div className={styles.energyWave} style={{ position: 'absolute', width: '230px', height: '230px', borderRadius: '9999px', border: '1px solid rgba(96, 165, 250, 0.4)' }}></div>
                                <div className={styles.energyWave} style={{ position: 'absolute', width: '230px', height: '230px', borderRadius: '9999px', border: '1px solid rgba(168, 85, 247, 0.4)', animationDelay: '0.4s' }}></div>
                            </motion.div>

                            {/* Charging Ring */}
                            <motion.div
                                className={styles.ringGlow}
                                style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2, duration: 0.2 }} // Appears after 2s
                            >
                                <svg width="300" height="300" viewBox="0 0 300 300" style={{ transform: 'rotate(-90deg)' }}>
                                    {/* Background faint ring */}
                                    <circle
                                        cx="150"
                                        cy="150"
                                        r="115"
                                        fill="none"
                                        stroke="rgba(255,255,255,0.05)"
                                        strokeWidth="5"
                                    />
                                    {/* Progress charging ring (Framer Motion handles the dashoffset) */}
                                    <motion.circle
                                        cx="150"
                                        cy="150"
                                        r="115"
                                        fill="none"
                                        stroke="url(#ringGradient)"
                                        strokeWidth="6"
                                        strokeDasharray={2 * Math.PI * 115}
                                        strokeLinecap="round"
                                        className={styles.ringPulse}
                                        
                                        // Start at 0% (offset = full length), end at 100% (offset = 0)
                                        initial={{ strokeDashoffset: 2 * Math.PI * 115 }}
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{
                                            delay: 2,             // Waits exactly 2s to start
                                            duration: 2.5,        // Grows from 1% to 100% over 2.5s
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <defs>
                                        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
                                            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </motion.div>

                            {/* Logo - INSTANT and STAYS in Absolute Center */}
                            <motion.div
                                className={styles.logoGlow}
                                style={{ position: 'absolute', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '9rem', height: '9rem' }}
                                initial={{ scale: 1, opacity: 1 }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ delay: 4.5, duration: 0.5 }} // Slight pulse when ring hits 100%
                            >
                                <div style={{ width: '7rem', height: '7rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    <Image 
                                        src="/logo.png" 
                                        width={112} 
                                        height={112} 
                                        alt="Logo"
                                        style={{ objectFit: 'contain' }}
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
