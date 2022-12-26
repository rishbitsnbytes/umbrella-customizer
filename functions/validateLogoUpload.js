// This function will validate the logo upload. Following validations will be performed.
//  1. File size
// 2. Type - (.jpg or .png only) - Note :- even after setting the 'accept" attribute to html input element, user can upload other files by changing their explorer's showing of "customised file" to "all files"

// Function

const validateLogoUpload = (logoFile) => {
  // check for size
  let isSizeValidated = true;
  let isTypeValidated = true;
  let validationMsg = 'Validated!';
  //   let validationMsg = 'Validated!';
  const fileSize = logoFile.size;
  const fileType = logoFile.type ? logoFile.type : 'NA';

  //   File Size Check
  //   logoFile.size gives us size in  bytes, using SI units 5MB would be 5000000
  if (fileSize > 5000000) {
    isSizeValidated = false;
  }

  // File Type Check
  if (
    !(
      fileType === 'image/png' ||
      fileType === 'image/jpg' ||
      fileType === 'image/jpeg'
    )
  ) {
    isTypeValidated = false;
  }

  //   setting Validation Message
  if (!isSizeValidated && !isTypeValidated) {
    validationMsg =
      'Logo File is neither within specified size limit(5MB) nor have specified format(.png or .jpg/jpeg). Kindly retry with specified formats and size limits.';
  } else if (!isSizeValidated) {
    validationMsg =
      'Logo File Size exceeded the specified 5MB limit. Kindly retry with file having size upto 5MB only';
  } else if (!isTypeValidated) {
    validationMsg =
      'Logo File is not of the specified format(.png or .jpg/jpeg). Kindly retry with sepecified formats.';
  }

  return {
    isValidated: isSizeValidated && isTypeValidated,
    validationMsg: validationMsg,
  };
};

export { validateLogoUpload };
