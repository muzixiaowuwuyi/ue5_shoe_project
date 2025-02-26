// src/state/state.js
import { proxy } from 'valtio';

// states
export const state = proxy({
  current: null,
  items: {
    laces: '#fff',
    mesh: '#fff',
    caps: '#fff',
    inner: '#fff',
    sole: '#fff',
    stripes: '#fff',
    band: '#fff',
    patch: '#fff',
  },
  renderedImages: [],
  highResImages: [],
});
