const express = require('express');
const mongoose = require('mongoose');
const app = express();

const EcommerceModel = require('./models/ecommerce');

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', async (req, res) => {
    const  products = new EcommerceModel({name: 'Samsung', price: '100', description: 'Samsung mobile'});
    try {
        await products.save();
    } catch (err) {
        console.log(err)
        
    }
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})