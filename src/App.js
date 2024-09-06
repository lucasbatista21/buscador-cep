import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
  return <div className="container">
    <h1 className="title">Buscador de CEP</h1>

    <div className="container-input">
        <input
        type="text"
        placeholder="Digite seu CEP..."
        />

        <button className="btnSearch">
          <FiSearch size={25} color="#fff"/>
        </button>

        <main className="main-container">
            <h2>CEP: 07912572</h2>

            <span>Rua Teste algum</span>
            <span>Complemento: Algum complemento</span>
            <span>Vila Rosa</span>
            <span>Mauá, SP</span>
        </main>
    </div>
  </div>;
}

export default App;