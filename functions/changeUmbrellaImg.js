// Imports
import { getUmbrellaImgUrl } from './index.js';

// DOM Object Selectors
const umbrellaImg = document.getElementById('umbrella-preview-img');

// This function will change the Umbrella Image as per user input
const changeUmbrellaImg = (colorOptionsData, colorName) => {
  // Finding the exact color data from the array of colorOptionsData
  const { imgUrl } = colorOptionsData.find(
    (item) => item.colorName === colorName
  );

  // Updating DOM
  umbrellaImg.setAttribute('src', getUmbrellaImgUrl(imgUrl, colorName));
};

export { changeUmbrellaImg };
