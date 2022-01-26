import { useEffect, useState } from "react";
import callToApi from "../services/api";
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  const [characters, setCharacter] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [selectHouse, setSelectHouse] = useState("");

  const filteredCharacters = characters
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(searchCharacter.toLowerCase());
    })
    .filter((character) => {
      return character.house === selectHouse;
    });

  useEffect(() => {
    callToApi().then((data) => {
      setCharacter(data);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setSearchCharacter(data.value);
    } else if (data.key === "house") {
      setSelectHouse(data.value);
    }
  };

  return (
    <>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <Filters
          handleFilter={handleFilter}
          searchCharacter={searchCharacter}
          selectHouse={selectHouse}
        />
        <CharacterList filteredCharacters={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
