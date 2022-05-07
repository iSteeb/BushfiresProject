import { writable } from 'svelte/store';

export const exclude = writable();

export const currentState = writable({
  appState: 0, // 0 == uninitialized; 1 == introduction; 2 == game; 3 == end
  gameState: 0, // index of the current scenario
  showMenu: true,
  overlayComponent: 0,
  servedAlerts: [], // array of alerts presented to the user
  servedErrors: [] // array of errors presented to the user
});

export const defaultState = {
  appState: 0,
  gameState: 0,
  showMenu: true,
  overlayComponent: 0,
  servedAlerts: [],
  servedErrors: []
};

export const errors = ['no landline', 'no internet', 'no radio', 'no signal'];

export const alerts = [
  {
    firesWebsite: 'rich text',
    socials: 'rich text?',
    firesApp: {
      location: 'location',
      text: 'text'
    },
    radio: 'script',
    landline: 'similar but different script',
    time: 'January 27, 2020 14:32:00'
  },
  {
    firesWebsite: 'second rich text',
    socials: 'second rich text?',
    firesApp: {
      location: 'second location',
      text: 'second text'
    },
    radio: 'second script',
    landline: 'second similar but different script',
    time: 'January 27, 2020 16:33:00'
  }
];
