import { create } from "zustand";

// interface Tiro {
//   coordenada: string;
//   resultado: String;
// }

// interface Coord {
//   x: number;
//   y: number;
// }

interface GameState {
  disparoRealizado: number;

  disparar: () => void;
}

export const useGame = create<GameState>((set) => ({
  boardSize: 5,
  cells: Array(25).fill(null),
  cellSelect: null,

  setSize: (size) => {
    const totalCells = size * size;
    set({
      boardSize: size,
      cells: Array(totalCells).fill(null),
      cellSelect: null,
    });
  },

  disparoRealizado: 0,
  disparar: () =>
    set((state) => ({ disparoRealizado: state.disparoRealizado + 1 })),
}));

export function ShootCounter() {
  const shoots = useGame((state) => state.disparoRealizado);
  return <h1> Disparos Realizados: {shoots} </h1>;
}
