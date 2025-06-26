function Resumo({ gastos }) {
  // Soma total de todos os gastos
  const total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);

  // Soma por categoria
  const categorias = {};
  gastos.forEach((gasto) => {
    if (!categorias[gasto.categoria]) {
      categorias[gasto.categoria] = 0;
    }
    categorias[gasto.categoria] += gasto.valor;
  });

  return (
    <div className="resumo">
      <h2>Resumo</h2>
      <p><strong>Total Geral:</strong> R${total.toFixed(2)}</p>
      <ul>
        {Object.entries(categorias).map(([cat, valor]) => (
          <li key={cat}>
            {cat}: R${valor.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resumo;
