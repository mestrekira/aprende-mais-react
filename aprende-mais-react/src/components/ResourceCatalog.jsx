import React, { useState, useEffect } from 'react';

export default function ResourceCatalog({ query }) {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  // Fallback local caso a conexão externa falhe ou atinja rate-limit
  const fallbackData = [
    {
      key: 'fb-1',
      title: 'Dom Casmurro e a Literatura Brasileira',
      author_name: ['Machado de Assis'],
      first_publish_year: 1899,
      subject: ['Literatura', 'Português', 'Clássicos'],
      cover_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80',
      description: 'Obra fundamental do Realismo brasileiro, explorando a psicologia dos personagens e a sociedade carioca do século XIX.'
    },
    {
      key: 'fb-2',
      title: 'Fundamentos de Matemática Elementar: Álgebra e Funções',
      author_name: ['Gelson Iezzi', 'Carlos Murakami'],
      first_publish_year: 2013,
      subject: ['Matemática', 'Álgebra', 'Ensino Médio'],
      cover_url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80',
      description: 'Guia completo de funções, polinômios e equações algébricas com foco em preparação para vestibulares e ENEM.'
    },
    {
      key: 'fb-3',
      title: 'Princípios Básicos de Física e Mecânica',
      author_name: ['David Halliday', 'Robert Resnick'],
      first_publish_year: 2010,
      subject: ['Física', 'Cinemática', 'Ciências da Natureza'],
      cover_url: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&q=80',
      description: 'Conceitos fundamentais de movimento, dinâmica newtoniana e leis de conservação de energia explicados de forma intuitiva.'
    },
    {
      key: 'fb-4',
      title: 'História do Brasil: Colônia, Império e República',
      author_name: ['Boris Fausto'],
      first_publish_year: 2006,
      subject: ['História', 'Brasil', 'Ciências Humanas'],
      cover_url: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&q=80',
      description: 'Panorama crítico e aprofundado sobre a formação social, política e econômica da sociedade brasileira.'
    },
    {
      key: 'fb-5',
      title: 'Biologia: Da Célula à Biodiversidade',
      author_name: ['Sônia Lopes', 'Sergio Rosso'],
      first_publish_year: 2016,
      subject: ['Biologia', 'Genética', 'Ecologia'],
      cover_url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80',
      description: 'Estudo das estruturas celulares, evolução dos seres vivos e conservação dos ecossistemas alinhado aos ODS.'
    },
    {
      key: 'fb-6',
      title: 'Química Geral e Meio Ambiente',
      author_name: ['John B. Russell'],
      first_publish_year: 2008,
      subject: ['Química', 'Sustentabilidade', 'Transformações'],
      cover_url: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&q=80',
      description: 'Abordagem das transformações da matéria, reações químicas e seu impacto na sustentabilidade ambiental planetária.'
    }
  ];

  // Efeito para consumo assíncrono da API via Fetch API
  useEffect(() => {
    let isMounted = true;
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      const queryParam = query.trim() || 'educação';

      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(queryParam)}&limit=9`
        );

        if (!response.ok) {
          throw new Error(`Erro na requisição: status ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          if (data.docs && data.docs.length > 0) {
            const formatted = data.docs.map((doc, idx) => ({
              key: doc.key || `api-${idx}`,
              title: doc.title || 'Título Indisponível',
              author_name: doc.author_name || ['Autor Desconhecido'],
              first_publish_year: doc.first_publish_year || 'N/A',
              subject: doc.subject ? doc.subject.slice(0, 3) : ['Geral'],
              cover_url: doc.cover_i
                ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
                : 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80',
              description: `Material indexado no catálogo da Open Library com identificador ${doc.key || 'N/A'}. Ideal para aprofundamento nos tópicos de ${doc.subject ? doc.subject.slice(0, 2).join(', ') : 'estudo'}.`
            }));
            setResources(formatted);
          } else {
            // Se a busca na API não retornar nada, utiliza os dados padrão
            setResources(fallbackData);
          }
        }
      } catch (err) {
        console.warn('Falha ao consultar API externa. Utilizando catálogo de reserva:', err);
        if (isMounted) {
          setError('Acesso externo limitado ou offline. Carregamos materiais do catálogo de contingência.');
          setResources(fallbackData);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchBooks();

    return () => {
      isMounted = false;
    };
  }, [query]);

  return (
    <div className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 className="fw-bold mb-1 brand-font text-dark">
            <i className="bi bi-collection text-primary me-2"></i>Biblioteca Aberta de Recursos
          </h3>
          <p className="text-muted small mb-0">
            Dados consumidos dinamicamente da <strong>Open Library API</strong> via <code>Fetch API</code> (formato JSON).
          </p>
        </div>
        <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 px-3 py-2">
          {resources.length} itens encontrados
        </span>
      </div>

      {error && (
        <div className="alert alert-warning alert-dismissible fade show d-flex align-items-center gap-2" role="alert">
          <i className="bi bi-exclamation-triangle-fill fs-5"></i>
          <div>{error}</div>
        </div>
      )}

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Carregando dados da API...</span>
          </div>
          <p className="text-muted mt-3 fw-medium">Consultando API de livros e processando JSON...</p>
        </div>
      ) : (
        <div className="row g-4">
          {resources.map((item) => (
            <div key={item.key} className="col-md-6 col-lg-4">
              <div className="card h-100 custom-card">
                <img
                  src={item.cover_url}
                  alt={item.title}
                  className="card-img-top resource-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80';
                  }}
                />
                <div className="card-body d-flex flex-direction-column flex-column justify-content-between">
                  <div>
                    <div className="d-flex flex-wrap gap-1 mb-2">
                      {item.subject.slice(0, 2).map((sub, i) => (
                        <span key={i} className="badge bg-light text-secondary border">
                          {sub}
                        </span>
                      ))}
                    </div>
                    <h5 className="card-title fw-bold text-dark line-clamp-2" title={item.title}>
                      {item.title}
                    </h5>
                    <p className="card-text text-muted small mb-1">
                      <i className="bi bi-person me-1"></i> {item.author_name.join(', ')}
                    </p>
                    <p className="card-text text-muted small">
                      <i className="bi bi-calendar3 me-1"></i> Publicação inicial: {item.first_publish_year}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-top d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-outline-primary btn-sm rounded-pill px-3"
                      onClick={() => setSelectedBook(item)}
                    >
                      <i className="bi bi-eye me-1"></i> Detalhes
                    </button>
                    <span className="badge bg-success bg-opacity-10 text-success">Acesso Livre</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de Detalhes do Livro */}
      {selectedBook && (
        <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0 shadow">
              <div className="modal-header border-bottom-0 pb-0">
                <h5 className="modal-title fw-bold text-dark">{selectedBook.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setSelectedBook(null)}
                ></button>
              </div>
              <div className="modal-body py-4">
                <div className="text-center mb-3">
                  <img
                    src={selectedBook.cover_url}
                    alt={selectedBook.title}
                    className="rounded-3 shadow-sm"
                    style={{ maxHeight: '200px', objectFit: 'contain' }}
                  />
                </div>
                <ul className="list-group list-group-flush mb-3 small">
                  <li className="list-group-item d-flex justify-content-between px-0">
                    <span className="text-muted">Autor(es):</span>
                    <span className="fw-semibold">{selectedBook.author_name.join(', ')}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between px-0">
                    <span className="text-muted">Ano de Lançamento:</span>
                    <span className="fw-semibold">{selectedBook.first_publish_year}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between px-0">
                    <span className="text-muted">Palavras-chave:</span>
                    <span className="fw-semibold">{selectedBook.subject.join(', ')}</span>
                  </li>
                </ul>
                <p className="text-secondary small mb-0">{selectedBook.description}</p>
              </div>
              <div className="modal-footer border-top-0 pt-0">
                <button
                  type="button"
                  className="btn btn-secondary rounded-pill px-4"
                  onClick={() => setSelectedBook(null)}
                >
                  Fechar
                </button>
                <a
                  href={`https://openlibrary.org${selectedBook.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-pill px-4"
                >
                  Ver na Open Library <i className="bi bi-box-arrow-up-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
