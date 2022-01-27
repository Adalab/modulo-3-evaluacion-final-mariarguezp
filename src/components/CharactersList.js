import CharacterCard from "./CharacterCard";
import "../styles/layout/CharactersList.scss";

function CharacterList(props) {
  const charactersListItem =
    props.filteredCharacters.length === 0 ? (
      <li>
        No hay ningún personaje que coincida con la palabra
        {props.searchCharacter}
      </li>
    ) : (
      props.filteredCharacters.map((character, index) => {
        return <CharacterCard key={index} character={character} />;
      })
    );

  return (
    <section className="list">
      <ul className="list__element wrapper">{charactersListItem}</ul>
    </section>
  );
}

export default CharacterList;
