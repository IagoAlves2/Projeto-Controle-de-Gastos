function ListaGastos({ gastos, onRemoverGasto }) {
  return (
    <div className="lista-gastos">
      <h2>Gastos Registrados</h2>

      {gastos.length === 0 ? (
        <p>Nenhum gasto cadastrado.</p>
      ) : (
        <ul>
          {gastos.map((gasto) => (
            <li key={gasto.id}>
              <div>
                <strong>{gasto.descricao}</strong> — R${gasto.valor.toFixed(2)}
              </div>
              <small>
                {gasto.categoria} | {new Date(gasto.data).toLocaleDateString()}
              </small>
              <button onClick={() => onRemoverGasto(gasto.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaGastos;
