const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/api/products", async (req, res) => {
  const endpoint = `https://${process.env.SHOP}.myshopify.com/admin/api/2024-04/graphql.json`;
  
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            totalInventory
            status
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_KEY
      },
      body: JSON.stringify({ query })
    });

    const data = await response.json();
    res.json(data.data.products.edges.map(edge => edge.node));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
