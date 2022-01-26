import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <li>
      <Link to={`/character/${props.character.name}`}>
        <img
          className="image"
          src={
            props.character.image === ""
              ? "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
              : props.character.image
          }
          alt={`Foto de ${props.character.image}`}
          title={`Foto de ${props.character.image}`}
        />
        <h2>{props.character.name}</h2>
        <p>{props.character.species}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
