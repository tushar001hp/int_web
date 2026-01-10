const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();
router.post('/contact', async (req, res) => {
console.log("API HIT" , req.body);
const { name, email, message } = req.body;
const newContact = new Contact({
name,
email,
message
});
await newContact.save();
res.json({ message: 'Data saved successfully' });
});
module.exports = router;