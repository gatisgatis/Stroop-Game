/* eslint-disable jsx-a11y/no-autofocus */
import React, { FC, useState } from 'react';
import './end-pop-up.css';

type Props = {
  cancelClick: () => void;
  result: number;
  keysOrBtns: string;
  roundCount: string;
  dificulty: string;
  colorCount: string;
  saveClick: (name: string) => void;
};

export const EndPopUp: FC<Props> = ({
  cancelClick,
  saveClick,
  result,
  keysOrBtns,
  roundCount,
  dificulty,
  colorCount,
}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="end-pop-up-wrapper">
      <button
        type="button"
        onClick={cancelClick}
        className="end-pop-up__cancel"
      >
        X
      </button>
      <div className="popup__title">Game Result</div>
      <div className='popup__content'> Game Mode: {keysOrBtns}</div>
      <div className='popup__content'> Round Count: {roundCount}</div>
      <div className='popup__content'> Total Colors: {colorCount}</div>
      <div className='popup__content'> Dificulty: {dificulty}</div>
      <div className='popup__content'> Your scored {(result*100).toFixed(2)}%! Congrats!</div>
      <div className='popup__content'> </div>
      <div className='popup__input-label'>Enter Your name to save your score</div>
      <input
        className="popup__input"
        type="text"
        value={inputValue}
        placeholder="Enter Your Name"
        autoFocus
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={() => saveClick(inputValue)} className="popup__button">
        Save Result
      </button>
      <button
        type="button"
        onClick={cancelClick}
        className="popup__button"
      >
        Return
      </button>
    </div>
  );
};
