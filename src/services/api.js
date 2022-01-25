const callToApi = () => {
  return fetch("https://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      return data.map((character) => {
        return {
          image: character.image,
          name: character.name,
          species: character.species,
          status: character.alive,
          gender: character.gender,
          house: character.house,
          otherNames: character.alternate_names,
        };
      });
    });
};

export default callToApi;
