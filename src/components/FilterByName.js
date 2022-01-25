function FilterByName(props) {
  const handleSearchCharacter = (ev) => {
    props.handleChangeSearchCharacter(ev.currentTarget.value);
  };

  return (
    <>
      <label htmlFor="character">Busca por personaje:</label>
      <input
        type="text"
        name="character"
        id="character"
        value={props.searchCharacter}
        onChange={handleSearchCharacter}
      />
    </>
  );
}

export default FilterByName;
