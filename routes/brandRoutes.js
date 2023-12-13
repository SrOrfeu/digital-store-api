const express = require('express');
const router = express.Router();
const controller = require('../controllers/brandController')

router.get('/', async (req, res) => {
  
    res.send(await controller.listar());
});
router.post('/', async (req, res) => {
    res.send(`cria uma marca: ${JSON.stringify(req.body)}`);
});
router.post('/:id', async (req, res) => {
    res.send(`edita a marca de id ${req.params.id}`);
});
router.delete('/:id', (req, res) => {
    res.send(`deleta a marca de id ${req.params.id}`);
});

module.exports = router;