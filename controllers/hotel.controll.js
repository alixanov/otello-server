const HotelSchema = require("../module/hotel-schema");

// Добавление продукта
const addProduct = async (req, res) => {
     const { rasm } = req.body;

     if (!Array.isArray(rasm) || rasm.length === 0) {
          return res.status(400).json({ message: "Kamida bitta rasm qo'shing." });
     }

     try {
          const newProduct = new HotelSchema(req.body);
          await newProduct.save();
          res.status(201).json(newProduct);
     } catch (error) {
          res.status(500).json({ message: "Malumot qoshishda xatolik bor", error });
     }
};


// Получение всех продуктов
const getAllProduct = async (req, res) => {
     try {
          const products = await HotelSchema.find();
          res.status(200).json(products);
     } catch (error) {
          res.status(500).json({ message: "Малумотларни юклашда хатолик бор", error });
     }
};

// Удаление продукта
const deletedProduct = async (req, res) => {
     try {
          const { id } = req.params;
          const deletedProduct = await HotelSchema.findByIdAndDelete(id);
          if (!deletedProduct) {
               return res.status(404).json({ message: "Маҳсулот топилмади" });
          }
          res.status(200).json({ message: "Маҳсулот муваффақиятли ўчирилди" });
     } catch (error) {
          res.status(500).json({ message: "Маҳсулотни ўчиришда хатолик", error });
     }
};

// Обновление продукта
const updateProduct = async (req, res) => {
     try {
          const { id } = req.params;
          const { rasm, icon, nomi, manzil, malumoti, narxi, wifi, parking, breakfast, pool, gym } = req.body;

          // Янгиланишни амалга ошириш
          const updatedProduct = await HotelSchema.findByIdAndUpdate(
               id,
               { rasm, icon, nomi, manzil, malumoti, narxi, wifi, parking, breakfast, pool, gym },
               { new: true }
          );

          if (!updatedProduct) {
               return res.status(404).json({ message: "Маҳсулот топилмади" });
          }

          res.status(200).json(updatedProduct);
     } catch (error) {
          res.status(500).json({ message: "Маҳсулотни янгилашда хатолик бор", error });
     }
};

module.exports = { addProduct, getAllProduct, deletedProduct, updateProduct };
