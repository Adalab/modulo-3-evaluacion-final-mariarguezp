import { Link } from "react-router-dom";
import "../styles/layout/CharacterDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import gryffindorEmblem from "../images/Gryffindor-Logo.png";
import hufflepuffEmblem from "../images/Logo_Hufflepuff_2.png";
import ravenclawEmblem from "../images/ravenclaw-e1511277281724.png";
import slytherinEmblem from "../images/Logo_Slytherin_2.png";

function CharacterDetail(props) {
  const getStatus = () => {
    if (props.character.status) {
      if (props.character.gender === "female") {
        return "Viva";
      } else {
        return "Vivo";
      }
    } else {
      if (props.character.gender === "female") {
        return "Muerta";
      } else {
        return "Muerto";
      }
    }
  };

  const getStatusIcon = () => {
    if (props.character.status) {
      return <FontAwesomeIcon icon={faHeartbeat} />;
    } else {
      return <FontAwesomeIcon icon={faSkull} />;
    }
  };

  const getEmblem = () => {
    if (props.character.house === "Gryffindor") {
      return (
        <li>
          <img
            src={gryffindorEmblem}
            alt={`Emblema de ${props.character.house}`}
            title={`Emblema de ${props.character.house}`}
            className="emblem"
          />
        </li>
      );
    } else if (props.character.house === "Hufflepuff") {
      return (
        <li>
          <img
            src={hufflepuffEmblem}
            alt={`Emblema de ${props.character.house}`}
            title={`Emblema de ${props.character.house}`}
            className="emblem"
          />
        </li>
      );
    } else if (props.character.house === "Ravenclaw") {
      return (
        <li>
          <img
            src={ravenclawEmblem}
            alt={`Emblema de ${props.character.house}`}
            title={`Emblema de ${props.character.house}`}
            className="emblem"
          />
        </li>
      );
    } else if (props.character.house === "Slytherin") {
      return (
        <li>
          <img
            src={slytherinEmblem}
            alt={`Emblema de ${props.character.house}`}
            title={`Emblema de ${props.character.house}`}
            className="emblem"
          />
        </li>
      );
    }
  };

  return (
    <section className="detail">
      <article className="detail__container">
        <Link to="/" className="detail__link">
          <FontAwesomeIcon icon={faAngleLeft} className="icon1" />
          Volver
        </Link>
        <div className="detail__card">
          <img
            className="detail__card--image"
            src={
              props.character.image === ""
                ? "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
                : props.character.image
            }
            alt={`Foto de ${props.character.image}`}
            title={`Foto de ${props.character.image}`}
          />
          <ul className="detail__card--list">
            <li className="detail__card--listItem1">{props.character.name}</li>
            <li>
              <span class="detail__card--itemTitle">Alias:</span>
              {props.character.otherNames.length === 0
                ? " -"
                : " " + props.character.otherNames}
            </li>
            <li>
              <span class="detail__card--itemTitle">Estatus:</span>{" "}
              {getStatus()} {getStatusIcon()}
            </li>
            <li>
              <span class="detail__card--itemTitle">Especie:</span>{" "}
              {props.character.species}
            </li>
            <li>
              <span class="detail__card--itemTitle">Género:</span>{" "}
              {props.character.gender === "female" ? "Mujer" : "Hombre"}
            </li>
            <li>
              <span class="detail__card--itemTitle">Casa:</span>{" "}
              {props.character.house === "" ? "-" : props.character.house}{" "}
            </li>
            {getEmblem()}
          </ul>
        </div>
      </article>
    </section>
  );
}

export default CharacterDetail;
