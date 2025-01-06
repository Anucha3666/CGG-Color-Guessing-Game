"use client";

import { motion } from "framer-motion";
import { ColorBubbles } from "@/helpers/color-bubbles";
import { useEffect, useState } from "react";
import EntrancePage from "@/pages/entrance";

export default function ColorGuessingGameEntrance() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const time = 1000;
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 10);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);
  useEffect(() => {
    setTimeLeft(time);
  }, [isGameStarted]);

  return (
    <div className='w-screen h-screen overflow-hidden inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600'>
      <motion.div
        className='min-h-screen h-screen flex flex-col items-center justify-center overflow-hidden '
        animate={{
          background: [
            "linear-gradient(to bottom right, #9333ea, #db2777, #2563eb)",
            "linear-gradient(to bottom right, #2563eb, #9333ea, #db2777)",
            "linear-gradient(to bottom right, #db2777, #2563eb, #9333ea)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}>
        <ColorBubbles />
        {!isGameStarted ? (
          <div className=' p-4 bg-[#FFFFFF40] backdrop-blur-md rounded-xl shadow-md z-50 flex flex-col gap-2'>
            <div className='w-full  backdrop-blur-2xl flex justify-center items-center rounded-full h-6 overflow-hidden relative'>
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%"],
                }}
                transition={{
                  duration: 1,
                }}
                className='h-2.5 rounded-full flex justify-center items-center'
                style={{
                  height: "100%",
                  width: `${(timeLeft / time) * 100}%`,
                  background:
                    "linear-gradient(to left, #f4e04d, #34d399, #f87171)",
                  backgroundSize: "300% 100%",
                }}
              />
              {timeLeft !== 0 && (
                <p className=' text-white font-extrabold absolute z-40'>
                  {(timeLeft / 100)?.toFixed(0)} s
                </p>
              )}
            </div>
            <div className='w-[30rem] h-[30rem] bg-white rounded-lg'></div>
          </div>
        ) : (
          <EntrancePage {...{ isGameStarted, setIsGameStarted }} />
        )}
      </motion.div>
    </div>
  );
}
