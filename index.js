// All js file structure will be as follows:
// 1. Imports
// 2. DOM Selectors and Mounting.
// 3. All functions - Handler, Utility etc.
// 4. EventListeners attachments.

// 1. Imports
import {
  mountColorOptionsToDOM,
  changeAppTheme,
  showLoader,
  changeUmbrellaImg,
  validateLogoUpload,
  processLogoUpload,
  removeUploadedLogo,
  initialAppState,
  loadAppBoot,
} from './functions/index.js';
import { fetchColorOptions } from './services/fetchColorOptions.js';

// 2. DOM Selectors, global variables and Mounting.
const colorOptionsParentNode = document.querySelector('.color-options');
const umbrellaPreviewImgParent = document.querySelector('.preview-wrapper');
const loaderPreviewSection = document.querySelector('.loader-preview-section');
const iconUploadBtnParent = document.querySelector('.icon-upload-btn');
const loaderUploadBtn = document.querySelector('.loader-upload-btn');
const uploadBtnTitle = document.querySelector('.upload-btn-title');
const logoUploader = document.getElementById('logo-uploader');
const removeBtnUploadedLogo = document.querySelector(
  '.btn-remove-uploaded-logo'
);
const loaderInitialAppBoot = document.querySelector('.loader-initial-app-boot');
const mainSection = document.querySelector('.section-main');
const initialColorName = 'blue';
let logoFileName = null;
let colorOptionsData = {};

// 3. All functions - Handler, Utility etc.
// Booting the app with loading state.
loadAppBoot(mainSection, loaderInitialAppBoot, 2000);

// 3.1 Loading Colors Data and processing further with ASYNCHRONOUS IIFE.
(async () => {
  colorOptionsData = await fetchColorOptions();
  // 3.2 Loading App's InitialState
  initialAppState(colorOptionsData, initialColorName);
  // 3.3 Mounting the Different Color Options in DOM!
  mountColorOptionsToDOM(
    colorOptionsData,
    colorOptionsParentNode,
    initialColorName
  );
})();

// Handler for app theme, image Change, color change etc.
const handleColorsChange = async (event) => {
  const colorName = event.target.value;
  const parentElement = event.currentTarget;
  const clickedBtnElement = event.target;
  // Handling if user click on already selected color option button
  const currentSelectedColor =
    document.getElementsByClassName('active')[0].value;
  console.log(currentSelectedColor);
  if (colorName === currentSelectedColor) {
    return;
  }
  // Theme and Umbrella Image Change
  changeAppTheme(colorOptionsData, colorName);
  // Loader states...
  // This is image preview loader different timing and icon in button loader animation as per logo presence state.
  const logoElement = document.querySelector('.logo-uploaded');
  if (logoElement) {
    uploadBtnTitle.innerText = 'Processing...';
    showLoader(umbrellaPreviewImgParent, loaderPreviewSection, 2000);
    await showLoader(iconUploadBtnParent, loaderUploadBtn, 2000);
    uploadBtnTitle.innerText = logoFileName;
  } else {
    showLoader(umbrellaPreviewImgParent, loaderPreviewSection, 1500);
  }
  // Umbrella Image Change Call
  changeUmbrellaImg(colorOptionsData, colorName);
  // Selected Color Option Button Border Appearance
  [...parentElement.children].forEach((button) => {
    if (button.value !== clickedBtnElement.value) {
      button.classList.remove('active');
    }
  });
  clickedBtnElement.classList.add('active');
};

// Handler for managing, validating and processing the logo.
const handleLogoUpload = async (event) => {
  const uploadedLogoFiles = event.target.files;
  //   Below is the handling of yet another edge case where if user select no image in second time after uploading the one. Bcoz 'change' event compares the files array.
  if (uploadedLogoFiles.length === 0) {
    return;
  }
  // setting module scoped logoFile to pass it to different functions to manage fileArray deletion on removing.
  const logoFile = uploadedLogoFiles[0];
  logoFileName =
    logoFile.name.length <= 15
      ? logoFile.name
      : logoFile.name.substring(0, 16) + '...';
  // visual feedback to user about state changes
  uploadBtnTitle.innerText = 'Uploading...';
  // Belos is yet another edge case handling to Check if logo exist already from previous tries.
  const logoElement = document.querySelector('.logo-uploaded');
  if (logoElement) {
    logoElement.remove();
  }
  await showLoader(iconUploadBtnParent, loaderUploadBtn, 1500);
  uploadBtnTitle.innerText = 'Validating...';
  await showLoader(iconUploadBtnParent, loaderUploadBtn, 1500);
  //   Validating the uploaded logo file.
  const { isValidated, validationMsg } = validateLogoUpload(logoFile);
  if (!isValidated) {
    alert(validationMsg);
    uploadBtnTitle.innerText = 'Upload Logo';
    removeBtnUploadedLogo.style.display = 'none';
    return;
  }
  uploadBtnTitle.innerText = 'Processing...';
  showLoader(iconUploadBtnParent, loaderUploadBtn, 2000);
  await showLoader(umbrellaPreviewImgParent, loaderPreviewSection, 2000);
  //   Logo File Processing Call
  await processLogoUpload(logoFile, logoFileName);
};

// Handler to remove the logoFile and reset.
const handleRemoveUploadedlogo = async (event) => {
  uploadBtnTitle.innerText = 'Removing...';
  // Loaders
  showLoader(iconUploadBtnParent, loaderUploadBtn, 2000);
  await showLoader(umbrellaPreviewImgParent, loaderPreviewSection, 2000);
  // Getting latest DOM logo element
  const logoElement = document.querySelector('.logo-uploaded');
  removeUploadedLogo(logoElement, removeBtnUploadedLogo, uploadBtnTitle);
  //   Below code line is important in a sense that native FileAPI has an READONLY object FileList, so on removing the logoElement from DOM we can't change it, so after removing and then on subsequent upload of same file, the upload won't trigger. To tackle we can set it's value or fakepath to null.
  logoUploader.value = null;
};

// 4. EventListeners attachments.
colorOptionsParentNode.addEventListener('click', (event) =>
  handleColorsChange(event)
);
logoUploader.addEventListener('change', (event) => handleLogoUpload(event));
removeBtnUploadedLogo.addEventListener('click', (event) =>
  handleRemoveUploadedlogo(event)
);
