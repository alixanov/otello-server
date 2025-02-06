const express = require("express");
const cors = require("cors"); // Импортируйте пакет cors
require("dotenv").config();
const connectDB = require("./сonfig/db");
const itemRoutes = require("./routes/schema.router");

// Подключение к базе данных MongoDB
connectDB().catch(err => {
     console.error("Ошибка подключения к базе данных", err.message);
     process.exit(1);
});

const app = express();

// Middleware для обработки JSON
app.use(express.json());

// Включите CORS для всех маршрутов
app.use(cors());

app.use("/api", itemRoutes);

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
     console.log(`Сервер работает на ${PORT}-порту`);
});
