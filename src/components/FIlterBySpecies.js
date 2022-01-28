function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "species",
      value: ev.target.value,
    });
  };

  return (
    <fieldset className="firstFieldset">
      <label htmlFor="species">Busca por especie:</label>
      <input
        type="text"
        name="species"
        id="species"
        value={props.searchSpecies}
        onChange={handleChange}
        className="firstFieldset__input"
      />
    </fieldset>
  );
}

export default FilterBySpecies;
