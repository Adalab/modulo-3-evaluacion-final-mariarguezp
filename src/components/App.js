import { useEffect, useState } from "react";
import callToApi from "../services/api";
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  const [characters, setCharacter] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [filterHouse, setFilterHouse] = useState([]);

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(searchCharacter.toLowerCase());
  });

  useEffect(() => {
    callToApi().then((data) => {
      setCharacter(data);
    });
  }, []);

  const handleSearchCharacter = (value) => {
    setSearchCharacter(value);
  };

  return (
    <>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <Filters
          handleSearchCharacter={handleSearchCharacter}
          searchCharacter={searchCharacter}
        />
        <CharacterList filteredCharacters={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
