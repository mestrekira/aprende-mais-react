# 🎓 Projeto Aprende+ — Nota 2 de Desenvolvimento Web

> **Aplicação Web Interativa e Single Page Application (SPA) alinhada ao ODS 4 da ONU: Educação de Qualidade.**

---

## 👥 Equipe
* **Leildo do Nascimento Gonçalves**
* **Renato**
* **Disciplina:** Desenvolvimento Web — Atividade Avaliativa 2 (Nota 2)
* **Ano:** 2026

---

## 📌 1. Visão Geral e Continuidade (Nota 1 ➔ Nota 2)
Na **Nota 1**, foi criada a primeira versão do projeto **Aprende+** com estrutura semântica em HTML5, estilização CSS3 e Bootstrap, definindo a situação-problema e o público-alvo no escopo do **ODS 4**.

Na **Nota 2**, a interface foi integralmente migrada e evoluída para uma **Single Page Application (SPA) em React**, incorporando:
1. **Componentização Modular:** Divisão lógica em componentes reutilizáveis (`Navbar`, `Hero`, `StatsBanner`, `SearchBar`, `ResourceCatalog`, `InteractiveQuiz`, `Footer`).
2. **Gerenciamento de Estado e Reatividade:** Utilização dos React Hooks (`useState` e `useEffect`).
3. **Consumo de API Externa (Fetch API):** Consulta assíncrona ao acervo da **Open Library API** com tratamento de dados em **JSON**, gerenciamento de estados de carregamento (*loading*) e contingência contra falhas.
4. **Interatividade e Manipulação do DOM:** Busca dinâmica em tempo real com filtros por categoria e módulo de **Simulado Interativo** com correção imediata e feedback pedagógico.
5. **Responsividade & Acessibilidade:** Grid system do Bootstrap 5 com adaptação fluida para dispositivos móveis (360px+), tablets e desktops.

---

## 🛠️ 2. Tecnologias Utilizadas
* **React 18** (Vite)
* **JavaScript (ES6+)**
* **Fetch API & Promises / Async-Await**
* **Bootstrap 5.3 & Bootstrap Icons**
* **CSS3 Personalizado**
* **Open Library REST API** (`https://openlibrary.org/search.json`)

---

## 📁 3. Estrutura de Arquivos do Projeto

aprende-mais-react/
├── index.html                  # Arquivo HTML principal da SPA
├── package.json                # Dependências e scripts do projeto
├── vite.config.js              # Configuração do bundler Vite
├── README.md                   # Documentação técnica do projeto
└── src/
    ├── main.jsx                # Ponto de entrada do React
    ├── App.jsx                 # Componente raiz e controle de rotas/seções
    ├── styles/
    │   └── custom.css          # Estilos personalizados e variáveis visuais
    └── components/
        ├── Navbar.jsx          # Barra de navegação com navegação SPA
        ├── Hero.jsx            # Banner de apresentação institucional
        ├── StatsBanner.jsx     # Destaques estatísticos do ODS 4
        ├── SearchBar.jsx       # Campo de pesquisa e filtros por matéria
        ├── ResourceCatalog.jsx # Consumo da Fetch API, listagem e modal
        ├── InteractiveQuiz.jsx # Módulo de simulado interativo reativo
        └── Footer.jsx          # Rodapé com informações da equipe



---

## 🧪 4. Roteiro de Testes Realizados
1. **Teste de Navegação SPA:** Transição fluida entre abas (*Início*, *Biblioteca*, *Simulado* e *Sobre*) sem nenhum recarregamento de página.
2. **Teste de Consumo da API (Fetch API):**
   - Pesquisa por termos como `"Matemática"`, `"História"` e `"Machado de Assis"`.
   - Exibição de indicador de carregamento (*spinner*).
   - Conversão do payload JSON em cards informativos com capas e autores.
   - Tratamento de falhas de conexão com acionamento do catálogo de contingência.
3. **Teste do Simulado:**
   - Seleção de opções com destaque visual.
   - Validação imediata no DOM (verde para acerto, vermelho para erro).
   - Cálculo correto de pontuação final.
4. **Teste de Responsividade:** Validação em ferramentas de desenvolvedor (DevTools) simulando telas de 375px (iPhone), 768px (iPad) e 1920px (Desktop).
