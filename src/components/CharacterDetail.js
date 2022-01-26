import { Link } from "react-router-dom";

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

  return (
    <section>
      <Link to="/">Volver</Link>
      <div>
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
        <ul>
          <li>{props.character.name}</li>
          <li>
            Alias:
            {props.character.otherNames.length === 0
              ? " -"
              : " " + props.character.otherNames}
          </li>
          <li>Estatus: {getStatus()}</li>
          <li>Especie: {props.character.species}</li>
          <li>
            Género: {props.character.gender === "female" ? "Mujer" : "Hombre"}
          </li>
          <li>
            Casa: {props.character.house === "" ? "-" : props.character.house}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CharacterDetail;
