import { FC, ReactNode, useRef } from "react";
import { motion } from "framer-motion";

type ModalProps = {
  title: string;
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  content: ReactNode;
};

export const Button: FC<{
  type: "primary";
  onClick: () => void;
  content: ReactNode;
}> = ({ onClick, content }) => {
  return (
    <motion.div layout layoutId='setting-modal' onClick={onClick}>
      {content}
    </motion.div>
  );
};

export const Modal: FC<ModalProps> = ({
  title,
  open,
  onOk,
  onCancel,
  content,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onCancel();
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
        className='w-[25rem] h-max bg-white z-50 rounded-md p-4'
        ref={modalRef}>
        <h2 className='text-xl font-bold mb-4'>{title}</h2>
        <div>{content}</div>
        <div className='flex justify-end gap-2 mt-4'>
          <button
            className='px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400'
            onClick={onCancel}>
            Cancel
          </button>
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
            onClick={onOk}>
            OK
          </button>
        </div>
      </motion.div>
    </div>
  );
};
