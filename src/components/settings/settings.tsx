/* eslint-disable react/jsx-curly-newline */
import React, { FC, useState } from 'react';
import './settings.css';
import { v4 as uuid } from 'uuid';
import { Configs, defaultConfigs } from '../../typesAndData';

export const SELECT_ROUND_COUNT: number[] = [];
for (let i = 1; i < 101; i++) {
  SELECT_ROUND_COUNT.push(i);
}

export const SELECT_DELAY: number[] = [];
for (let i = 1; i < 11; i++) {
  SELECT_DELAY.push(i / 2);
}

export const SELECT_COLOR_COUNT: number[] = [];
for (let i = 1; i < 11; i++) {
  SELECT_COLOR_COUNT.push(i);
}

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>, values: Configs) => void;
  cancelClick: () => void;
  nowValues: Configs;
};

const Settingz: FC<Props> = ({ onSubmit, cancelClick, nowValues }) => {
  const [formValues, setFormValues] = useState<Configs>(nowValues);

  return (
    <div className="settings-wrapper">
      <div className="settings__title">SETTINGS</div>
      <form
        action="submit"
        onSubmit={(event) => onSubmit(event, formValues)}
        className="settings__form"
      >
        <label htmlFor="round-count" className="settings__label">
          ROUND COUNT:
          <select
            className="settings__select"
            name="round-count"
            id="round-count"
            value={formValues.roundCount}
            onChange={(event) =>
              setFormValues({
                ...formValues,
                roundCount: parseInt(event.target.value, 10),
              })
            }
          >
            {SELECT_ROUND_COUNT.map((num) => {
              return (
                <option key={uuid()} value={num.toString()}>
                  {num}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="color_count" className="settings__label">
          COLOR COUNT:
          <select
            className="settings__select"
            name="color_count"
            id="color_count"
            value={formValues.colorCount}
            onChange={(event) =>
              setFormValues({
                ...formValues,
                colorCount: parseInt(event.target.value, 10),
              })
            }
          >
            {SELECT_COLOR_COUNT.map((num) => {
              return (
                <option key={uuid()} value={num.toString()}>
                  {num}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="delay" className="settings__label">
          DELAY:
          <select
            className="settings__select"
            name="delay"
            id="delay"
            value={formValues.delay}
            onChange={(event) =>
              setFormValues({
                ...formValues,
                delay: parseFloat(event.target.value),
              })
            }
          >
            {SELECT_DELAY.map((num) => {
              return (
                <option key={uuid()} value={num.toString()}>
                  {num.toFixed(1)} s
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="gamemode" className="settings__label">
          GAME MODE:
          <select
            className="settings__select"
            name="gamemode"
            id="gamemode"
            value={formValues.gamemode}
            onChange={(event) =>
              setFormValues({
                ...formValues,
                // @ts-ignore
                gamemode: event.target.value,
              })
            }
          >
            <option value="buttons">Buttons</option>
            <option value="keyboard">Keyboard</option>
          </select>
        </label>
        <label htmlFor="lang" className="settings__label">
          LANGUAGE:
          <select
            disabled
            className="settings__select"
            name="lang"
            id="lang"
            value={formValues.language}
            onChange={(event) =>
              setFormValues({
                ...formValues,
                // @ts-ignore
                language: event.target.value,
              })
            }
          >
            <option value="lv">LV</option>
            <option value="en">EN</option>
          </select>
        </label>
        <label htmlFor="dif" className="settings__label">
          DIFICULTY:
          <select
            className="settings__select"
            name="dif"
            id="dif"
            value={formValues.dificulty}
            onChange={(event) =>
              setFormValues({
                ...formValues,
                // @ts-ignore
                dificulty: event.target.value,
              })
            }
          >
            <option value="easy">EASY</option>
            <option value="hard">HARD</option>
          </select>
        </label>
        <label htmlFor="sound" className="settings__label">
          SOUND:
          <select
            className="settings__select"
            name="sound"
            id="sound"
            value={formValues.sound}
            onChange={(event) =>
              setFormValues({
                ...formValues,
                // @ts-ignore
                sound: event.target.value,
              })
            }
          >
            <option value="on">ON</option>
            <option value="off">OFF</option>
          </select>
        </label>
        <button type="submit" className="settings__button">
          OK
        </button>
        <button
          type="button"
          onClick={cancelClick}
          className="settings__cancel"
        >
          X
        </button>
        <button
          type="button"
          onClick={() => setFormValues(defaultConfigs)}
          className="settings__button"
        >
          Restore Defaults
        </button>
      </form>
    </div>
  );
};

export default Settingz;
