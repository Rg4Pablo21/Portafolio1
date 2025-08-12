import { createHeader } from './header.js';
import { createSkillsSection } from './skills.js';
import { createProjectsSection } from './projects.js';

export function createApp(projects) {
    let fragment = document.createDocumentFragment();
    
    fragment.appendChild(createHeader());
    fragment.appendChild(createSkillsSection());
    fragment.appendChild(createProjectsSection(projects));
    
    let container = document.createElement('div');
    container.className = 'container';
    container.appendChild(fragment);
    
    return container;
}