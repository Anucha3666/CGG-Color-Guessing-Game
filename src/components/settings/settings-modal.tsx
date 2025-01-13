import { FC, useState } from "react";
import { Modal } from "../common/modal";

export type SettingsModalProps = {
  open?: boolean;
  onCancel?: () => void;
};

export const SettingsModal: FC<SettingsModalProps> = ({ open, onCancel }) => {
  const [data, setData] = useState({
    number_of_grids: 3,
    level: "easy",
  });
  const [hoverGrid, setHoverGrid] = useState<null | number>(null);

  return (
    <Modal {...{ open, onCancel }}>
      <div className='flex justify-between w-full'>
        <p className=' text-lg font-bold'>Setting</p>
      </div>

      <p className=' text-[1rem] font-medium'>Number of grids</p>
      <div className='flex gap-2'>
        <div className='w-full flex flex-col gap-1'>
          {Array?.from({ length: 3 })?.map((_, i) => (
            <div
              key={i}
              className={`w-full flex justify-center items-center rounded-md shadow-md ${
                i + 3 === data?.number_of_grids
                  ? " bg-[#03052C] text-white"
                  : " bg-[#FAFAFA]"
              } `}
              onClick={() => setData({ ...data, number_of_grids: i + 3 })}>
              <p className=' font-bold'>
                {i + 3} X {i + 3}
              </p>
            </div>
          ))}
        </div>
        <div className=' grid grid-cols-5 w-full gap-1'>
          {Array.from({ length: 5 })?.map((_, i) =>
            Array.from({ length: 5 })?.map((_, j) => (
              <div
                key={`${i}-${j}`}
                className={`w-full h-[2rem] rounded-sm shadow-sm cursor-pointer ${
                  i < data?.number_of_grids && j < data?.number_of_grids
                    ? (((hoverGrid ?? 0) === j && i <= (hoverGrid ?? 0)) ||
                        ((hoverGrid ?? 0) === i && j <= (hoverGrid ?? 0))) &&
                      (hoverGrid ?? 0) >= 2
                      ? "bg-red-400"
                      : ` bg-[#4953ff]`
                    : ((hoverGrid ?? 0) === j && i <= (hoverGrid ?? 0)) ||
                      ((hoverGrid ?? 0) === i && j <= (hoverGrid ?? 0))
                    ? " bg-[#4953ff80]"
                    : " bg-gray-100"
                } `}
                onMouseMove={() => setHoverGrid(i > j ? i : j)}
                onClick={() =>
                  setData({
                    ...data,
                    number_of_grids:
                      i === 4 || j === 4 ? 5 : i === 3 || j === 3 ? 4 : 3,
                  })
                }
              />
            ))
          )}
        </div>
      </div>

      <p className=' text-[1rem] font-medium'>Level {hoverGrid}</p>
      <div className=' w-full grid gap-1 grid-cols-3 pb-2'>
        {Array?.from({ length: 3 })?.map((_, i) => (
          <div
            key={i}
            className={` flex justify-center items-center rounded-md shadow-md ${
              ["Easy", "Medium", "Hard"][i]?.toLocaleLowerCase() === data?.level
                ? " bg-[#03052C] text-white"
                : " bg-[#FAFAFA]"
            } `}
            onClick={() =>
              setData({
                ...data,
                level: ["Easy", "Medium", "Hard"][i]?.toLocaleLowerCase(),
              })
            }>
            <p className=' font-bold'>{["Easy", "Medium", "Hard"][i]}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
};
