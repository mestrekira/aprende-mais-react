import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import SearchBar from './components/SearchBar';
import ResourceCatalog from './components/ResourceCatalog';
import InteractiveQuiz from './components/InteractiveQuiz';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('educação');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const handleSearchSubmit = () => {
    setActiveTab('biblioteca');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'home' && (
        <main className="flex-grow-1">
          <Hero
            onExploreClick={() => setActiveTab('biblioteca')}
            onQuizClick={() => setActiveTab('quiz')}
          />
          <StatsBanner />
          <div className="container my-5">
            <div className="row align-items-center g-4 p-4 rounded-4 bg-white border border-slate-200 shadow-sm">
              <div className="col-lg-8">
                <span className="badge bg-primary bg-opacity-10 text-primary mb-2">Continuidade da Nota 1</span>
                <h3 className="fw-bold text-dark">Da Estrutura Estática para a Dinâmica Reativa</h3>
                <p className="text-secondary mb-0">
                  Na Nota 1, foi construída a identidade visual do Aprende+ com HTML5 e CSS/Bootstrap.
                  Agora na Nota 2, integramos a <strong>Fetch API</strong> para consumo de dados externos em formato JSON,
                  organizamos o código em <strong>Componentes React</strong> com gestão de estado (useState/useEffect)
                  e desenvolvemos recursos interativos com validação direta no DOM.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <button className="btn btn-primary rounded-pill px-4 py-2" onClick={() => setActiveTab('sobre')}>
                  <i className="bi bi-file-text me-1"></i> Ver Relatório Técnico
                </button>
              </div>
            </div>
          </div>
        </main>
      )}

      {activeTab === 'biblioteca' && (
        <main className="container my-5 flex-grow-1">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            onSearchSubmit={handleSearchSubmit}
          />
          <ResourceCatalog query={searchTerm} />
        </main>
      )}

      {activeTab === 'quiz' && (
        <main className="container my-5 flex-grow-1">
          <InteractiveQuiz />
        </main>
      )}

      {activeTab === 'sobre' && (
        <main className="container my-5 flex-grow-1">
          <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-slate-200">
            <h2 className="fw-bold text-dark brand-font mb-4">
              <i className="bi bi-info-circle text-primary me-2"></i>Sobre o Projeto Aprende+ (Nota 2)
            </h2>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="p-3 rounded-3 bg-light border h-100">
                  <h5 className="fw-bold text-dark"><i className="bi bi-bullseye text-primary me-2"></i>ODS 4 e Situação-Problema</h5>
                  <p className="text-secondary small mb-0">
                    O projeto foca no <strong>ODS 4: Educação de Qualidade</strong>, respondendo ao desafio de democratizar
                    o acesso a materiais didáticos estruturados, gratuitos e interativos para estudantes dos ensinos fundamental e médio,
                    reduzindo desigualdades de aprendizagem.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-3 rounded-3 bg-light border h-100">
                  <h5 className="fw-bold text-dark"><i className="bi bi-cpu text-primary me-2"></i>Arquitetura React (SPA)</h5>
                  <p className="text-secondary small mb-0">
                    A aplicação foi totalmente migrada para a arquitetura de página única (SPA), aplicando componentização modular,
                    ciclo de vida reativo e separação clara de responsabilidades (Navbar, Hero, Search, Catalog, Quiz, Footer).
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-3 rounded-3 bg-light border h-100">
                  <h5 className="fw-bold text-dark"><i className="bi bi-braces text-primary me-2"></i>Fetch API & JSON</h5>
                  <p className="text-secondary small mb-0">
                    Consumo dinâmico de dados da <strong>Open Library API</strong>, com tratamento completo de Promises via async/await,
                    desestruturação de dados em JSON, gestão de loading e prevenção de erros por conexão com catálogo de reserva.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-3 rounded-3 bg-light border h-100">
                  <h5 className="fw-bold text-dark"><i className="bi bi-lightning-charge text-primary me-2"></i>Interatividade & DOM</h5>
                  <p className="text-secondary small mb-0">
                    Implementação de manipulação declarativa do DOM com eventos de teclado e clique, simulado interativo com validação
                    instantânea e modal dinâmico para visualização detalhada de obras literárias e científicas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-primary bg-opacity-10 rounded-3 border border-primary border-opacity-25">
              <h6 className="fw-bold text-primary mb-1">Informações Acadêmicas</h6>
              <p className="small text-secondary mb-0">
                Equipe: <strong>Leildo do Nascimento Gonçalves</strong> e <strong>Renato</strong> | Disciplina: <strong>Desenvolvimento Web</strong> | Ano: 2026.
              </p>
            </div>
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
}
