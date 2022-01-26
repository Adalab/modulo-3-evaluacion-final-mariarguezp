import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <form action="#" onSubmit={handleSubmit}>
        <FilterByName
          handleFilter={props.handleFilter}
          searchCharacter={props.searchCharacter}
        />
        <FilterByHouse
          handleFilter={props.handleFilter}
          selectHouse={props.selectHouse}
        />
      </form>
    </section>
  );
}

export default Filters;
