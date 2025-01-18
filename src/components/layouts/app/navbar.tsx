"use client";
import { ModalTrigger } from "@/components/common/modal";
import { HistoryModal, SettingsModal } from "@/components/settings";
import { screenUtils } from "@/utils";
import { useState } from "react";

export const AppNavbar = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isOpenSettingsModal, setIsOpenSettingsModal] =
    useState<boolean>(false);
  const [isOpenHistoryModal, setIsOpenHistoryModal] = useState<boolean>(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      setIsFullScreen(true);
      screenUtils.request();
    } else {
      setIsFullScreen(false);
      screenUtils.exit();
    }
  };

  return (
    <div className='w-screen flex gap-1 p-2 h-min z-20'>
      <div className=' absolute top-2  right-2 flex gap-2 '>
        <ModalTrigger
          layoutId='history-modal'
          onClick={() => setIsOpenHistoryModal(true)}>
          <button className=' p-2 rounded-md flex gap-1 backdrop-blur-sm bg-[#FFFFFF40] text-white font-medium hover:scale-105 shadow-md'>
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
              <path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
              <path d='M3 3v5h5' />
              <path d='M12 7v5l4 2' />
            </svg>
          </button>
        </ModalTrigger>
        <ModalTrigger
          layoutId='setting-modal'
          onClick={() => setIsOpenSettingsModal(true)}>
          <button className=' p-2 rounded-md flex gap-1 backdrop-blur-sm bg-[#FFFFFF40] text-white font-medium hover:scale-105 shadow-md'>
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
              <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
              <circle cx='12' cy='12' r='3' />
            </svg>
          </button>
        </ModalTrigger>

        <button
          className=' p-2 rounded-md flex gap-1 backdrop-blur-sm bg-[#FFFFFF40] text-white font-medium hover:scale-105 shadow-md'
          onClick={() => toggleFullScreen()}>
          {!isFullScreen ? (
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
              <path d='m21 21-6-6m6 6v-4.8m0 4.8h-4.8' />
              <path d='M3 16.2V21m0 0h4.8M3 21l6-6' />
              <path d='M21 7.8V3m0 0h-4.8M21 3l-6 6' />
              <path d='M3 7.8V3m0 0h4.8M3 3l6 6' />
            </svg>
          ) : (
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
              <path d='m15 15 6 6m-6-6v4.8m0-4.8h4.8' />
              <path d='M9 19.8V15m0 0H4.2M9 15l-6 6' />
              <path d='M15 4.2V9m0 0h4.8M15 9l6-6' />
              <path d='M9 4.2V9m0 0H4.2M9 9 3 3' />
            </svg>
          )}
        </button>
      </div>
      <HistoryModal
        open={isOpenHistoryModal}
        onCancel={() => setIsOpenHistoryModal(false)}
      />
      <SettingsModal
        open={isOpenSettingsModal}
        onCancel={() => setIsOpenSettingsModal(false)}
      />
    </div>
  );
};
