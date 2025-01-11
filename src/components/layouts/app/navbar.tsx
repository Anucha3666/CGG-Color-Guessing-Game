"use client";
import { SettingsModal } from "@/components/settings";
import { BottomSettings } from "@/components/settings/buttom-settings";
import { screenUtils } from "@/utils";
import { useState } from "react";

export const AppNavbar = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        <BottomSettings {...{ setIsOpen }} />
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
      <SettingsModal {...{ isOpen, setIsOpen }} />
    </div>
  );
};
