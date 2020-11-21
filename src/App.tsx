/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Settingz from './components/settings/settings';
import { HighScores, HighScore } from './components/highscores/highscores';
import { Instructions } from './components/instructions/instructions';
import { EndPopUp } from './components/end-pop-up/end-pop-up';
import logo from './logo.png';
import './flexbox-grid.css';
import {
  Configs,
  defaultConfigs,
  ALL_KEYS,
  ALL_WORDS,
  ALL_COLORS,
  GameData,
  defaultGameData,
} from './typesAndData';

const convertKeysToColors = () => {
  const convertedArr = pressedKeysOrBtns.map((key) => {
    let index: number;
    key.length === 1
      ? (index = ALL_KEYS.indexOf(key))
      : (index = ALL_COLORS.indexOf(key));
    return ALL_COLORS[index];
  });
  return convertedArr;
};

const gameData: GameData[] = [];
const buttonInfo: string[] = [];
let roundCounter: number = 0;
const pressedKeysOrBtns: string[] = [];
let pressedKeyOrBtn: string = '-';
let finalResult: number = 0;
let helper = 0;

const highScores: HighScore[] = [];
let newestScore: HighScore;

if (localStorage.getItem('ls-highScores')) {
  // @ts-ignore
  highScores.push(...JSON.parse(localStorage.getItem('ls-highScores')));
}

type Sections = {
  highScoresTablo: boolean;
  settingsWindow: boolean;
  introGifwindow: boolean;
  endGameResults: boolean;
  instructionsWindow: boolean;
  preGameAnimation: boolean;
};

const defaultSections: Sections = {
  highScoresTablo: false,
  settingsWindow: false,
  introGifwindow: true,
  endGameResults: false,
  instructionsWindow: false,
  preGameAnimation: false,
};

let activeTimeOut: NodeJS.Timeout;

const App = () => {
  const [configs, setConfigs] = useState<Configs>(defaultConfigs);
  const [wordToShow, setWordToShow] = useState<GameData>(defaultGameData);
  const [gameSection, setGameSection] = useState<Sections>(defaultSections);
  const [gameStage, setGameStage] = useState<
    'before' | 'pre-active' | 'active' | 'end'
  >('before');

  // const afterRoundAnimationHandler = () => {
  //   pressedKeyOrBtn === gameData[roundCounter - 1].color ||
  //   pressedKeyOrBtn ===
  //     ALL_KEYS[ALL_COLORS.indexOf(gameData[roundCounter - 1].color)]
  //     ? (roundEffectInfo = 'Perfect!')
  //     : (roundEffectInfo = 'Fail!');
  //   setRoundEffect(true);
  //   setTimeout(() => {
  //     setRoundEffect(false);
  //   }, 500);
  // };

  useEffect(() => {
    if (configs.gamemode === 'keyboard') {
      document.body.addEventListener('keydown', (event) => {
        pressedKeyOrBtn = event.key;
      });
    }
    return () => {
      document.body.removeEventListener('keydown', (event) => {
        pressedKeyOrBtn = event.key;
      });
    };
  }, [configs.gamemode]);

  // Aizpilda datu masīvu, kas zīmēs spēli
  useEffect(() => {
    console.log(configs);
    if (gameStage !== 'pre-active') return;
    roundCounter = 0;
    for (let i = 0; i < configs.roundCount; i += 1) {
      const wordSelector = Math.floor(Math.random() * ALL_WORDS.length);
      const colorSelector = Math.floor(Math.random() * configs.colorCount);
      gameData[i] = {
        color: ALL_COLORS[colorSelector],
        word: ALL_WORDS[wordSelector],
      };
    }
    for (let i = 0; i < configs.colorCount; i += 1) {
      buttonInfo[i] = ALL_COLORS[i];
    }
  }, [configs, gameStage]);

  // Nodrošina spēles loģiku un Ingame Efektus
  useEffect(() => {
    // Nodrošina, ka šis useEffect NEnostrādās divas reizes uz MOUNT
    if (helper < 1) {
      helper = 1;
      return;
    }
    if (roundCounter >= configs.roundCount - 1) {
      activeTimeOut = setTimeout(() => {
        pressedKeysOrBtns[roundCounter] = pressedKeyOrBtn;
        pressedKeyOrBtn = '-';
        console.log(pressedKeyOrBtn, pressedKeysOrBtns, gameData, buttonInfo);
        finalResult = calculateGameResult();
        setGameStage('end');
        setGameSection({
          ...gameSection,
          endGameResults: true,
        });
      }, configs.delay * 1000);
      return;
    }
    activeTimeOut = setTimeout(() => {
      roundCounter += 1;
      pressedKeysOrBtns[roundCounter - 1] = pressedKeyOrBtn;
      pressedKeyOrBtn = '-';
      setWordToShow(gameData[roundCounter]);
    }, configs.delay * 1000);
  }, [wordToShow]);

  const colorButtonsClickHandler = (btnColor: string) => {
    pressedKeyOrBtn = btnColor;
  };

  const calculateGameResult = () => {
    const playersColors = [...convertKeysToColors()];
    const gameColors = gameData.map((round) => round.color);
    const succes = gameColors.filter(
      (color, index) => color === playersColors[index]
    ).length;
    return succes / configs.roundCount;
  };

  const configSubmitFormHandler = (
    event: React.FormEvent<HTMLFormElement>,
    values: Configs
  ) => {
    event.preventDefault();
    setConfigs({
      delay: values.delay,
      roundCount: values.roundCount,
      colorCount: values.colorCount,
      gamemode: values.gamemode,
      language: values.language,
      dificulty: values.dificulty,
      sound: values.sound,
    });
    setGameSection({ ...gameSection, settingsWindow: false });
  };

  const bigBtnClickHandler = () => {
    if (gameStage !== 'active') {
      // Sākas animācija neliela
      setGameSection({
        ...gameSection,
        introGifwindow: false,
        preGameAnimation: true,
      });
      setGameStage('pre-active');
      setTimeout(() => {
        setWordToShow(gameData[0]);
        setGameStage('active');
        setGameSection({
          ...gameSection,
          preGameAnimation: false,
          introGifwindow: false,
        });
      }, 2000);
    } else {
      setGameStage('before');
      clearTimeout(activeTimeOut);
    }
  };

  const saveResult = (name: string) => {
    const checkedName = name || 'No Name';
    newestScore = { name: checkedName, result: finalResult };
    highScores.push(newestScore);
    highScores.sort((prev, next) => {
      if (prev.result > next.result) return -1;
      return 1;
    });
    localStorage.setItem('ls-highScores', '');
    setGameSection({ ...gameSection, endGameResults: false, highScoresTablo: true });
  };

  return (
    <div className="App">
      <header>
        <div className="container container-fluid header">
          <div className="row">
            <div className="logo-overlay" />
            <div className="col-xs-12 col-md-4 flexbox center-xs">
              <div className="logo-wrapper">
                <img src={logo} alt="LOGO" className="logo" />
              </div>
            </div>
            <div className="col-xs-12 col-md-8 flexbox center-xs end-md">
              <div className="header__button-wrapper">
                <button
                  type="button"
                  className="header__button howtoplay-button"
                  onClick={() =>
                    setGameSection({ ...gameSection, instructionsWindow: true })
                  }
                >
                  How To Play
                </button>
                <button
                  type="button"
                  className="header__button results-button"
                  onClick={() =>
                    setGameSection({ ...gameSection, highScoresTablo: true })
                  }
                >
                  High Scores
                </button>
                <button
                  type="button"
                  disabled={
                    gameStage === 'active' || gameStage === 'pre-active'
                  }
                  className="header__button settings-button"
                  onClick={() =>
                    setGameSection({ ...gameSection, settingsWindow: true })
                  }
                >
                  Settings
                </button>
              </div>
            </div>
          </div>
          {gameSection.settingsWindow && (
            <div className="background">
              <Settingz
                nowValues={configs}
                onSubmit={configSubmitFormHandler}
                cancelClick={() =>
                  setGameSection({ ...gameSection, settingsWindow: false })
                }
              />
            </div>
          )}
          {gameSection.instructionsWindow && (
            <div className="background">
              <Instructions
                cancelClick={() =>
                  setGameSection({ ...gameSection, instructionsWindow: false })
                }
              />
            </div>
          )}
          {gameSection.highScoresTablo && (
            <div className="background">
              <HighScores
                cancelClick={() =>
                  setGameSection({ ...gameSection, highScoresTablo: false })
                }
                scores={highScores}
                newestScore={newestScore}
              />
            </div>
          )}
          {gameSection.endGameResults && (
            <div className="background">
              <EndPopUp
                result={finalResult}
                keysOrBtns={configs.gamemode}
                roundCount={configs.roundCount.toString()}
                dificulty={configs.dificulty}
                colorCount={configs.colorCount.toString()}
                saveClick={saveResult}
                cancelClick={() =>
                  setGameSection({ ...gameSection, endGameResults: false })
                }
              />
            </div>
          )}
        </div>
      </header>
      <section>
        <div className="container container-fluid main">
          {gameSection.introGifwindow && gameStage === 'before' && (
            <div className="intro-animation">
              <span style={{ color: 'red' }}>S</span>
              <span style={{ color: 'green' }}>T</span>
              <span style={{ color: 'orange' }}>R</span>
              <span style={{ color: 'yellow' }}>O</span>
              <span style={{ color: 'blue' }}>O</span>
              <span style={{ color: 'pink' }}>P</span>
            </div>
          )}
          <div className="row">
            <div className="col-xs-12">
              {gameStage === 'active' && (
                <div className="round-counter">
                  Round: {roundCounter + 1}/{configs.roundCount}
                </div>
              )}
            </div>
          </div>
          <div className="big-btn-wrapper flexbox center-xs">
            <button
              type="button"
              className="big-btn"
              disabled={gameStage === 'pre-active'}
              onClick={bigBtnClickHandler}
            >
              {gameStage === 'pre-active' || gameStage === 'active'
                ? 'Cancel Game'
                : 'Start New Game'}
            </button>
          </div>
          <div className="game-window">
            {(gameStage === 'before' || gameStage === 'end') &&
              !gameSection.introGifwindow && (
                <div className="game-window-logo">
                  <span style={{ color: 'red' }}>S</span>
                  <span style={{ color: 'green' }}>T</span>
                  <span style={{ color: 'orange' }}>R</span>
                  <span style={{ color: 'yellow' }}>O</span>
                  <span style={{ color: 'blue' }}>O</span>
                  <span style={{ color: 'pink' }}>P</span>
                </div>
              )}
            {gameSection.preGameAnimation && (
              <div className="pre-game-animation">GO</div>
            )}
            {gameStage === 'active' && (
              <div
                className="time-effect-line"
                style={{
                  animationDuration: `${configs.delay}s`,
                  animationIterationCount: configs.roundCount,
                }}
              />
            )}
            <div className="game-word" style={{ color: wordToShow.color }}>
              {gameStage === 'active' && wordToShow.word}
            </div>
          </div>
          <div className="btns-keys-wrapper1">
            {gameStage === 'active' && (
              <div className="row btns-keys-wrapper2">
                {configs.gamemode === 'buttons' &&
                  buttonInfo.slice(0, configs.colorCount).map((color) => {
                    return (
                      <div
                        className="col-xs-4 col-md-3 flexbox center-xs"
                        key={uuid()}
                      >
                        <button
                          className="play-btn"
                          type="button"
                          onClick={() => colorButtonsClickHandler(color)}
                          style={{
                            backgroundColor:
                              configs.dificulty === 'easy' ? color : 'white',
                          }}
                        >
                          {color.toUpperCase()}
                        </button>
                      </div>
                    );
                  })}
                {configs.gamemode === 'keyboard' &&
                  buttonInfo
                    .slice(0, configs.colorCount)
                    .map((color, index) => {
                      return (
                        <div
                          className="col-xs-4 col-md-3 flexbox center-xs"
                          key={uuid()}
                        >
                          <h3
                            className="instruction"
                            style={{ backgroundColor: color }}
                          >
                            {ALL_KEYS[index]}
                          </h3>
                        </div>
                      );
                    })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
