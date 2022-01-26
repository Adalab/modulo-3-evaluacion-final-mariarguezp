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
          handleSearchCharacter={props.handleSearchCharacter}
          searchCharacter={props.searchCharacter}
        />
        <FilterByHouse />
      </form>
    </section>
  );
}

export default Filters;
