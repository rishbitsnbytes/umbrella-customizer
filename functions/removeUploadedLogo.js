// This function will remove the uploaded logo.

const removeUploadedLogo = (logoElement, removeBtn, uploadBtnTitle) => {
  logoElement.remove();
  removeBtn.style.display = 'none';
  uploadBtnTitle.innerText = 'Upload Logo';
};

export { removeUploadedLogo };
