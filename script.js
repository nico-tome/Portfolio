const projectGrid = document.getElementById('project-grid');
const filterBar = document.getElementById('filter-bar');
const searchInput = document.getElementById('project-search');
const noResults = document.getElementById('no-results');
const languagesChart = document.getElementById('languages-chart');
const languageSelect = document.getElementById('lang-select');

const projects = window.PORTFOLIO_PROJECTS || [];
const categories = ['Tous', ...new Set(projects.map(project => project.category))];
const translations = {
  fr: {
    brandSubtitle: 'Portfolio de projets',
    navProjects: 'Projets',
    navContact: 'Contact',
    heroTitle: 'Mes projets.',
    heroDescription: 'Voici la liste des mes projets personnels.',
    heroPrimary: 'Voir mes projets',
    heroSecondary: 'Me contacter',
    overviewTitle: 'Langages favori',
    overviewDescription: 'Les languages que j\'ai le plus utilises',
    statsProjects: 'projets',
    statsLanguages: 'langages',
    chartTitle: 'Top 5 utilisations',
    aboutTitle: 'Qui suis-je ?',
    aboutP1: 'Passionné par la programmation, j\'ai appris le code en autodidacte en créant des projets seul pendant mes temps libre. Puis j\'ai intégré l\'école 42 Angoulême.',
    aboutP2: '-----',
    aboutP3: '🇫🇷 Français et 🇪🇸 Espagnol',
    aboutP4: '🤺 Escrimeur de haut niveau au pole France à Bordeaux',
    aboutP5: '🎓 Étudiant à l\'école 42 Angoulême',
    aboutP6: '🗣️ Je parle: 🇫🇷 🇬🇧 🇪🇸',
    projectsLabel: 'Projets',
    projectsHeading: 'Mes réalisations',
    searchPlaceholder: 'Rechercher un projet...',
    filterAll: 'Tous',
    contactTitle: 'Contact',
    contactIntro: 'Pour des collaborations, des questions ou un retour sur ce portfolio :',
    contributionsTitle: 'Contributions',
    contributionsIntro: 'Contributions open-source :',
    noResults: 'Aucun projet ne correspond à votre recherche.'
  },
  en: {
    brandSubtitle: 'Project portfolio',
    navProjects: 'Projects',
    navContact: 'Contact',
    heroTitle: 'My projects.',
    heroDescription: 'Here is the list of my personal projects.',
    heroPrimary: 'See my projects',
    heroSecondary: 'Contact me',
    overviewTitle: 'Favorite languages',
    overviewDescription: 'A varied use adapted to each project.',
    statsProjects: 'projects',
    statsLanguages: 'languages',
    chartTitle: 'Top 5 usages',
    aboutTitle: 'Who am I?',
    aboutP1: 'Passionate about programming, I learned to code by myself by building projects during my free time. Then I joined 42 Angoulême.',
    aboutP2: '-----',
    aboutP3: '🇫🇷 French and 🇪🇸 Spanish',
    aboutP4: '🤺 High-level fencer in the France pole at Bordeaux',
    aboutP5: '🎓 Student at 42 Angoulême',
    aboutP6: '🗣️ I speak: 🇫🇷 🇬🇧 🇪🇸',
    projectsLabel: 'Projects',
    projectsHeading: 'My achievements',
    searchPlaceholder: 'Search a project...',
    filterAll: 'All',
    contactTitle: 'Contact',
    contactIntro: 'For collaborations, questions, or feedback about this portfolio:',
    contributionsTitle: 'Contributions',
    contributionsIntro: 'Open-source contributions:',
    noResults: 'No project matches your search.' 
  },
  es: {
    brandSubtitle: 'Portafolio de proyectos',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
    heroTitle: 'Mis proyectos.',
    heroDescription: 'Aquí tienes la lista de mis proyectos personales.',
    heroPrimary: 'Ver mis proyectos',
    heroSecondary: 'Contactarme',
    overviewTitle: 'Lenguajes favoritos',
    overviewDescription: 'Un uso variado adaptado a cada proyecto.',
    statsProjects: 'proyectos',
    statsLanguages: 'lenguajes',
    chartTitle: 'Top 5 usos',
    aboutTitle: '¿Quién soy?',
    aboutP1: 'Apasionado por la programación, aprendí a programar por mi cuenta creando proyectos durante mi tiempo libre. Luego me uní a 42 Angoulême.',
    aboutP2: '-----',
    aboutP3: '🇫🇷 Francés y 🇪🇸 Español',
    aboutP4: '🤺 Esgrimista de alto nivel en el polo Francia de Burdeos',
    aboutP5: '🎓 Estudiante en 42 Angoulême',
    aboutP6: '🗣️ Hablo: 🇫🇷 🇬🇧 🇪🇸',
    projectsLabel: 'Proyectos',
    projectsHeading: 'Mis logros',
    searchPlaceholder: 'Buscar un proyecto...',
    filterAll: 'Todos',
    contactTitle: 'Contacto',
    contactIntro: 'Para colaboraciones, preguntas o comentarios sobre este portafolio:',
    contributionsTitle: 'Contribuciones',
    contributionsIntro: 'Contribuciones de código abierto:',
    noResults: 'Ningún proyecto coincide con tu búsqueda.'
  }
};

const categoryTranslations = {
  fr: {
    'Machine Learning': 'Machine Learning',
    Jeux: 'Jeux',
    Application: 'Application',
    Outils: 'Outils',
    IA: 'IA'
  },
  en: {
    'Machine Learning': 'Machine Learning',
    Jeux: 'Games',
    Application: 'Application',
    Outils: 'Utilities',
    IA: 'AI'
  },
  es: {
    'Machine Learning': 'Machine Learning',
    Jeux: 'Juegos',
    Application: 'Aplicación',
    Outils: 'Utilidades',
    IA: 'IA'
  }
};

const projectTranslations = {
  en: {
    'Jeu du pendu': { title: 'Hangman Game', category: 'Machine Learning', subtitle: 'Scratch AI for Hangman', description: 'The first AI made on Scratch that learns to propose letters with a reward based on relevance.', linkLabel: 'View on Itch.io', status: 'Web / Windows / Linux', tags: ['AI', 'Learning'] },
    'Geometry Dash': { title: 'Geometry Dash', category: 'Machine Learning', subtitle: 'Self-learning agent in Python', description: 'A PPO agent trained in Python to autonomously beat a Geometry Dash level.', linkLabel: 'View on GitHub', status: 'Windows / Linux / macOS', tags: ['PPO', 'Machine Learning', 'Self-learning'] },
    'Blue Red Square': { title: 'Blue Red Square', category: 'Games', subtitle: 'Rhythm game and level editor', description: 'A Scratch game with rhythm gameplay, level editing, and an experience exported to the web.', linkLabel: 'View on Itch.io', status: 'Web / Windows / Linux / macOS', tags: ['Game', 'Editor', 'Rhythm'] },
    'Fisc Adventure': { title: 'Fisc Adventure', category: 'Games', subtitle: '3D raycasting game in Scratch', description: 'A satirical game exported from Scratch with 3D raycasting, weapon preparation, and boss phases.', linkLabel: 'View on Itch.io', status: 'Windows', tags: ['Game', 'Raycasting', '3D'] },
    'Gouvernail Project Manager': { title: 'Gouvernail Project Manager', category: 'Application', subtitle: 'Project management app with graphs', description: 'A Godot application to visualize and structure projects as nodes, with saving and graphs.', linkLabel: 'View on Itch.io', status: 'Windows / Linux', tags: ['Management', 'Productivity', 'Graph', 'Godot'] },
    'Better libft': { title: 'Better libft', category: 'Utilities', subtitle: 'Improved libft for 42', description: 'An improved version of libft for 42, with additional functions and better organization.', linkLabel: 'View on GitHub', status: 'C / Linux', tags: ['School', '42', 'Library'] },
    'Cube3D': { title: 'Cube3D', category: 'Games', subtitle: 'Raycasting project in C', description: 'A 3D raycasting project made in C, with a simple user interface and basic features.', linkLabel: 'View on GitHub', status: 'C / Linux', tags: ['Raycasting', '3D', 'C', '42'] },
    'Minishell': { title: 'Minishell', category: 'Utilities', subtitle: 'A minimal shell in C', description: 'A minimal shell project written in C with basic command execution features.', linkLabel: 'View on GitHub', status: 'C / Linux', tags: ['Shell', 'C', '42'] },
    'ft_ls': { title: 'ft_ls', category: 'Utilities', subtitle: 'A reproduction of the ls command', description: 'A Linux command project that reproduces ls behavior and teaches flag handling and file info.', linkLabel: 'View on GitHub', status: 'C / Linux', tags: ['Shell', 'C', '42'] },
    'leaffliction': { title: 'leaffliction', category: 'AI', subtitle: 'An AI for leaf analysis', description: 'Designing a neural network that analyzes leaf images and predicts diseases.', linkLabel: 'View on GitHub', status: 'Python / Linux', tags: ['Python', 'AI', '42'] }
  },
  es: {
    'Jeu du pendu': { title: 'Juego del ahorcado', category: 'Machine Learning', subtitle: 'IA de Scratch para el ahorcado', description: 'La primera IA hecha en Scratch que aprende a proponer letras con una recompensa basada en la relevancia.', linkLabel: 'Ver en Itch.io', status: 'Web / Windows / Linux', tags: ['IA', 'Aprendizaje'] },
    'Geometry Dash': { title: 'Geometry Dash', category: 'Machine Learning', subtitle: 'Agente de autoaprendizaje en Python', description: 'Un agente PPO entrenado en Python para completar un nivel de Geometry Dash de forma autónoma.', linkLabel: 'Ver en GitHub', status: 'Windows / Linux / macOS', tags: ['PPO', 'Machine Learning', 'Autoaprendizaje'] },
    'Blue Red Square': { title: 'Blue Red Square', category: 'Juegos', subtitle: 'Juego de ritmo y editor de niveles', description: 'Un juego de Scratch con gameplay de ritmo, editor de niveles y una experiencia exportada a la web.', linkLabel: 'Ver en Itch.io', status: 'Web / Windows / Linux / macOS', tags: ['Juego', 'Editor', 'Ritmo'] },
    'Fisc Adventure': { title: 'Fisc Adventure', category: 'Juegos', subtitle: 'Juego de raycasting 3D en Scratch', description: 'Un juego satírico exportado desde Scratch con raycasting 3D, preparación de armas y fases de jefes.', linkLabel: 'Ver en Itch.io', status: 'Windows', tags: ['Juego', 'Raycasting', '3D'] },
    'Gouvernail Project Manager': { title: 'Gouvernail Project Manager', category: 'Aplicación', subtitle: 'Aplicación de gestión de proyectos con grafos', description: 'Una aplicación en Godot para visualizar y estructurar proyectos como nodos, con guardado y grafos.', linkLabel: 'Ver en Itch.io', status: 'Windows / Linux', tags: ['Gestión', 'Productividad', 'Grafo', 'Godot'] },
    'Better libft': { title: 'Better libft', category: 'Utilidades', subtitle: 'Libft mejorada para 42', description: 'Una versión mejorada de la libft para 42, con funciones adicionales y una organización mejorada.', linkLabel: 'Ver en GitHub', status: 'C / Linux', tags: ['Escuela', '42', 'Biblioteca'] },
    'Cube3D': { title: 'Cube3D', category: 'Juegos', subtitle: 'Proyecto de raycasting en C', description: 'Un proyecto de raycasting 3D hecho en C, con una interfaz de usuario simple y funciones básicas.', linkLabel: 'Ver en GitHub', status: 'C / Linux', tags: ['Raycasting', '3D', 'C', '42'] },
    'Minishell': { title: 'Minishell', category: 'Utilidades', subtitle: 'Un shell mínimo en C', description: 'Un proyecto de shell mínimo escrito en C con funciones básicas para ejecutar comandos.', linkLabel: 'Ver en GitHub', status: 'C / Linux', tags: ['Shell', 'C', '42'] },
    'ft_ls': { title: 'ft_ls', category: 'Utilidades', subtitle: 'Una reproducción del comando ls', description: 'Un proyecto de comando de Linux que reproduce el comportamiento de ls y enseña el manejo de flags e información de archivos.', linkLabel: 'Ver en GitHub', status: 'C / Linux', tags: ['Shell', 'C', '42'] },
    'leaffliction': { title: 'leaffliction', category: 'IA', subtitle: 'Una IA para analizar hojas', description: 'Diseñar una red neuronal que analiza imágenes de hojas y predice enfermedades.', linkLabel: 'Ver en GitHub', status: 'Python / Linux', tags: ['Python', 'IA', '42'] }
  }
};

let activeCategory = 'Tous';
let searchTerm = '';
let currentLanguage = localStorage.getItem('portfolio-language') || 'fr';

if (!['fr', 'en', 'es'].includes(currentLanguage)) {
  currentLanguage = 'fr';
}

function t(key) {
  return translations[currentLanguage]?.[key] || translations.fr[key] || key;
}

function getCategoryLabel(category) {
  return categoryTranslations[currentLanguage]?.[category] || category;
}

function getLocalizedProject(project) {
  const localized = projectTranslations[currentLanguage]?.[project.title] || {};
  return {
    title: localized.title || project.title,
    category: localized.category || project.category,
    subtitle: localized.subtitle || project.subtitle,
    description: localized.description || project.description,
    linkLabel: localized.linkLabel || project.linkLabel,
    status: localized.status || project.status,
    tags: localized.tags || project.tags,
    languages: project.languages,
    image: project.image,
    link: project.link
  };
}

function collectLanguageCounts() {
  const counts = {};
  projects.forEach(project => {
    (project.languages || []).forEach(language => {
      const normalized = language.trim();
      if (!normalized) return;
      counts[normalized] = (counts[normalized] || 0) + 1;
    });
  });
  return counts;
}

function getTopLanguages(limit = 5) {
  const counts = collectLanguageCounts();
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    .slice(0, limit);
}

function initLanguagesChart() {
  if (!languagesChart) return;
  languagesChart.innerHTML = '';

  const totalProjects = projects.length;
  const languageCounts = collectLanguageCounts();
  const topLanguages = getTopLanguages(5);

  topLanguages.forEach(lang => {
    const item = document.createElement('div');
    item.className = 'language-item';
    const percentage = totalProjects ? Math.round((lang.count / totalProjects) * 100) : 0;

    item.innerHTML = `
      <span class="language-label">${lang.name}</span>
      <div class="language-bar-container">
        <div class="language-bar" style="width: ${percentage}%"></div>
      </div>
      <span class="language-percentage">${percentage}%</span>
    `;
    languagesChart.appendChild(item);

    const bar = item.querySelector('.language-bar');
    const percentageSpan = item.querySelector('.language-percentage');

    bar.addEventListener('mouseenter', () => {
      percentageSpan.textContent = `${lang.count}/${totalProjects}`;
    });

    bar.addEventListener('mouseleave', () => {
      percentageSpan.textContent = `${percentage}%`;
    });
  });

  document.getElementById('projects-count').textContent = totalProjects;
  document.getElementById('languages-count').textContent = Object.keys(languageCounts).length;
}

function createFilterButtons() {
  filterBar.innerHTML = '';
  const visibleCategories = ['Tous', ...new Set(projects.map(project => project.category))];
  visibleCategories.forEach(category => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = category === 'Tous' ? t('filterAll') : getCategoryLabel(category);
    button.className = 'filter-button';
    button.dataset.category = category;
    if (category === activeCategory) button.classList.add('active');
    button.addEventListener('click', () => {
      activeCategory = category;
      updateFilters();
    });
    filterBar.appendChild(button);
  });
}

function matchesSearch(project) {
  const localizedProject = getLocalizedProject(project);
  if (!searchTerm.trim()) return true;
  const query = searchTerm.toLowerCase();
  return [localizedProject.title, localizedProject.category, localizedProject.description, localizedProject.subtitle, localizedProject.linkLabel]
    .filter(Boolean)
    .some(value => value.toLowerCase().includes(query))
    || localizedProject.tags.some(tag => tag.toLowerCase().includes(query))
    || (project.languages || []).some(language => language.toLowerCase().includes(query));
}

function matchesCategory(project) {
  return activeCategory === 'Tous' || getLocalizedProject(project).category === activeCategory;
}

function renderProjects() {
  projectGrid.innerHTML = '';
  const filtered = projects.filter(project => matchesCategory(project) && matchesSearch(project));

  if (!filtered.length) {
    noResults.style.opacity = '1';
    return;
  }

  noResults.style.opacity = '0';

  filtered.forEach(project => {
    const localizedProject = getLocalizedProject(project);
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${localizedProject.image}" alt="${localizedProject.title}" loading="lazy" />
      <div class="project-content">
        <div class="project-meta">
          <span>${localizedProject.category}</span>
          <span>${localizedProject.status}</span>
        </div>
        <h3 class="project-title">${localizedProject.title}</h3>
        <p class="project-description">${localizedProject.description}</p>
        <div class="language-list">
          ${(project.languages || []).map(language => `<span class="language-chip">${language}</span>`).join('')}
        </div>
        <div class="tag-list">
          ${localizedProject.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a class="project-action" href="${localizedProject.link}" target="_blank" rel="noreferrer">
          ${localizedProject.linkLabel}
        </a>
      </div>
    `;
    projectGrid.appendChild(card);
  });
}

function updateFilters() {
  const filterButtons = filterBar.querySelectorAll('.filter-button');
  filterButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.category === activeCategory);
  });
  renderProjects();
}

function updateLanguageContent() {
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === 'en' ? 'Portfolio - Nicolas Tome' : currentLanguage === 'es' ? 'Portafolio - Nicolas Tome' : 'Portfolio - Nicolas Tome';
  document.querySelector('.brand p').textContent = t('brandSubtitle');
  document.querySelector('.nav-links a[href="#projects"]').textContent = t('navProjects');
  document.querySelector('.nav-links a[href="#contact"]').textContent = t('navContact');
  document.querySelector('.hero-copy h1').textContent = t('heroTitle');
  document.querySelector('.hero-copy > p').textContent = t('heroDescription');
  document.querySelector('.hero-actions .button-primary').textContent = t('heroPrimary');
  document.querySelector('.hero-actions .button-secondary').textContent = t('heroSecondary');
  document.querySelector('.overview-card h2').textContent = t('overviewTitle');
  document.querySelector('.overview-card > p').textContent = t('overviewDescription');
  document.querySelector('.stats-grid div:nth-child(1) span').textContent = t('statsProjects');
  document.querySelector('.stats-grid div:nth-child(2) span').textContent = t('statsLanguages');
  document.querySelector('.overview-card h3').textContent = t('chartTitle');
  document.querySelector('.about-section h2').textContent = t('aboutTitle');
  const aboutParagraphs = document.querySelectorAll('.about-section p');
  aboutParagraphs[0].textContent = t('aboutP1');
  aboutParagraphs[1].textContent = t('aboutP2');
  aboutParagraphs[2].textContent = t('aboutP3');
  aboutParagraphs[3].textContent = t('aboutP4');
  aboutParagraphs[4].textContent = t('aboutP5');
  aboutParagraphs[5].textContent = t('aboutP6');
  document.querySelector('.projects-section .eyebrow').textContent = t('projectsLabel');
  document.querySelector('.projects-section h2').textContent = t('projectsHeading');
  searchInput.placeholder = t('searchPlaceholder');
  document.querySelector('.contact-section .section-card h2').textContent = t('contactTitle');
  document.querySelector('.contact-section .section-card p').textContent = t('contactIntro');
  const secondCardTitle = document.querySelectorAll('.contact-section .section-card h2')[1];
  const secondCardIntro = document.querySelectorAll('.contact-section .section-card p')[1];
  if (secondCardTitle) secondCardTitle.textContent = t('contributionsTitle');
  if (secondCardIntro) secondCardIntro.textContent = t('contributionsIntro');
  noResults.textContent = t('noResults');
  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }
  createFilterButtons();
  updateFilters();
  initLanguagesChart();
}

searchInput.addEventListener('input', event => {
  searchTerm = event.target.value;
  renderProjects();
});

if (languageSelect) {
  languageSelect.addEventListener('change', event => {
    currentLanguage = event.target.value;
    localStorage.setItem('portfolio-language', currentLanguage);
    updateLanguageContent();
  });
}

updateLanguageContent();
