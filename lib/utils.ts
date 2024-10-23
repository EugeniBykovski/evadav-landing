import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getResults = (answers: string[]) => {
  if (answers[0] === 'Beginner') {
    return ['Peace Lily', 'Succulents', 'African Violet'];
  } else if (answers[0] === 'Intermediate') {
    return ['Fern', 'Dracaena', 'ZZ Plant'];
  } else {
    return ['Monstera', 'Orchid', 'Philodendron'];
  }
};
