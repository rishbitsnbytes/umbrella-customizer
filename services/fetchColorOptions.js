// This fetch function is fetching data locally only but using json so can be easily converted into  a network call easily.

const fetchColorOptions = async () => {
  const colorOptionsData = await fetch('../data/colorOptionsData.json')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));

  return colorOptionsData;
};

export { fetchColorOptions };
