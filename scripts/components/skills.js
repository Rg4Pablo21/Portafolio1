const skills = [
    { 
        name: 'HTML5', 
        icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
        color: '#E44D26'
    },
    { 
        name: 'CSS', 
        icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        color: '#264DE4'
    },
    { 
        name: 'JavaScript', 
        icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        color: '#F0DB4F'
    },
    { 
        name: 'Python', 
        icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
        color: '#3776AB'
    },
    { 
        name: 'Git', 
        icon: 'https://cdn-icons-png.flaticon.com/512/4494/4494748.png',
        color: '#F05032'
    },
    { 
        name: 'Notion', 
        icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png',
        color: '#000000'
    },
    { 
        name: 'GitHub', 
        icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
        color: '#181717'
    },
    {
        name:'MySQL',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VofdmPnt1ZYROHeZIHLROMfi5jVQiNq61A&s',
        color: '#000000'
    },
    {
        name:'JAVA',
        icon:'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
        color:'#000000'
    }
 
];

export function createSkillsSection() {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'skills';
    
    const h2 = document.createElement('h2');
    h2.className = 'section-title';
    h2.textContent = 'Lenguajes de Programación';
    h2.style.textAlign = 'center';
    h2.style.marginBottom = '40px';
    
    const subtitle = document.createElement('p');
    subtitle.className = 'section-subtitle';
    subtitle.textContent = 'Lenguajes que e aprendido y aplicaciones que e usado';
    subtitle.style.textAlign = 'center';
    subtitle.style.marginBottom = '40px';
    subtitle.style.color = '#666';
    
    const skillsContainer = document.createElement('div');
    skillsContainer.className = 'skills-container';
    
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.style.transition = 'transform 0.3s';
        
        skillElement.addEventListener('mouseenter', () => {
            skillElement.style.transform = 'translateY(-10px)';
        });
        
        skillElement.addEventListener('mouseleave', () => {
            skillElement.style.transform = 'translateY(0)';
        });
        
        const skillInner = document.createElement('div');
        skillInner.className = 'skill-inner';
        skillInner.style.display = 'flex';
        skillInner.style.flexDirection = 'column';
        skillInner.style.alignItems = 'center';
        skillInner.style.padding = '20px';
        skillInner.style.borderRadius = '10px';
        skillInner.style.backgroundColor = '#fff';
        skillInner.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        skillInner.style.transition = 'all 0.3s';
        
        skillInner.addEventListener('mouseenter', () => {
            skillInner.style.boxShadow = `0 10px 20px ${skill.color}33`;
        });
        
        skillInner.addEventListener('mouseleave', () => {
            skillInner.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        const imgContainer = document.createElement('div');
        imgContainer.style.width = '80px';
        imgContainer.style.height = '80px';
        imgContainer.style.display = 'flex';
        imgContainer.style.alignItems = 'center';
        imgContainer.style.justifyContent = 'center';
        imgContainer.style.marginBottom = '15px';
        imgContainer.style.backgroundColor = '#f8f9fa';
        imgContainer.style.borderRadius = '50%';
        imgContainer.style.padding = '10px';
        
        const img = document.createElement('img');
        img.src = skill.icon;
        img.alt = skill.name;
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.objectFit = 'contain';
        
        const span = document.createElement('span');
        span.textContent = skill.name;
        span.style.fontWeight = '600';
        span.style.color = '#333';
        span.style.marginTop = '10px';
        
        imgContainer.appendChild(img);
        skillInner.appendChild(imgContainer);
        skillInner.appendChild(span);
        skillElement.appendChild(skillInner);
        skillsContainer.appendChild(skillElement);
    });
    
    section.appendChild(h2);
    section.appendChild(subtitle);
    section.appendChild(skillsContainer);
    
    return section;
}