import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const charactersListItem = props.characters.map((character, index) => {
    return <CharacterCard key={index} character={character} />;
  });

  return <ul>{charactersListItem}</ul>;
}

export default CharacterList;
