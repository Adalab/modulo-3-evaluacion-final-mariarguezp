import "../styles/layout/FilterByCharacter.scss";

function FilterByCharacter(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };

  return (
    <fieldset className="firstFieldset">
      <label htmlFor="character">Busca por personaje:</label>
      <input
        type="text"
        name="character"
        id="character"
        value={props.searchCharacter}
        onChange={handleChange}
        className="firstFieldset__input"
      />
    </fieldset>
  );
}

export default FilterByCharacter;
