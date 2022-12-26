// This function will lock the buttons when Loader is being displayed to prevent the unnecessary function calls.

// Function
const lockButtons = () => {
  // DOM Selectors
  const buttons = document.querySelectorAll('button');
  const inputs = document.querySelectorAll('input');
  const otherButtons = document.querySelectorAll('.btn');

  buttons.forEach((button) => {
    button.disabled = true;
    button.classList.add('progress');
  });

  inputs.forEach((input) => {
    input.disabled = true;
    input.classList.add('progress');
  });

  otherButtons.forEach((otherButton) => {
    otherButton.disabled = true;
    otherButton.classList.add('progress');
  });
};

export { lockButtons };
