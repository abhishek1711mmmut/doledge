const Cards = require("../model/card");

//! create card
exports.addCards = async (req, res) => {
  try {
    const { header, description, image } = req.body;

    const existingcard = await Cards.findOne({ header });

    if (existingcard) {
      return res.status(400).json({
        status: "failed",
        message: "card with the same header already exists",
      });
    }

    if (!header || !description || !image) {
      return res
        .status(400)
        .json({ status: "failed", message: "All fields are required" });
    }
    const newCards = new Cards({
      header,
      description,
      image,
    });

    await newCards.save();

    res.status(201).json({ message: "Cards added successfully", newCards });
  } catch (error) {
    console.error("Error adding Cards:", error);
    res.status(500).json({ status: "failed", error: "Internal server error" });
  }
};
//! get all cards
exports.getAllCards = async (req, res) => {
  try {
    const cards = await Cards.find();
    if (!!cards || cards.length != 0) {
      res.status(201).json({
        status: "success",
        message: "Cards displayed successfully",
        cards,
      });
    } else {
      res.json({
        status: "failed",
        message: "No Cards where found",
      });
    }
  } catch (error) {
    console.error("Error fetching Cards:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
//! update card
exports.updateCards = async (req, res) => {
  try {
    const { id } = req.params;
    const { header, description, image } = req.body;

    const updatedCards = await Cards.findByIdAndUpdate(
      id,
      { header, description, image },
      { new: true } // Return the updated document
    );

    if (!updatedCards) {
      return res
        .status(404)
        .json({ status: "failed", message: "Cards not found" });
    }

    res.status(200).json({
      status: "success",
      message: "Card updated successfully",
      updatedCards,
    });
  } catch (error) {
    console.error("Error updating Cards:", error);
    res.status(500).json({ status: "failed", error: "Internal server error" });
  }
};
//! delete card
exports.deleteCards = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCards = await Cards.findByIdAndDelete(id);

    if (!deletedCards) {
      return res
        .status(404)
        .json({ status: "failed", message: "Cards not found" });
    }

    res.status(200).json({
      status: "success",
      message: `${deletedCards.header} card deleted successfully`,
      deletedCards,
    });
  } catch (error) {
    console.error("Error deleting Cards:", error);
    res.status(500).json({ status: "failed", error: "Internal server error" });
  }
};
//! get  particular card details by id
exports.getCard = async (req, res) => {
  try {
    const { id } = req.params;

    const card = await Cards.findById(id);

    if (!card) {
      return res
        .status(404)
        .json({ status: "failed", message: "Card not found" });
    }

    res.status(200).json({
      status: "success",
      message: `${card.header}details fetched`,
      card,
    });
  } catch (error) {
    console.error("Error getting Cards:", error);
    res.status(500).json({ status: "failed", error: "Internal server error" });
  }
};
