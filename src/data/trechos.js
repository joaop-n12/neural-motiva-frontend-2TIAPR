// Dados fixos da Sprint 1. Números e situações são simulados para a aula.
// TODO Sprint 2: este array deixa de alimentar a tela direto.
// Ele vira o valor inicial do useState de trechos no App.jsx
// (ou a lista começa vazia e o grupo cadastra pelo formulário).
export const trechos = [
  {
    id: 't-sp280-40',
    rodovia: 'SP-280',
    nome: 'Castello Branco',
    kmInicial: 40,
    kmFinal: 43,
    sentido: 'interior',
    situacao: 'Placa de regulamentação danificada',
    atencao: true,
    atualizadoEm: '2026-10-05T14:30:00',
  },
  {
    id: 't-sp280-61',
    rodovia: 'SP-280',
    nome: 'Castello Branco',
    kmInicial: 65,
    kmFinal: 66,
    sentido: 'capital',
    situacao: 'Placa informativa com pintura desgastada',
    atencao: false,
    atualizadoEm: '2026-10-06T09:15:00',
  },
  {
    id: 't-sp270-18',
    rodovia: 'SP-270',
    nome: 'Raposo Tavares',
    kmInicial: 20,
    kmFinal: 21,
    sentido: 'interior',
    situacao: 'Placa de velocidade ilegível',
    atencao: true,
    atualizadoEm: '2026-10-04T16:05:00',
  },
  {
    id: 't-sp021-12',
    rodovia: 'SP-021',
    nome: 'Rodoanel',
    kmInicial: 14,
    kmFinal: 15,
    sentido: 'leste',
    situacao: 'Placa indicativa ausente',
    atencao: true,
    atualizadoEm: '2026-10-03T11:40:00',
  },
]