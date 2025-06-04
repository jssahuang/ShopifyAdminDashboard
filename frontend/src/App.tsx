import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Product = {
  id: string;
  title: string;
  totalInventory: number;
  status: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4">Shopify Admin Dashboard</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Inventory</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id} className="text-center">
              <td className="border px-4 py-2">{prod.title}</td>
              <td className="border px-4 py-2">{prod.totalInventory}</td>
              <td className="border px-4 py-2">{prod.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
