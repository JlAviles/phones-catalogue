const express = require('express');
const router  = express.Router();

router.get('/phones', (req, res, next) => {
  res.json(data);
});

module.exports = router;