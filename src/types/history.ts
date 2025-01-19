import { TGameData } from "./game";

export type THistory = {
  number_of_grids: number;
  level: "normal" | "easy" | "hard";
  data: TGameData[];
};
