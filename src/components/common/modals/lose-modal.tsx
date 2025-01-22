"use client";

import { FC, useEffect, useState } from "react";
import { Modal } from "../modal";
import { motion } from "framer-motion";

export const LoseModal: FC = () => {
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
    <Modal
      layoutId='lose-modal'
      open={isOpen}
      onCancel={() => setIsOpen(false)}>
      <div className='flex flex-col justify-between w-full py-6'>
        <motion.p
          className='text-3xl font-bold text-center text-red-500'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}>
          Oops! You Lost This Round
        </motion.p>

        <motion.p
          className='text-md text-center text-gray-600 dark:text-gray-400'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}>
          {"Don't worry, every loss is a chance to learn and improve!"}
        </motion.p>
        <p className='text-lg font-bold w-full text-center text-gray-600 pt-2'>
          {countdown} s
        </p>
      </div>
    </Modal>
  );
};
