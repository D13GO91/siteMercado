"use client";

import {
  Apple,
  Baby,
  Beef,
  Beer,
  Carrot,
  Cookie,
  Milk,
  Sandwich,
  Shirt,
  Shower,
} from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

const categories = [
  { name: "Frutas e Verduras", icon: Apple },
  { name: "Carnes", icon: Beef },
  { name: "Padaria", icon: Cookie },
  { name: "Laticínios", icon: Milk },
  { name: "Bebidas", icon: Beer },
  { name: "Mercearia", icon: Sandwich },
  { name: "Hortifruti", icon: Carrot },
  { name: "Higiene", icon: Shower },
  { name: "Bebê", icon: Baby },
  { name: "Vestuário", icon: Shirt },
];

export default function Sidebar() {
  return (
    <div className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <ScrollArea className="h-full py-6 px-4">
        <h2 className="font-semibold text-lg mb-4 px-2">Categorias</h2>
        <div className="space-y-1">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant="ghost"
                className="w-full justify-start"
              >
                <Icon className="mr-2 h-4 w-4" />
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