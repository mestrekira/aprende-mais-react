import React from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top py-3">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home" onClick={() => setActiveTab('home')}>
          <i className="bi bi-mortarboard-fill text-primary fs-3"></i>
          <span className="fw-bold fs-4 text-dark brand-font">Aprende<span className="text-primary">+</span></span>
          <span className="brand-badge ms-2">ODS 4</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium gap-lg-3">
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${activeTab === 'home' ? 'text-primary active fw-bold' : 'text-secondary'}`}
                onClick={() => setActiveTab('home')}
              >
                <i className="bi bi-house-door me-1"></i> Início
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${activeTab === 'biblioteca' ? 'text-primary active fw-bold' : 'text-secondary'}`}
                onClick={() => setActiveTab('biblioteca')}
              >
                <i className="bi bi-book me-1"></i> Biblioteca Aberta (API)
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${activeTab === 'quiz' ? 'text-primary active fw-bold' : 'text-secondary'}`}
                onClick={() => setActiveTab('quiz')}
              >
                <i className="bi bi-check2-circle me-1"></i> Simulado Interativo
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${activeTab === 'sobre' ? 'text-primary active fw-bold' : 'text-secondary'}`}
                onClick={() => setActiveTab('sobre')}
              >
                <i className="bi bi-info-circle me-1"></i> Sobre o Projeto
              </button>
            </li>
          </ul>
          <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm rounded-pill px-3"
            >
              <i className="bi bi-github me-1"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
