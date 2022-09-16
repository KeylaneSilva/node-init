const express = require('express')
const router = express.Router();

router.get('/rota1', function(req, res){
  res.send('Entrou na Rota 1');
})

router.get('/rota2', (req, res) => {
  res.send('Entrou na Rota 2');
})

module.exports = router;