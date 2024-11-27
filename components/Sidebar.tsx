"use client";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

const categories = [
  { name: "Frutas e Verduras" },
  { name: "Carnes" },
  { name: "Padaria" },
  { name: "Laticínios" },
  { name: "Bebidas" },
  { name: "Mercearia" },
  { name: "Hortifruti" },
  { name: "Higiene" },
  { name: "Bebê" },
  { name: "Vestuário" },
];

export default function Sidebar() {
  return (
    <div className="w-52 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <ScrollArea className="h-full py-6 px-4">
        <h2 className="font-semibold text-lg mb-4 px-2">Categorias</h2>
        <div className="space-y-1">
          {categories.map((category) => {
            return (
              <Button
                key={category.name}
                variant="ghost"
                className="w-full justify-start"
              >
                {category.name}
              </Button>
            );
          })}
        </div>
        <Separator className="my-4" />
      </ScrollArea>
    </div>
  );
}