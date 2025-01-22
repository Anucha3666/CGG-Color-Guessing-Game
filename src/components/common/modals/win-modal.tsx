"use client";

import { FC, useEffect, useState } from "react";
import { Modal } from "../modal";
import { motion } from "framer-motion";

export const WinModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    setIsOpen(true);

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      setIsOpen(false);
      clearInterval(interval);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <Modal layoutId='win-modal' open={isOpen} onCancel={() => setIsOpen(false)}>
      <div className='flex flex-col justify-between w-full bg-slate-400'>
        <motion.p
          className='text-3xl font-bold text-center text-yellow-800'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}>
          Congratulations! You Win!
        </motion.p>
        <motion.p
          className='text-lg text-center text-yellow-900'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}>
          {"Great job! You've mastered this challenge. Ready for the next one?"}
        </motion.p>
        <p className='text-lg font-bold w-full text-center text-yellow-900 pt-2'>
          {countdown} s
        </p>{" "}
      </div>
    </Modal>
  );
};
