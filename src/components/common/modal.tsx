import { FC, ReactNode, useRef } from "react";
import { motion } from "framer-motion";

type ModalProps = {
  open?: boolean;
  children?: ReactNode;
  onCancel?: () => void;
};

export const ModalTrigger: FC<{
  children: ReactNode;
  onClick: () => void;
}> = ({ onClick, children }) => {
  return (
    <motion.div layout layoutId='setting-modal' onClick={onClick}>
      {children}
    </motion.div>
  );
};

export const Modal: FC<ModalProps> = ({ open, children, onCancel }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      if (onCancel) onCancel();
    }
  };

  if (!open) return null;

  return (
    <div
      className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-md bg-[#00000060] z-50'
      onClick={handleOutsideClick}>
      <motion.div
        layout
        layoutId='setting-modal'
        className='w-[25rem] h-max bg-white z-50 rounded-md p-2 relative'
        ref={modalRef}>
        <div
          className=' absolute top-1 right-1 cursor-pointer '
          onClick={() => {
            if (onCancel) onCancel();
          }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'>
            <path d='M18 6 6 18' />
            <path d='m6 6 12 12' />
          </svg>
        </div>
        {children}
      </motion.div>
    </div>
  );
};
