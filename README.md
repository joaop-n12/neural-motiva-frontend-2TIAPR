# Sinaliza Neural Crew

## Problema e usuário

As equipes de inspeção e manutenção da Motiva precisam identificar e priorizar placas ausentes, danificadas ou ilegíveis nas rodovias sob concessão, para orientar vistorias e reparos.

**Usuário:** equipes de inspeção e manutenção rodoviária da Motiva.

## Sobre a plataforma

Protótipo de interface para consultar trechos com problemas de sinalização, acompanhar interações simuladas por voz e visualizar indicadores de inspeção. Os dados exibidos são fictícios; não há integração com sistemas da Motiva nem reconhecimento de voz nesta versão.

## Como rodar

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Integrantes

- RM568246 — Rodrigo Ferreira Nery
- RM567389 — Guilherme Fernandes
- RM567638 — Pedro Iavarone Custódio
- RM567318 — João Pedro de Souza Nunes
- RM567460 — Guilherme Nakamura

## Divisão de tarefas

Divisão informada pelo grupo: RM567318 — João Pedro de Souza Nunes. As tarefas específicas dessa pessoa e a divisão entre os demais integrantes ainda precisam ser detalhadas pelo grupo.

## O que os gráficos medem

Todos os gráficos usam uma amostra mensal fictícia de 20 registros de sinalização; não representam dados reais nem são a contagem dos quatro trechos de exemplo da tela.

- **Barras — Registros por tipo de defeito:** quantidade de placas danificadas, ausentes, ilegíveis ou encobertas/desalinhadas.
- **Pizza — Acompanhamento dos registros:** proporção entre registros aguardando vistoria, com vistoria realizada e reparo pendente, e com correção concluída.
- **Registros prioritários:** quantidade de ocorrências da amostra classificadas como risco à segurança (6 de 20).
- **Vistorias realizadas:** quantidade de registros da amostra que já receberam vistoria (14 de 20).
- **Correções concluídas:** quantidade de registros da amostra com correção confirmada (5 de 20).

## Escopo e próximos passos

Esta versão contém consultas a dados fixos, histórico de comandos com respostas simuladas e um painel de indicadores demonstrativo. O agente de voz, o cadastro e a persistência de ocorrências não estão implementados. Como próximo passo, o grupo pode implementar cadastro e filtros, persistência dos registros e integração com o agente de voz.
