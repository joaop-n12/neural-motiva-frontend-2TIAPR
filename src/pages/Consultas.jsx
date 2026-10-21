import CardTrecho from '../components/CardTrecho.jsx'

export default function Consultas({ trechos }) {
  // TODO Sprint 2: a consulta deixa de ser só esta lista fixa.
  // O profissional escolhe o trecho atual e vê as ocorrências daquele trecho,
  // com filtro. Não implementem o filtro nesta sprint.
  return (
    <section>
      <h2>Ocorrências</h2>
      <p className="intro">
        Trechos com placas ausentes, danificadas ou ilegíveis. Os registros são
        dados fixos de demonstração; nada é cadastrado pelo usuário.
      </p>

      {trechos.length === 0 ? (
        <p className="vazio">Nenhum trecho para consultar.</p>
      ) : (
        <ul className="lista">
          {trechos.map((trecho) => (
            <li key={trecho.id}>
              <CardTrecho trecho={trecho} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}