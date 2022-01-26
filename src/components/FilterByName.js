function FilterByName(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label htmlFor="character">Busca por personaje:</label>
      <input
        type="text"
        name="character"
        id="character"
        value={props.searchCharacter}
        onChange={handleChange}
      />
    </>
  );
}

export default FilterByName;
