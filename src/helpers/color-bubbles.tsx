import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ColorBubbles = () => {
  const [bubbles, setBubbles] = useState<
    { top: string; left: string; width: string; height: string }[]
  >([]);

  useEffect(() => {
    const generatedBubbles = Array.from({ length: 20 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 100 + 50}px`,
      height: `${Math.random() * 100 + 50}px`,
    }));
    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className='absolute inset-0 top-0 right-0 w-screen h-screen overflow-hidden'>
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          className='absolute rounded-full mix-blend-multiply filter blur-xl opacity-70'
          animate={{
            scale: [1, 2, 2, 1, 1],
            x: [0, 100, 0, -100, 0],
            y: [0, -100, 100, -100, 0],
            backgroundColor: ["#ff0080", "#7928ca", "#ff0080"],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            top: bubble.top,
            left: bubble.left,
            width: bubble.width,
            height: bubble.height,
          }}
        />
      ))}
    </div>
  );
};
