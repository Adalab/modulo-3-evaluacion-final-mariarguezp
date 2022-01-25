import { useEffect, useState } from "react";
import callToApi from "../services/api";
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import FilterByHouse from "./FIlterByHouse";
import FilterByName from "./FilterByName";

function App() {
  const [characters, setCharacter] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");

  useEffect(() => {
    callToApi().then((data) => {
      setCharacter(data);
    });
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleChangeSearchCharacter = (value) => {
    setSearchCharacter(value);
  };

  return (
    <>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <form action="#" onSubmit={handleSubmit}>
          <FilterByName
            handleChangeSearchCharacter={handleChangeSearchCharacter}
            searchCharacter={searchCharacter}
          />
          <FilterByHouse />
        </form>
        <section>
          <CharacterList characters={characters} />
        </section>
      </main>
    </>
  );
}

export default App;
