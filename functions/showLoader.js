// This function shows a loader whenever called and loader icon is animated and replaces the DOM element passed as a parameter when called.
// Made this function as an ASYNCHRONOUS function and returning thr promise from it deliberately so that states in UI and further function calls can be awaited.
// This function accepts following arguments:
// 1. replacingElement - This will be the DOM element which will be raplced with loaderElement.
// 2. loaderElement -  This will be the actual loader Element from DOM which will be diplayer and animated. This argument is kept because dimensions and few other specifics will be different for a loader in different places and it's already in markup and css.
// 3. duration (in miliseconds) - This will be the duration of loader to be shown and replaced element will be replaced on duration completion.

// Imports
import { lockButtons, unlockButtons } from './index.js';

// Function
const showLoader = async (replacingElement, loaderElement, duration) => {
  lockButtons();
  const logoElement = document.querySelector('.logo-uploaded');
  let logoElementPrevDisplayValue = null;
  if (logoElement) {
    // getting previous set display value.
    logoElementPrevDisplayValue =
      window.getComputedStyle(logoElement).display === 'none'
        ? 'block'
        : window.getComputedStyle(logoElement).display;

    logoElement.style.display = 'none';
  }
  // getting previous set display value.
  const replacingElementPrevDisplayValue =
    window.getComputedStyle(replacingElement).display === 'none'
      ? 'block'
      : window.getComputedStyle(replacingElement).display;
  const loaderElementPrevDisplayValue =
    window.getComputedStyle(loaderElement).display === 'none'
      ? 'flex'
      : window.getComputedStyle(loaderElement).display;

  // Updating DOM for showing loader.
  replacingElement.style.display = 'none';
  loaderElement.style.display = loaderElementPrevDisplayValue;
  //   function return
  return new Promise((resolve) => {
    setTimeout(() => {
      replacingElement.style.display = replacingElementPrevDisplayValue;
      loaderElement.style.display = 'none';
      logoElement
        ? (logoElement.style.display = logoElementPrevDisplayValue)
        : null;
      unlockButtons();
      resolve();
    }, duration);
  });
};

export { showLoader };
