import { writable } from 'svelte/store';

export const currentState = writable({
  appState: 2, // 0 == uninitialized; 1 == introduction; 2 == game; 3 == end
  gameState: -1, // index of the current scenario
  showMenu: true,
  glow: 'clickableWithGlow',
  overlayComponent: 0,
  nonfunctionalComponents: [], // array of broken components
  servedAlertsIndexes: [], // array of alerts
  roadsBlocked: false
});

export const defaultState = {
  appState: 0,
  gameState: -1,
  showMenu: true,
  glow: 'clickableWithGlow',
  overlayComponent: 0,
  nonfunctionalComponents: [],
  servedAlertsIndexes: [],
  roadsBlocked: false
};

export const DISPLAYLIMIT = 5;
export const THRESHOLD = 0.75;
export const AUDIOSETTINGS = {
  lang: 'en-AU',
  loop: true,
  volume: 0.25
};

export const finalTime = writable('00:00:00');

// REF: https://esa.act.gov.au/emergency-warning-orroral-valley-fire
export const alerts = [
  {
    time: 'January 27, 2020 14:32:00',
    level: 'advice',
    threat:
      'There is currently no immediate threat to properties in Canberra suburbs.',
    fullText: 'long text 1 here',
    shortText: 'short text 1 here'
  },
  {
    time: 'January 27, 2020 16:33:00',
    level: 'watch and act',
    threat: 'The fire is out of control.',
    fullText: 'long text 2 here',
    shortText: 'short text 2 here'
  },
  {
    time: 'January 29, 2020 13:37:00',
    level: 'emergency warning',
    threat: 'SEEK SHELTER IMMEDIATELY. It is now too late to leave.',
    fullText: 'long text 3 here',
    shortText: 'short text 3 here'
  },
  {
    time: '',
    level: '',
    threat: '',
    fullText: '',
    shortText: ''
  }
];
