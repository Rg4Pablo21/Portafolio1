// Datos del portafolio profesional
let projectsData = [
  {
    name: "Todo List",
    description: "Aplicación de lista de tareas que se está realizando junto con el profesor.",
    url: "https://github.com/Rg4Pablo21/todo_list.git",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Hamburguesería",
    description: "Sitio web donde se tenía que realizar una hamburguesa con componentes en JAVASCRIPT.",
    url: "https://github.com/Rg4Pablo21/Hambur_guesa.git",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "iniciar-App",
    description: "En este proyecto se creó una lista de productos.",
    url: "https://github.com/Rg4Pablo21/iniciar-App.git",
    technologies: ["HTML", "CSS", "JAVASCRIPT"]
  },
  {
      name:"Tiro_al_blanco",
      description:"En este proyecto se realizó un juego para poderlo añadir a un proyecto donde teníamos que hacer que las demás personas pudieran jugarlo en línea al igual que un kahoot.",
      url:"https://github.com/Rg4Pablo21/Tiro_al_blanco.git",
      technologies:["HTML","CSS", "JAVASCRIPT"]
  },
  {
      name:"Comida_Saludable",
      description:"En este proyecto se realizó un juego hecho para niños.",
      url:"https://github.com/Rg4Pablo21/Comida_Saludable.git",
      technologies:["HTML","CSS","JAVASCRIPT"]
  },
  {
      name:"Bo-ton",
      description:"En este proyecto nos enseñaron a cómo crear un botón desde cero con JAVASCRIPT.",
      url:"https://github.com/Rg4Pablo21/Bo-ton.git",
      technologies:["HTML","CSS","JAVASCRIPT"]
  }
];

// Tecnologías/Lenguajes de programación
let technologiesData = [
  { name: 'HTML5',       icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',  color: '#E44D26', level: 85 },
  { name: 'CSS',         icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',  color: '#264DE4', level: 80 },
  { name: 'JavaScript',  icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', color: '#F0DB4F', level: 75 },
  { name: 'MicroPython',      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png', color: '#3776AB', level: 70 },
  { name: 'Java',        icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',   color: '#007396', level: 65 },
  { name: 'MySQL',       icon: 'https://cdn-icons-png.flaticon.com/512/1199/1199128.png', color: '#4479A1', level: 70 }
];

// Aplicaciones/Herramientas que usas
let applicationsData = [
  { name: 'Git',         icon: 'https://cdn-icons-png.flaticon.com/512/4494/4494748.png', color: '#F05032', level: 80 },
  { name: 'GitHub',      icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',  color: '#181717', level: 85 },
  { name: 'Visual Studio Code', icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png', color:'#007ACC', level:95 },
  { name: 'IntelliJ IDEA', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1200px-IntelliJ_IDEA_Icon.svg.png', color: '#000000', level: 75 },
  { name: 'Notion',      icon: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/926fd60f-776a-41e5-9660-57c112abf44d.png?auto=format%2Ccompress&fit=max&w=256&q=75&ch=Width%2CDPR', color: '#000000', level: 75 }
];

// Componentes profesionales
function createHeader() {
  let header = document.createElement('header');
  let container = document.createElement('div');
  container.className = 'container';

  let title = document.createElement('h1');
  title.className = 'header-title';
  title.textContent = 'Pablo Girón - Portafolio';

  let subtitle = document.createElement('p');
  subtitle.className = 'header-subtitle';
  subtitle.textContent = 'Desarrollador de páginas WEB | Estudiante de V Computación';

  container.appendChild(title);
  container.appendChild(subtitle);
  header.appendChild(container);
  return header;
}

// Función para crear una sección de habilidades
function createSkillsGrid(skills, title) {
  let section = document.createElement('section');
  section.className = 'section';

  let container = document.createElement('div');
  container.className = 'container';

  let sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.textContent = title;

  let grid = document.createElement('div');
  grid.className = 'skills-grid';

  skills.forEach(skill => {
      let card = document.createElement('div');
      card.className = 'skill-card';

      let cardInner = document.createElement('div');
      cardInner.className = 'skill-card-inner';

      // Front
      let cardFront = document.createElement('div');
      cardFront.className = 'skill-card-front';

      let imgFront = document.createElement('img');
      imgFront.src = skill.icon;
      imgFront.alt = skill.name;
      imgFront.className = 'skill-icon';

      let name = document.createElement('div');
      name.className = 'skill-name';
      name.textContent = skill.name;

      cardFront.appendChild(imgFront);
      cardFront.appendChild(name);

      // Back
      let cardBack = document.createElement('div');
      cardBack.className = 'skill-card-back';
      cardBack.style.background = skill.color;

      let imgBack = document.createElement('img');
      imgBack.src = skill.icon;
      imgBack.alt = skill.name;
      imgBack.className = 'skill-icon';

      let levelText = document.createElement('div');
      levelText.className = 'skill-name';
      levelText.textContent = `${skill.level}%`;

      cardBack.appendChild(imgBack);
      cardBack.appendChild(levelText);

      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
      card.appendChild(cardInner);
      grid.appendChild(card);
  });

  container.appendChild(sectionTitle);
  container.appendChild(grid);
  section.appendChild(container);
  return section;
}

function createTechnologiesSection() {
  return createSkillsGrid(technologiesData, 'Lenguajes de programación que domino');
}

function createApplicationsSection() {
  return createSkillsGrid(applicationsData, 'Aplicaciones que uso');
}

function createProjectsSection() {
  let section = document.createElement('section');
  section.className = 'section';

  let container = document.createElement('div');
  container.className = 'container';

  let title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = 'Mis Proyectos';

  let grid = document.createElement('div');
  grid.className = 'projects-grid';

  projectsData.forEach(project => {
      let card = document.createElement('div');
      card.className = 'project-card';

      let content = document.createElement('div');
      content.className = 'project-content';

      let projectTitle = document.createElement('h3');
      projectTitle.className = 'project-title';
      projectTitle.textContent = project.name;

      let description = document.createElement('p');
      description.className = 'project-description';
      description.textContent = project.description;

      // Chips de tecnologías
      if (project.technologies) {
          let techContainer = document.createElement('div');
          techContainer.style.display = 'flex';
          techContainer.style.flexWrap = 'wrap';
          techContainer.style.gap = '8px';
          techContainer.style.margin = '15px 0';

          project.technologies.forEach(tech => {
              let techChip = document.createElement('span');
              techChip.textContent = tech;
              techChip.style.padding = '4px 12px';
              techChip.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
              techChip.style.borderRadius = '20px';
              techChip.style.fontSize = '0.85rem';
              techChip.style.color = '#d4af37';
              techContainer.appendChild(techChip);
          });

          content.appendChild(techContainer);
      }

      let link = document.createElement('a');
      link.href = project.url;
      link.className = 'project-link';
      link.innerHTML = '<i class="fab fa-github"></i> Ver en GitHub';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      content.appendChild(projectTitle);
      content.appendChild(description);
      content.appendChild(link);
      card.appendChild(content);
      grid.appendChild(card);
  });

  container.appendChild(title);
  container.appendChild(grid);
  section.appendChild(container);
  return section;
}

// Crear aplicación profesional
function createApp() {
  let container = document.createElement('div');
  container.className = 'container';

  container.appendChild(createHeader());
  container.appendChild(createTechnologiesSection()); // Tecnologías primero
  container.appendChild(createApplicationsSection()); // Aplicaciones después
  container.appendChild(createProjectsSection());     // Proyectos al final

  return container;
}

// Renderizar
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('app').appendChild(createApp());
});