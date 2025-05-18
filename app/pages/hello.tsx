'use client';

import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import "../style/globals.css";
import { useRouter } from "next/navigation"; 
import AnimatedBackground from "../components/AnimatedBackground";

const Hello = () => {
 const router = useRouter();
  const theme = 'dark';
  const colors = {
    dark: {
      primary: 'rgba(144, 202, 249, 0.06)',
      secondary: 'rgba(255, 255, 255, 0.05)',
      accent: 'rgba(187, 154, 247, 0.05)',
      gradient: 'linear-gradient(45deg, #121212 0%, #1e1e1e 100%)',
      button: '#9099A7',
    },
  };

  const currentColors = colors[theme];

  const handleStart = () => {
    router.push("/login");
  };

  return (
    <>
      <AnimatedBackground />
    <div className="flex items-center justify-center min-h-screen w-full p-4 text-white overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto text-center">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI Генератор твоей книги
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg mb-8 px-2 sm:px-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Создавай свои книги с помощью AI. Просто введи текст, и мы создадим для тебя уникальную книгу.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex justify-center"
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: currentColors.button,
              color: '#000',
              borderRadius: '9999px',
              padding: '0.5rem 1.5rem',
              textTransform: 'none',
              fontSize: '1.3rem',
              boxShadow: '0 4px 20px rgba(144, 202, 249, 0.4)',
            }}
            onClick={handleStart}
          >
            Начать
          </Button>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Hello;
