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
      <div className="highscores__title">BEST RESULTS</div>
      <div className="highscores__categories">Place/Name/Result</div>
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
            {index + 1}. {score.name} {(score.result*100).toFixed(2)}%
          </div>
        );
      })}
    </div>
  );
};
