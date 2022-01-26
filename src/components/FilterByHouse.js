function FilterByHouse(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "house",
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label htmlFor="house">Selecciona la casa:</label>
      <select
        name="house"
        id="house"
        onChange={handleChange}
        value={props.selectHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </>
  );
}

export default FilterByHouse;
