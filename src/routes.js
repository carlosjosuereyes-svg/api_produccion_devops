const express = require('express');
const router = express.Router();
const pool = require('./db');
// Endpoint de prueba
router.get('/', (req, res) => {
res.json({ mensaje: 'API funcionando correctamente ' });
});
// Obtener todos los libros
router.get('/libros', async (req, res) => {
try {
const result = await pool.query('SELECT * FROM libros ORDER BY id');
res.json(result.rows);
} catch (error) {
console.error(error);
res.status(500).json({ error: 'Error al consultar los libros' });
}
});
// Agregar un libro
router.post('/libros', async (req, res) => {
const { titulo, autor, anio } = req.body;
if (!titulo || !autor) {
return res.status(400).json({ error: 'Título y autor son obligatorios' });
}
try {
const result = await pool.query(
'INSERT INTO libros (titulo, autor, anio) VALUES ($1, $2, $3) RETURNING *',
[titulo, autor, anio]
);
res.status(201).json(result.rows[0]);
} catch (error) {
console.error(error);
res.status(500).json({ error: 'Error al agregar el libro' });
}
});
// Endpoint de monitoreo (health check)
router.get('/health', async (req, res) => {
  res.json({
    database: 'disconnected',
    timestamp: new Date().toISOString()
  });
});

// Crear un nuevo libro
router.post('/libros', async (req, res) => {
  try {
    const { titulo, autor } = req.body;
    const result = await pool.query(
      'INSERT INTO libros (titulo, autor) VALUES ($1, $2) RETURNING *',
      [titulo, autor]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;