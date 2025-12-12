import { create } from "zustand";

type EstadoCelda = "agua" | "rastro" | "hundido";

interface GameState {
  tablero: EstadoCelda[][];
  disparoRealizado: number;
  size: number;
  submarino: { x: number; y: number };
  newBoard: (newSize: number) => void;
  disparar: (x: number, y: number) => void;
}
const generarTablero = (size: number): EstadoCelda[][] => {
  return Array(size)
    .fill(null)
    .map(() => Array(size).fill("agua"));
};

export const useGame = create<GameState>((set) => ({
  size: 5,
  tablero: generarTablero(5),
  disparoRealizado: 0,
  submarino: {
    x: Math.round(Math.random() * 5),
    y: Math.round(Math.random() * 5),
  },
  newBoard: (newSize: number) => {
    set({
      size: newSize,
      tablero: generarTablero(newSize),
      submarino: {
        x: Math.floor(Math.random() * newSize),
        y: Math.floor(Math.random() * newSize),
      },
    });
  },

  disparar: (x: number, y: number) => {
    set((state) => {
      const win = x === state.submarino.x && y === state.submarino.y;

      state.tablero[y][x] = win ? "hundido" : "agua";

      const nuevoSubmarino = win
        ? state.submarino
        : moveSubmarine(state.submarino, state.size);

      console.log("Submarino en:", nuevoSubmarino);
      return {
        tablero: [...state.tablero],
        disparoRealizado: state.disparoRealizado + 1,
      };
    });
  },
}));

export function ShootCounter() {
  const shoots = useGame((state) => state.disparoRealizado);
  return <h1> Disparos Realizados: {shoots} </h1>;
}
function moveSubmarine(submarino: { x: number; y: number }, size: number) {
  const movimientos = [];

  if (submarino.y > 0) movimientos.push({ x: submarino.x, y: submarino.y - 1 });
  if (submarino.y < size - 1)
    movimientos.push({ x: submarino.x, y: submarino.y + 1 });
  if (submarino.x > 0) movimientos.push({ x: submarino.x - 1, y: submarino.y });
  if (submarino.x < size - 1)
    movimientos.push({ x: submarino.x + 1, y: submarino.y });

  return movimientos[Math.floor(Math.random() * movimientos.length)];
}
