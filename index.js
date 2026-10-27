import express from 'express';
import dotenv from 'dotenv';

import connectDB from "./src/config/database.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// static for public
app.use(express.static("public"));


app.get("/healthcheck", (req, res) => {
    res.status(200).json({ message: "Server is healthy" });
});

connectDB((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})


