"use cline";

import { FC } from "react";
import { Modal } from "../common/modal";
import { cookieUtils } from "@/utils/cookie";
import { TGameData } from "@/types";

export type HistoryModalProps = {
  open?: boolean;
  onCancel?: () => void;
};

export const HistoryModal: FC<HistoryModalProps> = ({ open, onCancel }) => {
  const data = (
    (cookieUtils?.get("HISTORY_GAME") ?? []) as TGameData[][]
  )?.filter((item) => (item?.length ?? 0) !== 0);

  return (
    <Modal {...{ open, onCancel }}>
      <div className='flex justify-between w-full'>
        <p className=' text-lg font-bold'>History</p>
      </div>
      <div className=' w-full !h-[80vh] flex flex-col overflow-auto'>
        {data?.map((item, i) => (
          <div key={i} className=' border-b-2 pb-2'>
            <div className='flex gap-2 py-1 items-center justify-between font-medium text-nowrap'>
              <p className=' text-red-600 '>
                Lose #{item?.filter((info) => info?.answer !== null)?.length}
              </p>
              <div className='flex gap-2'>
                <p className='text-xs'>Number of grids: 3 X 3</p>
                <p className='text-xs'>Level: Normal</p>
              </div>
            </div>
            <div className=' w-full flex gap-1 flex-wrap'>
              {item?.map((info, j) => (
                <div
                  key={j}
                  className={
                    " w-[3rem] h-[3rem] grid grid-cols-3 rounded-sm gap-[1px]"
                  }
                  style={{
                    border:
                      item?.filter((info) => info?.answer !== null)?.length -
                        1 ===
                      j
                        ? "1px solid #FF0000"
                        : "",
                  }}>
                  {Array.from({ length: 9 })?.map((_, z) => (
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
                          item?.filter((info) => info?.answer !== null)
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
