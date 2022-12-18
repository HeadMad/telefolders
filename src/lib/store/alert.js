import { writable } from 'svelte/store';

const {set, update, subscribe} = writable();

export default {
  update,
  subscribe,
  set: (value) => typeof value === 'string'
};