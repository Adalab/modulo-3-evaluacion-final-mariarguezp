import { Link } from "react-router-dom";
import "../styles/layout/CharacterCard.scss";

function CharacterCard(props) {
  return (
    <li className="card">
      <Link to={`/character/${props.character.name}`} className="card__url">
        <div className="card__container">
          <img
            className="card__container--image"
            src={
              props.character.image === ""
                ? "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
                : props.character.image
            }
            alt={`Foto de ${props.character.image}`}
            title={`Foto de ${props.character.image}`}
          />
        </div>
        <div className="card__text">
          <h2 className="card__text--title">{props.character.name}</h2>
          <p className="card__text--subtitle">{props.character.species}</p>
        </div>
      </Link>
    </li>
  );
}

export default CharacterCard;
