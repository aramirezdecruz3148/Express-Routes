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
  })

  .get('/:id', (req, res) => {
    res.send(farts[req.params.id]);
  })

  .put('/:id', (req, res) => {
    const {
      type, 
      description,
      deadly
    } = req.body;

    const updatedFart = {
      type, 
      description,
      deadly
    };

    farts[req.params.id] = updatedFart;
    res.send(farts[req.params.id]);
  })

  .delete('/:id', (req, res) => {
    const deletedFart = farts.splice(req.params.id, 1);
    res.send(deletedFart[0]);
  });
