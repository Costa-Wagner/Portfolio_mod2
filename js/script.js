/* =============================================================
   SCRIPT.JS — Wagner Costa · Portfólio Acadêmico
   ─────────────────────────────────────────────────────────────
   Requisitos JS cobertos:
   ① Estrutura de decisão  → saudação por horário + filtro projetos
   ② Comando de repetição  → forEach para cursos, skills e projetos
   ③ Funções               → renderProjetos(), renderCursos(),
                              renderSkills(), filtrarProjetos()
   ============================================================= */

/* ─── MENU ARCADE (mobile) ─── */
function toggleMenu() {
  const menu    = document.getElementById("arcade-menu");
  const overlay = document.getElementById("arcade-overlay");
  const btn     = document.getElementById("hamburger");

  const estaAberto = menu.classList.contains("aberto");

  if (estaAberto) {
    fecharMenu();
  } else {
    menu.style.display    = "flex";
    overlay.style.display = "block";
    /* pequeno delay para a transição CSS funcionar */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        menu.classList.add("aberto");
        overlay.classList.add("aberto");
        btn.textContent = "✕";
      });
    });
  }
}

function fecharMenu() {
  const menu    = document.getElementById("arcade-menu");
  const overlay = document.getElementById("arcade-overlay");
  const btn     = document.getElementById("hamburger");

  menu.classList.remove("aberto");
  overlay.classList.remove("aberto");
  btn.textContent = "🕹️";

  /* espera a animação terminar antes de esconder */
  setTimeout(function () {
    menu.style.display    = "none";
    overlay.style.display = "none";
  }, 300);
}
   
/* ─── ① ESTRUTURA DE DECISÃO — Saudação por horário ─── */
function exibirSaudacao() {
  const hora = new Date().getHours();
  let mensagem;

  if (hora < 12) {
    mensagem = "► Bom dia! Seja bem-vindo ao meu portfólio. ◄";
  } else if (hora < 18) {
    mensagem = "► Boa tarde! Seja bem-vindo ao meu portfólio. ◄";
  } else {
    mensagem = "► Boa noite! Seja bem-vindo ao meu portfólio. ◄";
  }

  document.getElementById("saudacao").textContent = mensagem;
}

/* ─── CONTAGEM AUTOMÁTICA DE PROJETOS ─── */
function atualizarStatProjetos() {
  const el = document.getElementById("stat-projetos");
  if (!el) return;

  const total = projetos.length;
  el.textContent = total + "+";
}

/* ─── ANO AUTOMÁTICO NO FOOTER ─── */
function atualizarAno() {
  document.getElementById("ano").textContent = new Date().getFullYear();
}

/* ═══════════════════════════════════════════════════════════
   DADOS — Arrays/Objetos usados para popular o portfólio
   ═══════════════════════════════════════════════════════════ */

const cursos = [
  {
    nome: "Escola de Inovadores",
    horas: "40h",
    instituicao: "FATEC",
    ano: 2025,
    descricao: "Introdução à linguagem Python, lógica de programação e estruturas básicas.",
    certificado: "img/imagens/CERTIFICADOS/certif_escola_inovadores.jpg",
    site: "https://inova.cps.sp.gov.br/escola-de-inovadores/"
  },
  {
    nome: "Python Básico",
    horas: "18h",
    instituicao: "Fundação Bradesco",
    ano: 2025,
    descricao: "Capacitação em inovação, empreendedorismo e novas tecnologias aplicadas ao mercado.",
    certificado: "img/imagens/CERTIFICADOS/certif_python_basic_bradesco.jpg",
    site: "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico"
  },
];

/* ════════ MODAL CERTIFICADO ════════ */
function abrirModal(src) {
  const overlay = document.getElementById("modal-overlay");
  const box     = document.getElementById("modal-box");
  const img     = document.getElementById("modal-img");

  img.src = src;
  overlay.style.display = "block";
  box.style.display     = "flex";

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      overlay.classList.add("aberto");
      box.classList.add("aberto");
    });
  });
}

function fecharModal() {
  const overlay = document.getElementById("modal-overlay");
  const box     = document.getElementById("modal-box");

  overlay.classList.remove("aberto");
  box.classList.remove("aberto");

  setTimeout(function () {
    overlay.style.display = "none";
    box.style.display     = "none";
    document.getElementById("modal-img").src = "";
  }, 300);
}

const skillsTecnicas = [
  { nome: "HTML5",      icone: "🌐", nivel: 60 },
  { nome: "CSS3",       icone: "🎨", nivel: 55 },
  { nome: "JavaScript", icone: "⚡", nivel: 45 },
  { nome: "Python",     icone: "🐍", nivel: 35 },
  { nome: "GitHub",     icone: "🐙", nivel: 50 },
  { nome: "Vercel",     icone: "▲",  nivel: 45 },
  { nome: "Flask",      icone: "⚗️", nivel: 30 },
  { nome: "VS Code",    icone: "🛠️", nivel: 70 },
];

const softSkills = [
  "Trabalho em equipe", "Resolução de problemas",
  "Adaptabilidade", "Organização", "Liderança", "Visão analítica",
];

const projetos = [
  {
    nome: "Projeto Portfólio",
    data: "dez/2025",
    descricao: "Portfólio pessoal desenvolvido com HTML, CSS, JavaScript e Python (Flask). Projeto acadêmico.",
    semestre: "1º sem. · FATEC",
    tecnologias: ["HTML", "CSS", "JS", "FLASK"],
    categoria: "academico",
    link: "https://portfolio-wagner-nu.vercel.app/",
    github: "https://github.com/Costa-Wagner/portfolio",
    novo: true,
  },
  {
    nome: "Projeto API — JanoSys",
    data: "dez/2025",
    descricao: "Solução digital para facilitar a visualização e interpretação dos dados do CENSO 2010/2022. Atuei como Product Owner da equipe JanoSys. Projeto acadêmicdo, API - Aprendizado por Projeto Integrador.",
    semestre: "1º sem. · FATEC",
    tecnologias: ["API", "DADOS", "SCRUM"],
    categoria: "api",
    link: "https://janosysapi1.vercel.app/",
    github: "https://github.com/janosystime/Janosys-Project",
    novo: false,
  },
  {
    nome: "Site Pessoal",
    data: "out/2025",
    descricao: "Site pessoal explorando conceitos de desenvolvimento web, UX e design digital. Projeto acadêmico.",
    semestre: "1º sem. · FATEC",
    tecnologias: ["HTML", "CSS", "UX"],
    categoria: "academico",
    link: "https://ws-start-ten.vercel.app/",
    github: "https://github.com/Costa-Wagner/WS.start",
    novo: false,
  },
];

/* ═══════════════════════════════════════════════════════════
   ② REPETIÇÃO + ③ FUNÇÕES — Renderização dinâmica
   ═══════════════════════════════════════════════════════════ */

/* ─── Renderiza cursos a partir do array ─── */
function renderCursos() {
  const lista = document.getElementById("lista-cursos");
  if (!lista) return;

  lista.innerHTML = "";

  cursos.forEach(function (curso) {

    const btnCertificado = curso.certificado
      ? `<button onclick="abrirModal('${curso.certificado}')" class="btn-sm btn-sm-green">► CERTIFICADO</button>`
      : "";

    const btnSite = curso.site
      ? `<a href="${curso.site}" target="_blank" class="btn-sm btn-sm-outline-cyan">► SITE</a>`
      : "";

    lista.innerHTML += `
      <div class="curso-card">
        <span class="tl-icon">📜</span>
        <h3>${curso.nome}</h3>
        <span class="curso-info">${curso.instituicao}</span>
        <span class="curso-ano">${curso.horas} · ${curso.ano}</span>
        <p class="curso-desc">${curso.descricao}</p>
        <div class="curso-actions">${btnCertificado}${btnSite}</div>
      </div>`;
  });
}

/* ─── Renderiza skills técnicas a partir do array ─── */
function renderSkills() {
  const grid = document.getElementById("skills-tecnicas");
  if (!grid) return;

  grid.innerHTML = "";

  /* ② forEach — repetição sobre o array de skills */
  skillsTecnicas.forEach(function (skill) {
    grid.innerHTML += `
      <div class="skill-card">
        <span class="skill-icon">${skill.icone}</span>
        <div class="skill-title">${skill.nome}</div>
        <div class="skill-bar-wrap">
          <div class="skill-bar" style="width:${skill.nivel}%"></div>
        </div>
        <span class="skill-pct">${skill.nivel}%</span>
      </div>`;
  });

  /* ② forEach — soft skills em pílulas */
  const pillsContainer = document.getElementById("soft-pills");
  if (pillsContainer) {
    pillsContainer.innerHTML = "";
    softSkills.forEach(function (s) {
      pillsContainer.innerHTML += `<span class="soft-pill">${s}</span>`;
    });
  }
}

/* ─── ③ Função de renderização de projetos ─── */
function renderProjetos(filtro) {
  const container = document.getElementById("lista-projetos");
  if (!container) return;

  container.innerHTML = "";

  /* ① if/else — filtro por categoria (estrutura de decisão) */
  const lista = projetos.filter(function (p) {
    if (filtro === "todos") {
      return true;
    } else {
      return p.categoria === filtro;
    }
  });

  /* ② forEach — repetição para criar os cards */
  lista.forEach(function (p) {
    const tags = p.tecnologias.map(t => `<span class="proj-tag">${t}</span>`).join("");

    const botaoLink = p.link
      ? `<a href="${p.link}" target="_blank" class="btn-sm btn-sm-green">► VER PROJETO</a>`
      : `<span class="btn-sm btn-sm-disabled">► EM BREVE</span>`;

    const botaoGithub = p.github
      ? `<a href="${p.github}" target="_blank" class="btn-sm btn-sm-outline-cyan">► GITHUB</a>`
      : `<span class="btn-sm btn-sm-disabled">► GITHUB</span>`;

    container.innerHTML += `
      <article class="projeto-card ${p.novo ? '' : 'sem-new'}" data-categoria="${p.categoria}">
        <div class="proj-tags">${tags}</div>
        <h3>${p.nome}</h3>
        <p class="proj-date">// ${p.data}</p>
        <p class="proj-desc">${p.descricao}</p>
        <p class="proj-semestre">${p.semestre}</p>
        <div class="proj-actions">${botaoLink}${botaoGithub}</div>
      </article>`;
  });
}

/* ─── ③ Função de filtro (ativa botão correto) ─── */
function filtrarProjetos(categoria, btn) {
  /* ① if/else — estrutura de decisão para ativar classe */
  document.querySelectorAll(".filter-btn").forEach(function (b) {
    if (b === btn) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });

  renderProjetos(categoria);
}

/* ─── Scroll reveal ─── */
function initReveal() {
  const elementos = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add("visible");
        }, i * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elementos.forEach(function (el) {
    observer.observe(el);
  });
}

/* ─── INICIALIZAÇÃO ─── */
document.addEventListener("DOMContentLoaded", function () {
  exibirSaudacao();
  atualizarAno();
  renderCursos();
  renderSkills();
  renderProjetos("todos");
  atualizarStatProjetos();
  initReveal();
});
