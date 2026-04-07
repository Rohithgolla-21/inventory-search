const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

// Sample Data
const inventory = [
  { id: 1, productName: "Chair", category: "Furniture", price: 100 },
  { id: 2, productName: "Table", category: "Furniture", price: 300 },
  { id: 3, productName: "Laptop", category: "Electronics", price: 50000 },
  { id: 4, productName: "Phone", category: "Electronics", price: 20000 },
  { id: 5, productName: "Pen", category: "Stationery", price: 10 }
];

// Search API
app.get("/search", (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  let results = inventory;

  // Search by name
  if (q) {
    results = results.filter(item =>
      item.productName.toLowerCase().includes(q.toLowerCase())
    );
  }

  // Filter by category
  if (category) {
    results = results.filter(item => item.category === category);
  }

  // Invalid price check
  if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
    return res.status(400).json({ message: "Invalid price range" });
  }

  // Min price filter
  if (minPrice) {
    results = results.filter(item => item.price >= Number(minPrice));
  }

  // Max price filter
  if (maxPrice) {
    results = results.filter(item => item.price <= Number(maxPrice));
  }

  res.json(results);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});