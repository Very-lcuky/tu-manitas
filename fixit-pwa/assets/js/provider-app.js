import { get, post } from './api.js';

async function loadBookings() {
    const bookings = await get('/provider/bookings');
    console.log('Reservas del proveedor:', bookings);
}

document.addEventListener('DOMContentLoaded', () => {
    loadBookings();
});
