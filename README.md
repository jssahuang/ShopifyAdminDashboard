# Shopify Admin Dashboard
A simple tool to allow Shopify sellers to allow Shopify sellers to view their store products, inventory levels, and status using Shopify Admin API. Although this tool is native to Shopify itself, I chose to implement my own version to practice developing server applications calling Shopify Admin API. In the future, I plan to expand upon this project to show additional analytics that may not be present in the native Shopify Dashboard itself. 

**Features**
- View a list of products from your Shopify store
- Display product details including inventory and status
- Fetch data from Shopify's GraphQL Admin API
- UI built with React and Tailwind CSS

**Tech Stack**
- Frontend: React, Tailwind CSS, Axios
- Backend: Node.js, Express
- Backend APIs: Shopify Admin GraphQL API

**Running Locally**
Prerequisites: Node.js v23.11.0 recommended, a Shopify store with Admin API access and admin API key

First, modify backend/.env file with your shop name and your admin api key of your Shopify store.

**Running the Backend**
Note that the backend must be started before the frontend. 

The backend will start locally on http://localhost:4000 exposing an endpoint /api/products to fetch product data.
```bash
cd backend
npm install
node index.js
```

**Running the Frontend**
The following commands will open a React app in the browser at http://localhost:3000
```bash
cd frontend
npm install
npm start
```

**Future Development**
In the future I plan to incorporate other APIs such as Shopify Storefront API to help manage Shopify storefront, and gain skills in Shopify Liquid, Shopify Hydrogen, Shopify App Development, Shopify Data Migration, Shopify ERP Integrations, and Migrations to Shopify from other platforms.