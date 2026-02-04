const express = require('express');
const contact =require('../Models/Contact');
const router = express.Router();
router.post('/contact', async (req, res) => {
console.log("API HIT" , req.body);
const { name, email, message } = req.body;
const newContact = new contact({
name,
email,
message
});
await newContact.save();
res.json({ message: 'Data saved successfully' });
});
module.exports = router;