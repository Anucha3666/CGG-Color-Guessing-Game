import { FC } from "react";

export type TButtonRestartProps = {
  onClick: () => void;
};

export const ButtonRestart: FC<TButtonRestartProps> = () => {
  return (
    <button className=' border-2 border-white p-2 rounded-full flex gap-1 text-white font-medium'>
      Restart
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'>
        <path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
        <path d='M3 3v5h5' />
      </svg>
    </button>
  );
};
