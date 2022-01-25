const callToApi = () => {
  return fetch("https://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((response) => {
      const result = response;
      return result;
    });
};

export default callToApi;
