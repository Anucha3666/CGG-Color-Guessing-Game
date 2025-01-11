import { FC, useRef } from "react";
import { motion } from "framer-motion";

export type SettingsModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const SettingsModal: FC<SettingsModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className='w-screen h-screen absolute top-0 left-0 flex justify-center items-center backdrop-blur-md bg-[#00000060] z-50'
          onClick={handleOutsideClick}>
          <motion.div
            layout
            layoutId='setting-modal'
            className='w-[25rem] h-max bg-white z-50 rounded-md p-2'
            ref={modalRef}>
            <p className='text-xl font-bold'>Settings</p>
          </motion.div>
        </div>
      )}
    </>
  );
};
