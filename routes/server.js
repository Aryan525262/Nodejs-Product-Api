const express = require("express");
const router = express.Router();
let products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 499 },
];

// GET /products
router.get('/products', (req, res) => {
  res.json(products);
});

// POST /products
router.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({ error: 'Name and price are required.' });
  }

  const newProduct = {
    id: Date.now(), // simple ID generator
    name,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// DELETE /products/:id
router.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Product not found.' });
  }
  const deletedProduct = products.splice(index, 1)[0];
  console.log(products);
  res.json(deletedProduct);
});

module.exports = router;