export function createHeader() {
    let header = document.createElement('header');
    
    let h1 = document.createElement('h1');
    h1.textContent = 'Portafolio-Pablo Girón ';
    
    let p = document.createElement('p');
    p.textContent = 'Desarrollador en programación | V Computación';
    
    header.appendChild(h1);
    header.appendChild(p);
    
    return header;
}