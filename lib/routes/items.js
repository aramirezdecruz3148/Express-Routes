const { Router } = require('express');

const farts = [];

module.exports = Router()
  .post('/', (req, res) => {
    const {
      type,
      description,
      deadly
    } = req.body;

    const fart = {
      type, 
      description,
      deadly
    };

    farts.push(fart);
    res.send(fart);
  })

  .get('/', (req, res) => {
    res.send(farts);
  });
