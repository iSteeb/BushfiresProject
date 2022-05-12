import { writable } from 'svelte/store';

export const speech = new SpeechSynthesisUtterance();
speech.lang = 'en-AU';
speech.rate = 0.85;

export const currentState = writable({
  appState: 0, // 0 == uninitialized; 1 == introduction; 2 == game; 3 == end
  gameState: 0, // index of the current scenario
  showMenu: true,
  overlayComponent: 0,
  servedAlerts: [], // array of alerts presented to the user
  nonfunctionalComponents: [2] // array of broken components
});

export const defaultState = {
  appState: 0,
  gameState: 0,
  showMenu: true,
  overlayComponent: 0,
  servedAlerts: [],
  nonfunctionalComponents: [] // array of broken components
};

export const finalTime = writable('00:00:00');

// REF: https://esa.act.gov.au/emergency-warning-orroral-valley-fire
export const alerts = [
  {
    firesWebsite: 'rich text',
    socials: 'rich text?',
    firesApp: {
      location: 'location',
      text: 'text'
    },
    radio: 'script',
    landline:
      'There is active fire at the Orroral Valley Fire, and community members in Tharwa Village, Boboyan Road, Apollo Road, Top Naas Road and Nass Road need to remain vigilant.',
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
    landline:
      'People in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly.',
    time: 'January 27, 2020 16:33:00'
  }
];
