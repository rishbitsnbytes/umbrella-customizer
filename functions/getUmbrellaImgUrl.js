// This is a utility function that gets the updated Umbrella Image Url to update in DOM.
// Argument:
// 1. imgUrl - base url from the colorsData Object
// 2. umbrellaColor - string of color which will match fileName
// 3. fileType - file type can be mentioned, default is set to '.png';

const getUmbrellaImgUrl = (imgUrl, umbrellaColor, fileType = 'png') => {
  return `${imgUrl}/umbrella-${umbrellaColor}.${fileType}`;
};

export { getUmbrellaImgUrl };
