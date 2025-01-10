"use client";

import { motion } from "framer-motion";

import EntrancePage from "@/pages/entrance";
import { ColorBubbles } from "@/helpers/color-bubbles";
import { Analytics } from "@vercel/analytics/react";
import { AppFooter } from "@/components/layouts/app";

export default function ColorGuessingGameEntrance() {
  return (
    <>
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
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          <ColorBubbles />

          <EntrancePage />
        </motion.div>

        <AppFooter />
      </div>
      <Analytics />
    </>
  );
}
