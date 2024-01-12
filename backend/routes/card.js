const express = require('express');
const router = express.Router();
const cardsController = require('../controller/card');

//for fetching cards
router.get("/cards",cardsController.getAllCards);
//for creating cards
router.post("/add-cards",cardsController.addCards);
//Update Card
router.put("/cards/:id",cardsController.updateCards);
//Delete Card
router.delete("/cards/:id",cardsController.deleteCards);

exports.routes = router;     