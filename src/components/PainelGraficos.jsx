import GraficoBarras from './GraficoBarras.jsx'
import GraficoPizza from './GraficoPizza.jsx'
import GraficoGauge from './GraficoGauge.jsx'
import {
  acompanhamentoDosRegistros,
  ocorrenciasPorTipo,
  velocimetros,
} from '../data/resumoDashboard.js'

export default function PainelGraficos() {
  return (
    <div className="grade-graficos">
      <GraficoBarras
        titulo={ocorrenciasPorTipo.titulo}
        labels={ocorrenciasPorTipo.labels}
        valores={ocorrenciasPorTipo.valores}
      />
      <GraficoPizza
        titulo={acompanhamentoDosRegistros.titulo}
        labels={acompanhamentoDosRegistros.labels}
        valores={acompanhamentoDosRegistros.valores}
      />
      <div className="faixa-gauges">
        {velocimetros.map((item) => (
          <GraficoGauge
            key={item.id}
            titulo={item.titulo}
            valor={item.valor}
            maximo={item.maximo}
            detalhe={item.detalhe}
            cor={item.cor}
          />
        ))}
      </div>
    </div>
  )
}