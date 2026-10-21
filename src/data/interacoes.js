// Histórico simulado. O agente de voz ainda não existe.
// Cada item é um comando que o operador teria falado, com data e resposta fixa.
export const interacoes = [
  {
    id: 'i-1',
    texto: 'Registrar placa de regulamentação danificada no km 42 da SP-280',
    data: '2026-10-05T14:32:00',
    resposta:
      'Comando simulado associado ao trecho t-sp280-40: placa de regulamentação danificada entre os km 40 e 43 da SP-280, sentido interior. A resposta é fixa; o microfone não está ativo.',
  },
  {
    id: 'i-2',
    texto: 'Consultar a sinalização no km 65 da SP-280',
    data: '2026-10-06T09:18:00',
    resposta:
      'Trecho t-sp280-61: placa informativa com pintura desgastada entre os km 65 e 66 da SP-280, sentido capital.',
  },
  {
    id: 'i-3',
    texto: 'A placa de velocidade no km 20 da Raposo está ilegível',
    data: '2026-10-04T16:12:00',
    resposta:
      'Comando simulado associado ao trecho t-sp270-18: placa de velocidade ilegível entre os km 20 e 21 da SP-270, sentido interior.',
  },
  {
    id: 'i-4',
    texto: 'Está faltando uma placa indicativa no km 14 do Rodoanel',
    data: '2026-10-03T11:48:00',
    resposta:
      'Comando simulado associado ao trecho t-sp021-12: placa indicativa ausente entre os km 14 e 15 da SP-021, sentido leste.',
  },
]