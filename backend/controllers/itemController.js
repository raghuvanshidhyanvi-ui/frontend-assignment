const Item = require("../models/Item");

exports.createItem = async (req, res) => {
  try {
    const item = await Item.create({
      title: req.body.title,
      user: req.user.id // ✅ only the ID
    });
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({ user: req.user.id }); // ✅ filter by user ID
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    // find the item by _id and user
    const item = await Item.findOne({ _id: req.params.id, user: req.user.id });
    if (!item) return res.status(404).json({ message: "Item not found" });

    // delete using deleteOne
    await Item.deleteOne({ _id: req.params.id });

    res.json({ message: "Item deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { title } = req.body;
    const item = await Item.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id }, // ensure user owns the item
      { title },
      { new: true } // return updated document
    );
    if (!item) return res.status(404).json({ message: "Item not found" });

    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};






