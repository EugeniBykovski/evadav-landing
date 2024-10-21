'use client';

import { FC } from 'react';
import { ResultProps } from './types';

const Result: FC<ResultProps> = ({ answers }) => {
  const getResults = () => {
    if (answers[0] === 'Новичок') {
      return ['Спатифиллум', 'Суккуленты', 'Фиалка'];
    } else if (answers[0] === 'Средний уровень') {
      return ['Папоротник', 'Драцена', 'Замиокулькас'];
    } else {
      return ['Монстера', 'Орхидея Фаленопсис', 'Филодендрон'];
    }
  };

  const resultPlants = getResults();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Ваши результаты:</h2>
      <ul className="list-disc ml-5">
        {resultPlants.map((plant, index) => (
          <li key={index}>{plant}</li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
