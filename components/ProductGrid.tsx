"use client";

import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Maçã Fuji",
    price: 8.99,
    category: "Frutas e Verduras",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Pão Francês",
    price: 12.99,
    category: "Padaria",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Leite Integral",
    price: 5.49,
    category: "Laticínios",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Carne Bovina",
    price: 39.90,
    category: "Carnes",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop",
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}