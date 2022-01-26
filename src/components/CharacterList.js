import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const charactersListItem = props.filteredCharacters.map(
    (character, index) => {
      return <CharacterCard key={index} character={character} />;
    }
  );

  return (
    <section>
      <ul>{charactersListItem}</ul>
    </section>
  );
}

export default CharacterList;
