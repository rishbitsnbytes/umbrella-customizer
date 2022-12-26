// This is an exception loader than re-usable showLoader() method. This is just for initial app boot loading state.

// Function
const loadAppBoot = (mainBody, loaderElement, duration) => {
  setTimeout(() => {
    loaderElement.style.display = 'none';
    mainBody.style.display = 'grid';
  }, duration);
};

export { loadAppBoot };
