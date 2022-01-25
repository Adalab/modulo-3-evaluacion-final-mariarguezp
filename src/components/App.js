import { useEffect } from "react";
import callToApi from "../services/api";
// import callToApi from '../services/api';
import "../styles/App.scss";

function App() {
  useEffect(() => {
    callToApi().then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <form action="#">
          <label htmlFor="character">Busca por personaje:</label>
          <input type="text" name="character" id="character" />
          <label htmlFor="house">Selecciona la casa:</label>
          <select name="house" id="house">
            <option value="Gryffindor">Gryffindor</option>
          </select>
        </form>
        <section>
          <ul>
            <li>
              <div className="image"></div>
              <h2>Harry Potter</h2>
              <p>Human</p>
            </li>
            <li>
              <div className="image"></div>
              <h2>Harry Potter</h2>
              <p>Human</p>
            </li>
            <li>
              <div className="image"></div>
              <h2>Harry Potter</h2>
              <p>Human</p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
