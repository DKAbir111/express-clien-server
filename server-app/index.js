const express = require('express');
const cors = require('cors');
const products = require('./products.json')
const app = express();
const port = 5001;
app.use(cors())
app.get('/', (req, res) => {
    res.send("Hello this is a simple server")
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.get('/product/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send(products.find(product => product.id === id))
})
app.get('/products', (req, res) => {
    res.send(products)
})