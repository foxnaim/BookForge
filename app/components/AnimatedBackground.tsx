'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

export default function AnimatedBackground() {
  const theme = 'dark';

  const colors = {
    dark: {
      primary: 'rgba(144, 202, 249, 0.08)',
      secondary: 'rgba(255, 255, 255, 0.06)',
      gradient: 'linear-gradient(45deg, #121212 0%, #1e1e1e 100%)',
    },
  };

  const currentColors = colors[theme];

  return (
    <div
      style={{
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
      {/* Левый круг */}
      <motion.div
        style={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: currentColors.primary,
          filter: 'blur(40px)',
          left: '-50px',
          top: '30%',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Правый круг */}
      <motion.div
        style={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: currentColors.secondary,
          filter: 'blur(40px)',
          right: '-50px',
          top: '30%',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
