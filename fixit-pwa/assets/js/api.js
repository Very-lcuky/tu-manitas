const API_URL = "https://tu-manitas.onrender.com"; // URL de tu backend en Render

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) throw new Error("Error en la API");
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

