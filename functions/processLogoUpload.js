// This function accepts following arguments, viz.:-
// 1. logo - uploaded logo file
// 2. logoFileName =  formatted logo file name.

// DOM Selectors
const previewWrapper = document.querySelector('.preview-wrapper');
const uploadBtnTitle = document.querySelector('.upload-btn-title');
const removeBtnUploadedLogo = document.querySelector(
  '.btn-remove-uploaded-logo'
);

const processLogoUpload = async (logo, logoFileName) => {
  const logoReader = new FileReader();
  logoReader.readAsDataURL(logo);

  logoReader.addEventListener('load', (event) => handleUploadedLogo(event));

  const handleUploadedLogo = (event) => {
    const logoElement = document.createElement('img');
    previewWrapper.appendChild(logoElement);
    logoElement.src = event.target.result;
    logoElement.classList.add('logo-uploaded');
    logoElement.alt = logo.name;
    uploadBtnTitle.innerText = logoFileName;
    removeBtnUploadedLogo.style.display = 'block';
  };
};

export { processLogoUpload };
