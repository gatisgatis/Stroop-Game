export type Configs = {
  delay: number;
  colorCount: number;
  gamemode: 'buttons' | 'keyboard';
  roundCount: number;
  language: 'en' | 'lv';
  dificulty: 'easy' | 'hard';
  sound: 'on' | 'off';
};

export const defaultConfigs: Configs = {
  delay: 2,
  colorCount: 4,
  gamemode: 'buttons',
  roundCount: 10,
  language: 'en',
  dificulty: 'easy',
  sound: 'off'
};

export const ALL_COLORS = [
  'red',
  'blue',
  'green',
  'yellow',
  'orange',
  'grey',
  'brown',
  'purple',
  'coral',
  'pink',
];

export const ALL_WORDS = [...ALL_COLORS];

export const ALL_KEYS = ['a', 's', 'd', 'w', 'c', '4', '5', '6', '8', '1'];

export type GameData = {
  color: string;
  word: string;
};

export const defaultGameData = {
  color: '',
  word: '',
};


