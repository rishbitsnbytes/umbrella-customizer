// This functions accepts following arguments:-
// 1. colorOptionsData - the fetched data array of objects containing color option details.
// 2. colorName -  the name of the color in smallcase from available color options to change the theme to this color.

// DOM Object Selectors
const root = document.querySelector(':root');

// Change App theme function
const changeAppTheme = (colorOptionsData, colorName) => {
  // Finding the exact color data from the array of colorOptionsData
  const { primaryColor, secondaryColor, tertiaryColor } = colorOptionsData.find(
    (item) => item.colorName === colorName
  );

  // Updating DOM
  root.style.setProperty('--color-primary', primaryColor);
  root.style.setProperty('--color-secondary', secondaryColor);
  root.style.setProperty('--color-tertiary', tertiaryColor);
};

export { changeAppTheme };
