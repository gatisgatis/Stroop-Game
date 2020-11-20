import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';
import './highscores.css';

export type HighScore = {
  name: string;
  result: number;
};

type Props = {
  cancelClick: () => void;
  scores: HighScore[];
};

export const HighScores: FC<Props> = ({ cancelClick, scores }) => {
  return (
    <div className="highscores-wrapper">
      HIGHSCORES
      <button
        type="button"
        onClick={cancelClick}
        className="highscores__cancel"
      >
        X
      </button>
      {scores.map((score, index) => {
        return (
          <div key={uuid()} className="highscore__line">
            {index + 1}. {score.name} {score.result}
          </div>
        );
      })}
    </div>
  );
};
