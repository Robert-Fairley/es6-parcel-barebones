import main from './App'

/**
 * EL
 *
 * Global constant containing references to
 * used DOM elements.
 *
 * In this case, the HTML file contains only
 * one visible element: `<main>`
 */
const EL = {
  root: document.querySelector('#root'),
};
/**
 * Provide the browser window a reference
 * to the `EL` object. This way, it can be
 * referenced from any other component or
 * the browser console for debugging, if
 * needed.
 */
window.EL = EL;

/**
 * Call the `main` function when all DOM content has loaded.
 */
window.onload = e => main(e, EL.root);
