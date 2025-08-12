import { createApp } from './components/app.js';
import { projects } from '../data/projects.js';

// Crear la aplicación
const app = document.getElementById('app');
app.appendChild(createApp(projects));