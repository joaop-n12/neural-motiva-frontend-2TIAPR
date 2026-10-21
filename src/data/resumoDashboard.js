// Amostra mensal simulada de 20 registros; não representa dados reais da Motiva
// nem a contagem dos quatro trechos fixos da consulta.
// Os três gráficos leem estes objetos. Se o grupo mudar um número, muda o desenho.
//
// Ponto de extensão: copiem um objeto para cada gráfico novo e documentem
// no README de onde saiu o número. Não encham este arquivo de campos soltos.

export const ocorrenciasPorTipo = {
  titulo: 'Registros por tipo de defeito',
  labels: ['Placa danificada', 'Placa ausente', 'Placa ilegível', 'Placa encoberta/desalinhada'],
  valores: [7, 5, 4, 4],
}

export const acompanhamentoDosRegistros = {
  titulo: 'Acompanhamento dos registros',
  labels: ['Aguardando vistoria', 'Vistoria realizada, reparo pendente', 'Correção concluída'],
  valores: [6, 9, 5],
}

export const velocimetros = [
  {
    id: 'prioridade',
    titulo: 'Registros prioritários',
    valor: 6,
    maximo: 20,
    detalhe: 'ocorrências com risco à segurança',
    cor: '#b33b59',
  },
  {
    id: 'vistoriadas',
    titulo: 'Vistorias realizadas',
    valor: 14,
    maximo: 20,
    detalhe: 'registros que já receberam vistoria',
    cor: '#70456e',
  },
  {
    id: 'corrigidas',
    titulo: 'Correções concluídas',
    valor: 5,
    maximo: 20,
    detalhe: 'registros com reparo confirmado',
    cor: '#4c7266',
  },
]