const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const ContactRoutes = require("./Routes/ContactRoutes");
app.use("/api",ContactRoutes);

//MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/contactDB")
    .then(() => {console.log('MongoDB connected');})
    .catch((err) =>console.log(err));

    //test route
app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});