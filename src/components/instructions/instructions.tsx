import React, { FC } from 'react';
import './instructions.css';

type Props = {
  cancelClick: () => void;
};

export const Instructions: FC<Props> = ({ cancelClick }) => {
  return (
    <div className="instructions-wrapper">
      <div className="instr__title">INSTRUCTIONS</div>
      <div className="instr__text">Press button on screen or key on keyboard to win the game! Good Luck!</div>
      <button type="button" onClick={cancelClick} className='instructions__cancel'>
        X
      </button>
    </div>
  );
};
