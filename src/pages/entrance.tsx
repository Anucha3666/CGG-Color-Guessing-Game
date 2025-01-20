"use client";

import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/assets/images/logo-no-background.png";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useSound from "use-sound";
import introSound from "@/assets/sounds/intro.mp3";

const EntrancePage: FC = ({}) => {
  const [playIntro] = useSound(introSound, { loop: true });

  const router = useRouter();
  const [isStarted, setIsStarted] = useState(false);

  const ProjectName = "Color Guessing Game";

  const startGame = () => {
    setIsStarted(true);
    setTimeout(() => {
      router.push("/home");
    }, 1700);
  };

  useEffect(() => {
    playIntro();
  }, [playIntro]);

  return (
    <div className='relative h-full overflow-hidden'>
      <AnimatePresence>
        {!isStarted && (
          <div className='w-full h-full flex flex-col overflow-hidden items-center justify-center'>
            <motion.div
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: isStarted ? 0.5 : 1,
              }}
              className='mt-10 flex justify-center'>
              <Image
                src={Logo}
                alt='Color Guessing Game Logo'
                className=' w-[14rem] h-[14rem] md:w-[16rem] md:h-[16rem]'
              />
            </motion.div>
            <div className='hidden md:flex '>
              {ProjectName?.split("").map((char, index) => (
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
                    delay: index * (isStarted ? 0.05 : 0.1),
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  }}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <div className='md:hidden flex flex-col items-center px-8'>
              {ProjectName?.split(" ").map((char, index) => (
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
                    delay: index * (isStarted ? 0.05 : 0.1),
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  }}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, rotate: 1 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ delay: isStarted ? 0 : 1.2 }}
              className='text-white text-center mt-5 text-lg hidden md:flex flex-col font-semibold w-[80%] md:w-[40%]'>
              Play the Color Guessing Game (CGG) - a fun and challenging game to
              test your color recognition skills! Match colors accurately within
              a set time limit and enhance your memory and observation. Perfect
              for all ages. Enjoy endless fun and improve your skills with CGG!
            </motion.p>
            <div className=' hover:rotate-3'>
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ delay: isStarted ? 0 : 1.6 }}
                onClick={startGame}
                className='px-6 py-3 mt-4 bg-white text-purple-600 font-bold rounded-full text-xl shadow-lg hover:bg-purple-100 transition-colors duration-300 hover:animate-wobble'>
                Start Game
              </motion.button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EntrancePage;
