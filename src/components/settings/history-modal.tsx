"use cline";

import { FC, useEffect, useState } from "react";
import { Modal } from "../common/modal";
import { cookieUtils } from "@/utils/cookie";
import { THistory } from "@/types";

export type HistoryModalProps = {
  open?: boolean;
  onCancel?: () => void;
};

export const HistoryModal: FC<HistoryModalProps> = ({ open, onCancel }) => {
  const [data, setData] = useState<THistory[]>([]);

  useEffect(() => {
    const handleClick = () => {
      const req = ((cookieUtils?.get("HISTORY") ?? []) as THistory[])?.filter(
        (item) => (item?.data?.length ?? 0) !== 0
      );
      setData(req as THistory[]);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Modal layoutId='history-modal' {...{ open, onCancel }}>
      <div className='flex justify-between w-full'>
        <p className=' text-lg font-bold'>History</p>
      </div>
      {(data?.length ?? 0) === 0 && (
        <div className='w-full py-4 flex justify-center items-center'>
          <p className=' font-bold text-gray-400'>
            --- No play history found ---
          </p>
        </div>
      )}
      <div className=' w-full h-min !max-h-[80vh] flex flex-col overflow-auto'>
        {data?.map((item, i) => (
          <div key={i} className=' border-b-2 pb-2'>
            <div className='flex gap-2 py-1 items-center justify-between font-medium text-nowrap'>
              {item?.data?.filter((info) => info?.answer !== null)?.length ===
              0 ? (
                <p className=' text-yellow-500 '>Win !</p>
              ) : (
                <p className=' text-red-600 '>
                  Lose #
                  {item?.data?.filter((info) => info?.answer !== null)?.length}
                </p>
              )}
              <div className='flex gap-2 items-center'>
                <p className='text-xs'>
                  Number of grids: {item?.number_of_grids} X{" "}
                  {item?.number_of_grids}
                </p>
                <p className='text-xs'>
                  Level:{" "}
                  {`${item?.level
                    ?.slice(0, 1)
                    ?.toLocaleUpperCase()}${item?.level?.slice(1)}`}
                </p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className=' text-gray-400 hover:text-red-600 cursor-pointer hover:rotate-12 hover:scale-105 active:scale-95'
                  onClick={() => {
                    cookieUtils?.set(
                      "HISTORY",
                      data?.slice(0, i)?.concat(data?.slice(i + 1))
                    );
                    setData(data?.slice(0, i)?.concat(data?.slice(i + 1)));
                  }}>
                  <path d='M3 6h18' />
                  <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
                  <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
                  <line x1='10' x2='10' y1='11' y2='17' />
                  <line x1='14' x2='14' y1='11' y2='17' />
                </svg>
              </div>
            </div>
            <div className=' w-full flex gap-1 flex-wrap'>
              {item?.data?.map((info, j) => (
                <div
                  key={j}
                  className={" w-[3rem] h-[3rem] grid rounded-sm gap-[1px]"}
                  style={{
                    gridTemplateColumns: `repeat(${item?.number_of_grids}, 1fr)`,
                    border:
                      item?.data?.filter((info) => info?.answer !== null)
                        ?.length -
                        1 ===
                      j
                        ? "1px solid #FF0000"
                        : "",
                  }}>
                  {Array.from({
                    length: item?.number_of_grids * item?.number_of_grids,
                  })?.map((_, z) => (
                    <div
                      key={z}
                      className=' w-full h-full rounded-sm'
                      style={{
                        background: `${info?.color}${
                          [
                            "AD",
                            "B0",
                            "B2",
                            "B4",
                            "B6",
                            "B8",
                            "BA",
                            "BB",
                            "BD",
                            "FF",
                          ][info?.answer === z ? z : 9]
                        }`,
                        border:
                          item?.data?.filter((info) => info?.answer !== null)
                            ?.length -
                            1 ===
                          j
                            ? info?.answer === z
                              ? "1px solid #FF0000"
                              : ""
                            : "",
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};
