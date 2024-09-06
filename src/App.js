import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {

      const [input, setInput] = useState("")

      function handleSearch() {
        alert("Teste")
      }

  return <div className="container">
    <h1 className="title">Buscador de CEP</h1>

    <div className="container-input">
        <input
        type="text"
        placeholder="Digite seu CEP..."
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className="btnSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

        <main className="main-container">
            <h2>CEP: 07912572</h2>

            <span>Rua Teste algum</span>
            <span>Complemento: Algum complemento</span>
            <span>Vila Rosa</span>
            <span>Mauá, SP</span>
        </main>

  </div>;
}

export default App;