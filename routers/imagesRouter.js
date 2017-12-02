const express = require('express');
const router = express.Router();
const {getAllImages} = require('../controllers/imagesController');

router.get('/',(req,res) => {
  getAllImages((err,data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})


router.get('/api',(req,res) => {
  getAllImages((err,data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

module.exports = router;
