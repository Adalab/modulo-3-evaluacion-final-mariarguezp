import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";
import "../styles/layout/Filters.scss";
import FilterBySpecies from "./FIlterBySpecies";

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
        <FilterBySpecies
          handleFilter={props.handleFilter}
          searchSpecies={props.searchSpecies}
        />
      </form>
    </section>
  );
}

export default Filters;
