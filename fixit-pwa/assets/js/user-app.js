import { fetchData } from './api.js';

async function cargarUsuarios() {
  const usuarios = await fetchData("/usuarios"); // Endpoint de tu backend
  console.log(usuarios);
  // Aquí pones la lógica para llenar la UI
}

cargarUsuarios();
