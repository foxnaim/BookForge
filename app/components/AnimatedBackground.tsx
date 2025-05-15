'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const theme = 'dark';

  const colors = {
    dark: {
      primary: 'rgba(144, 202, 249, 0.06)',
      secondary: 'rgba(255, 255, 255, 0.05)',
      accent: 'rgba(187, 154, 247, 0.05)',
      gradient: 'linear-gradient(45deg, #121212 0%, #1e1e1e 100%)',
    },
  };

  const currentColors = colors[theme];

  const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  if (!windowSize) {
    return null;
  }

  const randomX = () => Math.random() * windowSize.width;
  const randomY = () => Math.random() * windowSize.height;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: 'hidden',
        background: currentColors.gradient,
      }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`main-${i}`}
          style={{
            position: 'absolute',
            width: Math.random() * 300 + 200,
            height: Math.random() * 300 + 200,
            borderRadius: '50%',
            background: currentColors.primary,
            filter: 'blur(40px)',
          }}
          animate={{
            x: [randomX(), randomX()],
            y: [randomY(), randomY()],
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 40 + 40,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      ))}

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`small-${i}`}
          style={{
            position: 'absolute',
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            borderRadius: '50%',
            background: currentColors.secondary,
            filter: 'blur(30px)',
          }}
          animate={{
            x: [randomX(), randomX()],
            y: [randomY(), randomY()],
            scale: [1, 1.2, 1],
            rotate: [0, -360],
          }}
          transition={{
            duration: Math.random() * 30 + 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      ))}

      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`accent-${i}`}
          style={{
            position: 'absolute',
            width: Math.random() * 150 + 100,
            height: Math.random() * 150 + 100,
            borderRadius: '50%',
            background: currentColors.accent,
            filter: 'blur(25px)',
          }}
          animate={{
            x: [randomX(), randomX()],
            y: [randomY(), randomY()],
            scale: [1, 1.3, 1],
            rotate: [0, 180],
          }}
          transition={{
            duration: Math.random() * 25 + 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      ))}

      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            theme === 'dark'
              ? 'radial-gradient(circle at 50% 50%, rgba(144, 202, 249, 0.05) 0%, rgba(144, 202, 249, 0) 70%)'
              : 'radial-gradient(circle at 50% 50%, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0) 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
          mixBlendMode: theme === 'dark' ? 'overlay' : 'multiply',
        }}
      />

      {[...Array(60)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          style={{
            position: 'absolute',
            width: 0.8,
            height: 0.8,
            borderRadius: '100%',
            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.3)',
            filter: 'blur(1px)',
          }}
          animate={{
            x: [randomX(), randomX()],
            y: [randomY(), randomY()],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </Box>
  );
}
