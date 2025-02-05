// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Data (replace with a database in production)
const data = {
    about: {
        title: "About INUKA Fragrances",
        content: "INUKA Fragrances is more than a fragrance company; it is a gateway to financial independence and personal growth. We offer an extensive range of high-quality fragrances, skincare, and home care products that provide luxury and value.",
        image: "images/image2.jpg"
    },
    benefits: [
        "Start your own business with minimal investment.",
        "Earn income through sales and referrals.",
        "Enjoy exclusive training, mentorship, and resources.",
        "Be part of a supportive and empowering community.",
        "Achieve personal growth and financial freedom."
    ],
    contact: {
        message: "Ready to start your INUKA journey? Contact me today to learn more, get started, or explore our product range.",
        whatsapp: "https://wa.me/c/27744872877"
    },
    gallery: [
        "images/image1.jpg",
        "images/image7.jpg",
        "images/image3.jpg",
        "images/image4.jpg",
        "images/image5.jpg",
        "images/image6.jpg",
        "images/image8.jpg"
    ]
};

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the INUKA API!");
});

app.get("/about", (req, res) => {
    res.json(data.about);
});

app.get("/benefits", (req, res) => {
    res.json(data.benefits);
});

app.get("/contact", (req, res) => {
    res.json(data.contact);
});

app.get("/gallery", (req, res) => {
    res.json(data.gallery);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
