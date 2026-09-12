import React from 'react';

export default function Hero({ onExploreClick, onQuizClick }) {
  return (
    <section className="hero-section">
      <div className="container position-relative">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary bg-opacity-25 text-info mb-3">
              <i className="bi bi-stars"></i>
              <small className="fw-semibold">Transformação Digital na Educação</small>
            </div>
            <h1 className="display-4 fw-bold mb-3">
              Potencialize seu aprendizado com o <span className="text-info">Aprende+</span>
            </h1>
            <p className="lead text-light text-opacity-75 mb-4">
              Uma aplicação web moderna, responsiva e interativa alinhada ao <strong>ODS 4 da ONU (Educação de Qualidade)</strong>.
              Acesse conteúdos gratuitos, consulte livros via API externa em tempo real e teste seus conhecimentos com simulados reativos.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button onClick={onExploreClick} className="btn btn-info btn-lg rounded-pill px-4 fw-semibold text-dark shadow-sm">
                <i className="bi bi-search me-2"></i>Explorar Recursos (API)
              </button>
              <button onClick={onQuizClick} className="btn btn-outline-light btn-lg rounded-pill px-4 fw-semibold">
                <i className="bi bi-play-circle me-2"></i>Iniciar Simulado
              </button>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <div className="p-4 rounded-4 bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-20 shadow-lg">
              <i className="bi bi-laptop display-1 text-info mb-3 d-block"></i>
              <h4 className="fw-bold text-white mb-2">Single Page Application</h4>
              <p className="text-light text-opacity-75 small mb-0">
                Desenvolvido com React, manipulação declarativa do DOM, Fetch API com tratamento JSON e estilização Bootstrap 5.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
