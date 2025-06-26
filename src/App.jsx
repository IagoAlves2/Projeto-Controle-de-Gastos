import { useEffect, useState } from "react";
import Header from "./components/Header";
import FormGasto from "./components/FormGasto";
import ListaGastos from "./components/ListaGastos";
import Resumo from "./components/Resumo";
import GraficoGastos from "./components/GraficoGastos";

function App() {
  const [gastos, setGastos] = useState(() => {
  const dadosSalvos = localStorage.getItem("gastos");
  return dadosSalvos ? JSON.parse(dadosSalvos) : [];
});

  // 🔁 Ao iniciar o app, busca do localStorage
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("gastos");
    if (dadosSalvos) {
      setGastos(JSON.parse(dadosSalvos));
    }
  }, []);

  // 💾 Toda vez que os gastos mudam, salva no localStorage
  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos));
  }, [gastos]);

  // ➕ Adiciona novo gasto à lista
  const adicionarGasto = (gasto) => {
    setGastos([gasto, ...gastos]);
  };

  const removerGasto = (id) => {
  const novaLista = gastos.filter((gasto) => gasto.id !== id);
  setGastos(novaLista);
};


  return (
    <div className="app-container">
      <Header />
      <FormGasto onAdicionarGasto={adicionarGasto} />
      <GraficoGastos gastos={gastos} />
      <Resumo gastos={gastos} />
      <ListaGastos gastos={gastos} onRemoverGasto={removerGasto} />
    </div>
  );
}

export default App;
