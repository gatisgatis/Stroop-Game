import React, { FC } from 'react';
import './instructions.css';

type Props = {
  cancelClick: () => void;
};

export const Instructions: FC<Props> = ({ cancelClick }) => {
  return (
    <div className="instructions-wrapper">
      INSTRUKCIJAS
      <button type="button" onClick={cancelClick} className='instructions__cancel'>
        X
      </button>
    </div>
  );
};
