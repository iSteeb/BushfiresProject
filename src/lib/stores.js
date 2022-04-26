import { writable } from 'svelte/store';

export const currentState = writable({
  appState: 0, // 0 == uninitialized; 1 == introduction; 2 == game; 3 == end
  gameState: 0, // index of the current scenario
  showInfoPanel: false,
  showMenu: true,
  servedAlerts: [], // array of alerts presented to the user
  servedErrors: [] // array of errors presented to the user
});

export const defaultState = {
  appState: 0,
  gameState: 0,
  showInfoPanel: false,
  showMenu: true,
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
    landline: 'similar but different script'
  },
  {
    firesWebsite: 'second rich text',
    socials: 'second rich text?',
    firesApp: {
      location: 'second location',
      text: 'second text'
    },
    radio: 'second script',
    landline: 'second similar but different script'
  }
];
