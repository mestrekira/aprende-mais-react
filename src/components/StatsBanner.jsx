import React from 'react';

export default function StatsBanner() {
  const stats = [
    { icon: 'bi-bullseye', count: 'ODS 4', label: 'Educação Inclusiva e de Qualidade' },
    { icon: 'bi-journal-code', count: '100% SPA', label: 'Arquitetura Reativa com Componentes' },
    { icon: 'bi-cloud-arrow-down', count: 'Fetch API', label: 'Integração de Dados Assíncrona em JSON' },
    { icon: 'bi-phone', count: 'Mobile First', label: 'Design Totalmente Responsivo' }
  ];

  return (
    <div className="container my-5">
      <div className="row g-3">
        {stats.map((s, idx) => (
          <div key={idx} className="col-6 col-md-3">
            <div className="p-3 text-center bg-white rounded-3 border border-slate-200 shadow-sm h-100">
              <i className={`bi ${s.icon} fs-2 text-primary mb-1 d-block`}></i>
              <div className="fw-bold fs-5 text-dark">{s.count}</div>
              <small className="text-muted">{s.label}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
