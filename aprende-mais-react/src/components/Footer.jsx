import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-5">
            <h5 className="text-white fw-bold brand-font mb-2">
              Aprende<span className="text-info">+</span>
            </h5>
            <p className="small text-muted mb-3 pe-lg-4">
              Projeto desenvolvido para a disciplina de <strong>Desenvolvimento Web (Nota 2)</strong>.
              Focado no Objetivo de Desenvolvimento Sustentável 4 (Educação de Qualidade) da Agenda 2030 da ONU.
            </p>
            <span className="badge bg-primary bg-opacity-25 text-info border border-info border-opacity-25">
              React SPA + Fetch API + Bootstrap 5
            </span>
          </div>
          <div className="col-md-3 col-6">
            <h6 className="text-white fw-semibold mb-3">Tecnologias</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li><i className="bi bi-code-slash text-primary me-2"></i>React (Vite)</li>
              <li><i className="bi bi-boxes text-primary me-2"></i>Componentização SPA</li>
              <li><i className="bi bi-cloud-arrow-down text-primary me-2"></i>Fetch API & JSON</li>
              <li><i className="bi bi-bootstrap text-primary me-2"></i>Bootstrap 5 & CSS3</li>
            </ul>
          </div>
          <div className="col-md-4 col-6">
            <h6 className="text-white fw-semibold mb-3">Equipe Técnica</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0 text-muted">
              <li><strong>Leildo do Nascimento Gonçalves</strong></li>
              <li><strong>Renato</strong></li>
              <li>Polo Presencial — Ano 2026</li>
              <li className="pt-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-info">
                  <i className="bi bi-github me-1"></i> Repositório no GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-secondary opacity-25" />
        <div className="d-flex flex-wrap justify-content-between align-items-center small text-muted">
          <span>&copy; 2026 Projeto Aprende+ — Todos os direitos reservados.</span>
          <span>Desenvolvimento Web — Avaliação Nota 2</span>
        </div>
      </div>
    </footer>
  );
}
