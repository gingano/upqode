const loadCurrencies = async () => {
  const url = 'https://api.exchangeratesapi.io/latest';
  const response = await fetch(url);
  const data = await response.json();

  return data
};

export default loadCurrencies;