import { get, post } from './api.js';

async function loadTasks() {
    const tasks = await get('/servicemen/tasks');
    console.log('Tareas asignadas:', tasks);
}

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});
