import { useState } from "react";

function FormGasto({ onAdicionarGasto }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!descricao || !valor || !categoria || !data) return;

    const novoGasto = {
      id: crypto.randomUUID(),
      descricao,
      valor: parseFloat(valor),
      categoria,
      data,
    };

    onAdicionarGasto(novoGasto);
    setDescricao("");
    setValor("");
    setCategoria("");
    setData("");
  };

  return (
    <form className="form-gasto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button type="submit">Adicionar Gasto</button>
    </form>
  );
}

export default FormGasto;
