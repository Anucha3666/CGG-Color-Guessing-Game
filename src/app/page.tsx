"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ColorBubbles } from "@/helpers/color-bubbles";
import { useState } from "react";
import Logo from "@/assets/images/logo-no-background.png";
import Image from "next/image";

export default function ColorGuessingGameEntrance() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const text = "Color Guessing Game";

  const startGame = () => {
    setIsGameStarted(true);
  };

  return (
    <motion.div
      className='min-h-screen flex items-center justify-center overflow-hidden inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600'
      animate={{
        background: [
          "linear-gradient(to bottom right, #9333ea, #db2777, #2563eb)",
          "linear-gradient(to bottom right, #2563eb, #9333ea, #db2777)",
          "linear-gradient(to bottom right, #db2777, #2563eb, #9333ea)",
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}>
      <ColorBubbles />

      <div className='relative'>
        <AnimatePresence>
          {!isGameStarted && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: isGameStarted ? 0.5 : 1,
                }}
                className='mt-10 flex justify-center'>
                <Image
                  src={Logo}
                  alt='Color Guessing Game Logo'
                  width={260}
                  height={260}
                  className='w-100 h-100'
                />
              </motion.div>
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className='inline-block text-7xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]'
                  initial={{ y: -100, opacity: 0, rotate: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    rotate: Math.random() * 10 - 5,
                  }}
                  exit={{
                    y: -360,
                    opacity: 0,
                    transition: { duration: 0.5, delay: index * 0.05 },
                  }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    delay: index * (isGameStarted ? 0.05 : 0.1),
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  }}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ delay: isGameStarted ? 0 : 2 }}
                className='mt-10 flex justify-center'>
                <motion.button
                  className='px-6 py-3 bg-white text-purple-600 font-bold rounded-full text-xl shadow-lg hover:bg-purple-100 transition-colors duration-300'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startGame}>
                  Start Game
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
