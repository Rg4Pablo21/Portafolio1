export function createProjectsSection(projects) {
    let section = document.createElement('section');
    section.className = 'section';
    
    let title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = 'Proyectos';
    
    let grid = document.createElement('div');
    grid.className = 'projects-grid';
    
    projects.forEach(project => {
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
        
        let link = document.createElement('a');
        link.href = project.url;
        link.className = 'project-link';
        link.textContent = 'Ver en GitHub';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        content.appendChild(projectTitle);
        content.appendChild(description);
        content.appendChild(link);
        card.appendChild(content);
        grid.appendChild(card);
    });
    
    section.appendChild(title);
    section.appendChild(grid);
    
    return section;
}