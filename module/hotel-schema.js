const { Schema, model } = require("mongoose");

const HotelSchema = new Schema({
     rasm: {
          type: [String],
          required: true,
     },
     icon: {
          type: String,
          required: true,
     },
     nomi: {
          type: String,
          required: true,
     },
     manzil: {
          type: String, // Адрес (оставил строкой)
          required: true,
     },
     malumoti: {
          type: String, // Тип информации (оставил строкой)
          required: true,
     },
     narxi: {
          type: Number, // Цена
          required: true,
     },
     joylashuv: {
          type: String, // Тип информации (оставил строкой)
          required: true,
     },
     // ✅ Новые поля для удобств отеля
     wifi: {
          type: Boolean,
          default: false, // По умолчанию выключено
     },
     parking: {
          type: Boolean,
          default: false,
     },
     breakfast: {
          type: Boolean,
          default: false,
     },
     pool: {
          type: Boolean,
          default: false,
     },
     gym: {
          type: Boolean,
          default: false,
     },
});

module.exports = model("Hotel", HotelSchema);
