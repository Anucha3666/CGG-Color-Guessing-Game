"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EntrancePage from "@/pages/entrance";
import { TGameData } from "@/types";
import { ColorBubbles } from "@/helpers/color-bubbles";

export default function ColorGuessingGameEntrance() {
  const time = 1000;

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameDatasets, setGameDatasets] = useState<TGameData[]>([]);
  const [timer, setTimer] = useState(0);

  console.log(gameDatasets);

  const GenerateHEXColor = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    return randomColor;
  };

  const GenerateGameData = () => {
    const information = Array?.from({ length: 9 }, () => ({
      color: GenerateHEXColor(),
      correct: Math.floor(Math.random() * 9),
      answer: null,
    }));

    setGameDatasets(information);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error(
          `Error attempting to exit full-screen mode: ${err.message} (${err.name})`
        );
      });
    }
  };

  const isLose = gameDatasets?.find(
    ({ answer, correct }) => answer !== null && answer !== correct
  );
  const isWin =
    gameDatasets?.filter(({ answer, correct }) => answer === correct)
      ?.length === gameDatasets?.length;

  const isGameOver = isLose || isWin;
  const dataSet = isLose
    ? gameDatasets.filter(({ answer }) => answer !== null)?.length - 1
    : isWin
    ? gameDatasets?.length - 1
    : gameDatasets.findIndex(({ answer }) => answer === null) ??
      gameDatasets?.length;

  useEffect(() => {
    if (timer > 0 && !isGameOver) {
      const time = setTimeout(() => setTimer(timer - 1), 10);
      return () => clearTimeout(time);
    } else {
      if (timer <= 0 && gameDatasets?.length > 0) {
        setGameDatasets(
          gameDatasets
            ?.slice(0, dataSet)
            ?.concat({ ...gameDatasets[dataSet], answer: 10 })
            ?.concat(gameDatasets?.slice(dataSet + 1))
        );
      }
    }
  }, [timer, isGameOver, dataSet, gameDatasets, isGameStarted]);

  return (
    <div
      className='w-screen h-screen overflow-hidden inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600'
      // className='w-screen h-screen overflow-hidden inset-0 bg-gradient-to-br'
    >
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
        {isGameStarted ? (
          <div className=' p-4 bg-[#FFFFFF40] backdrop-blur-md rounded-xl shadow-md z-50 flex flex-col justify-center items-center gap-2'>
            <p className='font-bold text-lg'>
              {`${dataSet + 1} / ${gameDatasets?.length}`}
            </p>
            {isGameOver && (
              <p className=' text-lg font-bold'>
                {isLose ? "You Lose" : isWin ? "You Win" : ""}
              </p>
            )}
            <div className='w-full bg-[#FFFFFF40] backdrop-blur-sm flex justify-center items-center rounded-full h-6 overflow-hidden relative'>
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
                  width: `${(timer / time) * 100}%`,
                  background:
                    "linear-gradient(to left, #f4e04d, #34d399, #f87171)",
                  backgroundSize: "300% 100%",
                }}
              />
              {timer !== 0 && (
                <p className=' text-white font-extrabold absolute z-40'>
                  {(timer / 100)?.toFixed(0)} s
                </p>
              )}
            </div>
            <div
              className='w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] bg-white rounded-lg grid gap-1 p-1'
              style={{
                gridTemplateColumns: `repeat(${3}, 1fr)`,
              }}>
              {Array(9)
                ?.fill(0)
                ?.map((_, i) => (
                  <div
                    key={i}
                    className='w-full h-full rounded-md cursor-pointer active:scale-95'
                    style={{
                      background: `${gameDatasets[dataSet]?.color}${
                        ["3", "5", "6", "7", "9", "A", "B", "C", "D", "F"][
                          i === gameDatasets[dataSet]?.correct ? dataSet : 9
                        ]
                      }0`,
                    }}
                    onClick={() => {
                      if (!isGameOver) {
                        setGameDatasets(
                          gameDatasets
                            ?.slice(0, dataSet)
                            ?.concat({ ...gameDatasets[dataSet], answer: i })
                            ?.concat(gameDatasets?.slice(dataSet + 1))
                        );
                        if (i === gameDatasets[dataSet]?.correct) {
                          setTimer(time);
                        }
                      }
                    }}>
                    {/* {i === gameDatasets[dataSet]?.correct ? 0 : 1} */}
                  </div>
                ))}
            </div>

            {isGameOver && (
              <button
                className=' border-2 border-white p-2 rounded-full flex gap-1 text-white font-medium'
                onClick={() => {
                  GenerateGameData();
                  setTimer(time);
                }}>
                Restart
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  // stroke-linecap='round'
                  // stroke-linejoin='round'
                >
                  <path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
                  <path d='M3 3v5h5' />
                </svg>
              </button>
            )}
          </div>
        ) : (
          <EntrancePage
            onStart={() => {
              GenerateGameData();
              setTimer(time);
              toggleFullScreen();
            }}
            {...{ isGameStarted, setIsGameStarted }}
          />
        )}
      </motion.div>
      <div className=' absolute bottom-1 flex flex-col font-bold justify-center w-full items-center text-white'>
        <p>
          Copyright © 2025 | Powered by
          <a
            href='https://github.com/Anucha3666'
            target='_blank'
            className='pl-1 underline hover:text-blue-400 active:text-blue-500'>
            Mahingsa
          </a>
        </p>
      </div>
    </div>
  );
}
