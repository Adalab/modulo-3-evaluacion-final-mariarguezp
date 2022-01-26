import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";
import "../styles/layout/Filters.scss";

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="filters">
      <form action="#" onSubmit={handleSubmit} className="filters__form">
        <FilterByCharacter
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
