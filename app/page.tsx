import { ProductGrid } from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo ao SuperMart</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Encontre os melhores produtos com os melhores preços
      </p>
      <ProductGrid />
    </div>
  );
}