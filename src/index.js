const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para entender JSON
app.use(express.json());

// Endpoint de monitoreo / Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

// Levantar el servidor (SIEMPRE AL FINAL)
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});