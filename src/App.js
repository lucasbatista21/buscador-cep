import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});
  const [error, setError] = useState(""); // Estado para mensagem de erro

  async function handleSearch() {
    if (input === "") {
      setError("Preencha algum CEP"); // Define a mensagem de erro
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
      setError(""); // Limpa a mensagem de erro
    } catch {
      setError("Erro ao buscar, digite novamente um CEP VÁLIDO"); // Define a mensagem de erro
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="container-input">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="btnSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      {error && <div className="error-message">{error}</div>} {/* Mensagem de erro */}

      {Object.keys(cep).length > 0 && (
        <main className="main-container">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade}, {cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App;
