"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";

export default function HomeMenuPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  

  const categorias = [
    "Todos",
    ...new Set(productos.map((p) => p.categoria)),
  ];

  const productosFiltrados =
    categoriaActiva === "Todos"
      ? productos
      : productos.filter(
          (producto) => producto.categoria === categoriaActiva
        );

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <main className="min-h-screen bg-nails-champagne pb-40">
      <Navbar />

      <section className="mx-auto w-full max-w-10xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="text-center">
            <h1 className="--font-title text-6xl text-nails-brown font-bold">
              ¡NUESTROS SERVICIOS!
            </h1>
        
        </div>

       <div className="mt-8 flex flex-wrap justify-center gap-3">
           {categorias.map((categoria) => {
            const activa = categoriaActiva === categoria;

             return (
              <button
               key={categoria}
               onClick={() => setCategoriaActiva(categoria)}
               className={`nails-category-button ${
               activa
               ? "nails-category-button-active"
               : "nails-category-button-inactive"
             }`}
          >
            {categoria}
         </button>
        );
      })}
     </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productosFiltrados.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              cantidad={obtenerCantidad(producto.id)}
            />
          ))}
        </div>
      </section>

    
    </main>
  );
}