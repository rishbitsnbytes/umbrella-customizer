// This function will take 2 arguments, viz.:-
// 1. colorOptionsData, this has to be an array of objects which contains all the data about colors.
// 2. parentNode, this will be a DOM parent node under which new color option buttons will be mounted.

const mountColorOptionsToDOM = (
  colorOptionsData,
  parentNode,
  initialColorName
) => {
  colorOptionsData.forEach((color) => {
    const colorOptionBtn = document.createElement('button');
    colorOptionBtn.setAttribute('name', 'color-option-button');
    colorOptionBtn.setAttribute('value', color.colorName);
    colorOptionBtn.style.backgroundColor = color.primaryColor;
    colorOptionBtn.style.borderColor = `${color.secondaryColor}`;
    parentNode.appendChild(colorOptionBtn);
  });

  // InitialState
  [...parentNode.children].forEach((button) => {
    if (button.value === initialColorName) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
};

export { mountColorOptionsToDOM };
