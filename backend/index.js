const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.json({ message: "Backend funcionando" });
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
