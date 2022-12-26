// This function will unlock the locked buttons after Loader is finshed being displayed.

// Function
const unlockButtons = () => {
  // DOM Selectors
  const buttons = document.querySelectorAll('button');
  const inputs = document.querySelectorAll('input');
  const otherButtons = document.querySelectorAll('.btn');

  buttons.forEach((button) => {
    button.disabled = false;
    button.classList.remove('progress');
  });

  inputs.forEach((input) => {
    input.disabled = false;
    input.classList.remove('progress');
  });

  otherButtons.forEach((otherButton) => {
    otherButton.disabled = false;
    otherButton.classList.remove('progress');
  });
};

export { unlockButtons };
