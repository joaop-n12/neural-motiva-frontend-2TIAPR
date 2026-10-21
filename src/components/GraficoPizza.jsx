import { Pie } from 'react-chartjs-2'
import { registrarCharts } from '../utils/charts.js'

registrarCharts()

const CORES = ['#70456e', '#e45b6b', '#4c7266', '#b7a1bb']

// Ponto de extensão: a pizza serve para uma parte de um todo
// (rodovia, turno, sentido). Troquem CORES se a paleta do grupo for outra.
export default function GraficoPizza({ titulo, labels, valores }) {
  const dados = {
    labels,
    datasets: [
      {
        data: valores,
        backgroundColor: labels.map((_, indice) => CORES[indice % CORES.length]),
        borderWidth: 0,
      },
    ],
  }

  const opcoes = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 8,
          boxHeight: 8,
          padding: 14,
          color: '#3d4854',
        },
      },
    },
  }

  return (
    <figure className="grafico">
      <figcaption>{titulo}</figcaption>
      <div className="grafico-area">
        <Pie data={dados} options={opcoes} />
      </div>
    </figure>
  )
}