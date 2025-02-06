const { Router } = require("express");
const router = Router();
const { addProduct, getAllProduct, deletedProduct, updateProduct } = require("../controllers/hotel.controll");

router.post("/add", addProduct);
router.get("/getall", getAllProduct);
router.delete("/deleted/:id", deletedProduct);
router.put("/update/:id", updateProduct); // Исправлено

module.exports = router;
