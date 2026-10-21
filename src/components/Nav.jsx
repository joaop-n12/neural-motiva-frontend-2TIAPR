const itens = [
  { id: 'inicio', rotulo: 'Início' },
  { id: 'consultas', rotulo: 'Ocorrências' },
  { id: 'interacoes', rotulo: 'Interações' },
  { id: 'dashboard', rotulo: 'Indicadores' },
]

export default function Nav({ paginaAtual, onNavegar }) {
  return (
    <nav className="nav" aria-label="Seções da plataforma">
      {itens.map((item) => (
        <button
          key={item.id}
          type="button"
          className={paginaAtual === item.id ? 'nav-item ativo' : 'nav-item'}
          onClick={() => onNavegar(item.id)}
        >
          {item.rotulo}
        </button>
      ))}
    </nav>
  )
}