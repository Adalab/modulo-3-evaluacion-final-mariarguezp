function CharacterCard(props) {
  return (
    <li>
      <img
        className="image"
        src={
          props.character.image === ""
            ? "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
            : props.character.image
        }
        alt={`Foto de ${props.character.image}`}
      />
      <h2>{props.character.name}</h2>
      <p>{props.character.species}</p>
    </li>
  );
}

export default CharacterCard;
