import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm, activeCategory, setActiveCategory, onSearchSubmit }) {
  const categories = ['Todos', 'Matemática', 'Português', 'Ciências', 'História', 'Tecnologia'];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit();
  };

  return (
    <div className="bg-white p-4 rounded-4 shadow-sm border border-slate-200 mb-4">
      <form onSubmit={handleSubmit} className="row g-3 align-items-center">
        <div className="col-lg-8">
          <div className="input-group input-group-lg">
            <span className="input-group-text bg-light border-end-0">
              <i className="bi bi-search text-muted"></i>
            </span>
            <input
              type="text"
              className="form-control bg-light border-start-0 ps-0"
              placeholder="Pesquise por tema, livro, disciplina ou autor (ex: Álgebra, Gramática, Machado de Assis)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary px-4 fw-semibold" type="submit">
              Buscar
            </button>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex align-items-center justify-content-lg-end gap-2">
            <span className="text-muted small fw-semibold text-nowrap">Filtro Rápido:</span>
            <select
              className="form-select"
              value={activeCategory}
              onChange={(e) => {
                setActiveCategory(e.target.value);
                setSearchTerm(e.target.value === 'Todos' ? 'educação' : e.target.value);
              }}
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </form>

      <div className="d-flex flex-wrap gap-2 mt-3 pt-3 border-top border-slate-100">
        <span className="text-muted small align-self-center me-1">Sugestões de estudo:</span>
        {['Física Básica', 'Redação ENEM', 'Biologia Celular', 'Geografia do Brasil', 'Literatura'].map((tag, idx) => (
          <button
            key={idx}
            type="button"
            className="btn btn-sm btn-outline-secondary rounded-pill"
            onClick={() => {
              setSearchTerm(tag);
              setActiveCategory('Todos');
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
