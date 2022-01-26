import "../styles/layout/FilterByHouse.scss";

function FilterByHouse(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "house",
      value: ev.currentTarget.value,
    });
  };

  return (
    <fieldset className="secondFieldset">
      <label htmlFor="house">Selecciona la casa:</label>
      <select
        name="house"
        id="house"
        onChange={handleChange}
        value={props.selectHouse}
        className="secondFieldset__select"
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </fieldset>
  );
}

export default FilterByHouse;
