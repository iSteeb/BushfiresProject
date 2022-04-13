import { writable } from 'svelte/store';

export const state = writable(0); // 0 == uninitialized; 1 == introduction; 2 == game; 3 == end
export const scenario = writable([]);
