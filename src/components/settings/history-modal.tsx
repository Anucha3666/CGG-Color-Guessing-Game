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
      {data?.map((item, i) => (
        <div key={i} className=''>
          <p className=' text-[1rem] font-medium'>{item[0]?.color}</p>
          <div className=' w-full flex gap-1 flex-wrap'>
            {item?.map((info, j) => (
              <div key={j} className=' grid grid-cols-3 gap-[1px]'>
                {Array.from({ length: 9 })?.map((_, z) => (
                  <div
                    key={z}
                    className=' w-[1rem] h-[1rem] rounded-sm'
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
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Modal>
  );
};
