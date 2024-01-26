const express = require('express');
const router = express.Router();
const cardsController = require('../controller/card');

//for creating cards
router.post("/add-cards",cardsController.addCards);
//for fetching all cards
router.get("/cards",cardsController.getAllCards);
//for fetching particular  card
router.get("/card/:id",cardsController.getCard);
//Update Card
router.put("/cards/:id",cardsController.updateCards);
//Delete Card
router.delete("/cards/:id",cardsController.deleteCards);

exports.routes = router;  