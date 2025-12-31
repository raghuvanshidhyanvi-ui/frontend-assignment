const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { createItem, getItems,deleteItem  ,updateItem} = require("../controllers/itemController");

router.post("/", auth, createItem);
router.get("/", auth, getItems);
router.delete("/:id", auth, deleteItem);
router.put("/:id", auth, updateItem); 


module.exports = router;
