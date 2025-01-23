import { colorUtils } from "./color";
import { TSettings } from "@/types";

export type TGenerateGameDataProps = { settings: TSettings };

export const GenerateGameData = ({ settings }: TGenerateGameDataProps) => {
  const information = Array?.from({ length: 9 }, () => ({
    color: colorUtils?.Generate(),
    correct: Math.floor(
      Math.random() * (settings?.number_of_grids * settings?.number_of_grids)
    ),
    answer: null,
  }));

  return information;
};

export const gameUtils = {
  generate: GenerateGameData,
};
