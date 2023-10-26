const express = require('express');
const router = express.Router();
const grupoController = require('../controllers/grupoController');

router.post('/grupos', grupoController.createGrupo);
router.get('/grupos', grupoController.getGrupo);

module.exports = router;