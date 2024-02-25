import type { Choice } from "./choice";

export interface Question {
  id: number;
  question: string;
  choices: Choice[];
}
