// This function will load the initial state of app like umbrella Image, color options etc.
// Initial state can easily be changed just by changing the initialColorName value to a differetn color string in index.js module.

// Imports
import { changeAppTheme } from './changeAppTheme.js';
import { getUmbrellaImgUrl } from './getUmbrellaImgUrl.js';

// DOM Selectors
const umbrellaImgElement = document.querySelector('.preview-img-wrapper');

const initialAppState = (colorOptionsData, initialColorName) => {
  const { colorName, imgUrl } = colorOptionsData.find(
    (item) => item.colorName === initialColorName
  );

  umbrellaImgElement.style.display = 'block';
  umbrellaImgElement.src = getUmbrellaImgUrl(imgUrl, colorName);
  changeAppTheme(colorOptionsData, initialColorName);
};

export { initialAppState };
