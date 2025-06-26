import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Cores para as categorias
const CORES = ["#4caf50", "#2196f3", "#ff9800", "#e91e63", "#9c27b0", "#795548"];

function GraficoGastos({ gastos }) {
  // Soma total de todos os valores
  const total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);

  // Agrupa os valores por categoria
  const dadosPorCategoria = gastos.reduce((acc, gasto) => {
    const categoria = gasto.categoria;
    acc[categoria] = (acc[categoria] || 0) + gasto.valor;
    return acc;
  }, {});

  // Converte para array com % de cada categoria
  const data = Object.entries(dadosPorCategoria).map(([categoria, valor]) => ({
    name: categoria,
    value: valor,
    percentual: ((valor / total) * 100).toFixed(1), // 1 casa decimal
  }));

  return (
    <div className="grafico">
      <h2>Gastos por Categoria (%)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, percentual }) => `${name}: ${percentual}%`}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={CORES[index % CORES.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) =>
              [`R$ ${value.toFixed(2)}`, name]
            }
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraficoGastos;
