"use cline";

import { FC } from "react";
import { Modal } from "../modal";

export type LoseModalProps = {
  open?: boolean;
  onCancel?: () => void;
};

export const LoseModal: FC<LoseModalProps> = ({ open, onCancel }) => {
  return (
    <Modal layoutId='lose-modal' {...{ open, onCancel }}>
      <div className='flex justify-between w-full'>
        <p className=' text-lg font-bold'>Lose</p>
      </div>
    </Modal>
  );
};
