"use cline";

import { FC } from "react";
import { Modal } from "../modal";

export type WinModalProps = {
  open?: boolean;
  onCancel?: () => void;
};

export const WinModal: FC<WinModalProps> = ({ open, onCancel }) => {
  return (
    <Modal layoutId='win-modal' {...{ open, onCancel }}>
      <div className='flex justify-between w-full'>
        <p className=' text-lg font-bold'>Win</p>
      </div>
    </Modal>
  );
};
