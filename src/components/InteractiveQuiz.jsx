import React, { useState } from 'react';

export default function InteractiveQuiz() {
  const questions = [
    {
      id: 1,
      discipline: 'Português / Literatura',
      question: 'Qual é a principal característica do movimento literário Realismo no Brasil, exemplificado por Machado de Assis?',
      options: [
        'Exaltação da natureza e idealização exacerbada dos heróis.',
        'Crítica aos costumes burgueses, análise psicológica e verossimilhança.',
        'Valorização exclusiva de temas medievais e linguagem arcaica.',
        'Uso de metáforas futuristas e negação da gramática normativa.'
      ],
      correct: 1,
      explanation: 'O Realismo machadiano destaca-se pelo olhar cético, análise aprofundada da psique humana e desmistificação das convenções sociais da época.'
    },
    {
      id: 2,
      discipline: 'Matemática',
      question: 'Uma função do 1º grau é expressa por f(x) = ax + b. Se f(x) = 3x - 6, qual é a raiz (ou zero) dessa função?',
      options: [
        'x = -2',
        'x = 0',
        'x = 2',
        'x = 3'
      ],
      correct: 2,
      explanation: 'Para encontrar a raiz, igualamos a função a zero: 3x - 6 = 0 => 3x = 6 => x = 6/3 = 2.'
    },
    {
      id: 3,
      discipline: 'Ciências / Cidadania (ODS)',
      question: 'O ODS 4 da Agenda 2030 da ONU estabelece como meta primordial:',
      options: [
        'Assegurar a educação inclusiva, equitativa e de qualidade, promovendo oportunidades ao longo da vida.',
        'Incentivar a privatização universal dos sistemas de ensino superior.',
        'Substituir professores exclusivamente por inteligências artificiais autônomas.',
        'Reduzir a carga horária de ciências e humanidades na educação básica.'
      ],
      correct: 0,
      explanation: 'O ODS 4 visa garantir que todas as meninas e meninos completem o ensino primário e secundário livre, equitativo e de qualidade até 2030.'
    },
    {
      id: 4,
      discipline: 'História / Sociedade',
      question: 'A promulgação da Constituição Brasileira de 1988, conhecida como "Constituição Cidadã", representou historicamente:',
      options: [
        'O início do Estado Novo e centralização do poder executivo.',
        'A consolidação da redemocratização e a garantia ampliada de direitos fundamentais.',
        'A Proclamação da República e separação entre Igreja e Estado.',
        'O fechamento do Congresso Nacional e supressão de garantias civis.'
      ],
      correct: 1,
      explanation: 'A Carta Magna de 1988 restabeleceu a ordem democrática plena, instituiu o SUS e ampliou as liberdades individuais e direitos sociais.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    setIsAnswered(true);
    if (selectedOption === currentQ.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-slate-200 my-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h3 className="fw-bold mb-1 brand-font text-dark">
            <i className="bi bi-patch-question text-primary me-2"></i>Simulado Interativo Aprende+
          </h3>
          <p className="text-muted small mb-0">
            Exercícios com validação reativa e manipulação em tempo real do DOM e estado da aplicação.
          </p>
        </div>
        {!showResult && (
          <span className="badge bg-secondary rounded-pill px-3 py-2">
            Questão {currentIndex + 1} de {questions.length}
          </span>
        )}
      </div>

      {!showResult ? (
        <div>
          {/* Barra de Progresso */}
          <div className="progress mb-4" style={{ height: '8px' }}>
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              aria-valuenow={currentIndex + 1}
              aria-valuemin="0"
              aria-valuemax={questions.length}
            ></div>
          </div>

          <div className="mb-2">
            <span className="badge bg-info bg-opacity-10 text-primary fw-semibold border border-info border-opacity-25 px-2 py-1">
              {currentQ.discipline}
            </span>
          </div>

          <h5 className="fw-bold text-dark mb-4 lh-base">{currentQ.question}</h5>

          <div className="d-flex flex-column gap-3 mb-4">
            {currentQ.options.map((opt, idx) => {
              let optionClass = 'quiz-option';
              if (selectedOption === idx) optionClass += ' selected';
              if (isAnswered) {
                optionClass += ' disabled';
                if (idx === currentQ.correct) {
                  optionClass += ' correct';
                } else if (selectedOption === idx) {
                  optionClass += ' incorrect';
                }
              }

              return (
                <div
                  key={idx}
                  className={optionClass}
                  onClick={() => handleSelectOption(idx)}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <span>
                      <strong className="me-2">{String.fromCharCode(65 + idx)})</strong> {opt}
                    </span>
                    {isAnswered && idx === currentQ.correct && (
                      <i className="bi bi-check-circle-fill text-success fs-5"></i>
                    )}
                    {isAnswered && selectedOption === idx && idx !== currentQ.correct && (
                      <i className="bi bi-x-circle-fill text-danger fs-5"></i>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback pedagógico */}
          {isAnswered && (
            <div
              className={`p-3 rounded-3 mb-4 ${
                selectedOption === currentQ.correct
                  ? 'bg-success bg-opacity-10 border border-success border-opacity-25 text-success'
                  : 'bg-danger bg-opacity-10 border border-danger border-opacity-25 text-danger'
              }`}
            >
              <div className="fw-bold mb-1">
                {selectedOption === currentQ.correct ? (
                  <>
                    <i className="bi bi-emoji-smile me-1"></i> Parabéns, resposta correta!
                  </>
                ) : (
                  <>
                    <i className="bi bi-emoji-frown me-1"></i> Não foi dessa vez. Veja a justificativa:
                  </>
                )}
              </div>
              <small className="text-dark d-block">{currentQ.explanation}</small>
            </div>
          )}

          {/* Botões de Ação */}
          <div className="d-flex justify-content-end gap-2">
            {!isAnswered ? (
              <button
                className="btn btn-primary px-4 rounded-pill fw-semibold"
                disabled={selectedOption === null}
                onClick={handleConfirmAnswer}
              >
                Confirmar Resposta
              </button>
            ) : (
              <button
                className="btn btn-primary px-4 rounded-pill fw-semibold"
                onClick={handleNextQuestion}
              >
                {currentIndex + 1 === questions.length ? 'Finalizar Simulado' : 'Próxima Questão'}
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-4">
          <div className="display-1 text-primary mb-3">
            {score >= questions.length / 2 ? (
              <i className="bi bi-trophy-fill text-warning"></i>
            ) : (
              <i className="bi bi-award text-info"></i>
            )}
          </div>
          <h4 className="fw-bold text-dark mb-2">Simulado Concluído com Sucesso!</h4>
          <p className="text-muted mb-4">
            Você acertou <strong>{score}</strong> de <strong>{questions.length}</strong> questões (
            {Math.round((score / questions.length) * 100)}% de aproveitamento).
          </p>
          <div className="d-inline-flex gap-3">
            <button className="btn btn-primary rounded-pill px-4" onClick={handleRestartQuiz}>
              <i className="bi bi-arrow-repeat me-1"></i> Refazer Simulado
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
