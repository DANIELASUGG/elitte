
const express = require('express');
const router = express.Router();

// Aqui ficarão as rotas de cadastro, login, verificação, etc

router.get('/', (req, res) => {
  res.json({ message: 'Users route - sugar elite' });
});

module.exports = router;
