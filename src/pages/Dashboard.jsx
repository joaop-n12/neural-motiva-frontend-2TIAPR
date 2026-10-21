import PainelGraficos from '../components/PainelGraficos.jsx'

export default function Dashboard() {
  // Ponto de extensão: o gráfico novo do grupo entra em PainelGraficos,
  // com outro objeto em src/data/resumoDashboard.js. Documentem a escolha no README.
  return (
    <section>
      <h2>Indicadores</h2>
      <p className="intro">
        Os gráficos mostram uma amostra mensal fictícia de registros de
        sinalização e não correspondem aos dados reais da Motiva.
      </p>
      <PainelGraficos />
    </section>
  )
}