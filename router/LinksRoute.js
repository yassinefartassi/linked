const express = require("express");
const Link = require("../schemas/LinksSchema");

const router = express.Router();

// Save new Links
router.post("/", async (req, res) => {
  try {
    const { link, description } = req.body;

    if (!link) {
      return res.status(400).send({
        message: "Send all required fields: link",
      });
    }

    const newLink = { link, description };

    const linkDoc = await Link.create(newLink);

    res.status(201).send(linkDoc);
  } catch (error) {
    console.error("Error creating link:", error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get All links
router.get("/", async (req, res) => {
  try {
    const links = await Link.find({});

    res.status(200).json({
      count: links.length,
      data: links,
    });
  } catch (error) {
    console.error("Error fetching links:", error.message);
    res.status(500).send({ message: error.message });
  }
});

// Find by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const link = await Link.findById(id);

    if (!link) {
      return res.status(404).send({ message: "Link not found" });
    }

    res.status(200).json(link);
  } catch (error) {
    console.error("Error fetching link by ID:", error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
