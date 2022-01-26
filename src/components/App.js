import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import callToApi from "../services/api";
import "../styles/App.scss";
import CharacterDetail from "./CharacterDetail";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [selectHouse, setSelectHouse] = useState("Gryffindor");

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
      setCharacters(data);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setSearchCharacter(data.value);
    } else if (data.key === "house") {
      setSelectHouse(data.value);
    }
  };

  const renderCharacterDetail = (props) => {
    const routeChName = props.match.params.characterName;

    const foundCharacter = characters.find(
      (character) => character.name === routeChName
    );
    return <CharacterDetail character={foundCharacter} />;
  };

  return (
    <>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Filters
              handleFilter={handleFilter}
              searchCharacter={searchCharacter}
              selectHouse={selectHouse}
            />
            <CharacterList
              filteredCharacters={filteredCharacters}
              searchCharacter={searchCharacter}
            />
          </Route>
          <Route
            path="/character/:characterName"
            render={renderCharacterDetail}
          ></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
