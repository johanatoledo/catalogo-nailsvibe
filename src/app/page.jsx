"use client";
import {  Sparkles } from "lucide-react";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";
import Footer from "@/components/Footer";

export default function HomeMenuPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const categorias = useMemo(() => {
    return ["Todos", ...new Set(productos.map((p) => p.categoria))];
  }, []);

  
  const productosFiltrados = useMemo(() => {
    if (categoriaActiva === "Todos") return productos;
    return productos.filter((producto) => producto.categoria === categoriaActiva);
  }, [categoriaActiva]);

  return (
    <main className="min-h-screen bg-juliana-black pb-20">
      <Navbar />

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        
      <div className="text-center flex justify-center">
        <div className="flex items-end gap-1.5 ">
          <span className="font-title text-6xl text-juliana block">
            ¡Nuestros
          </span>
          <h1 className="font-title text-6xl text-juliana leading-none flex items-center">
            
            <span>Servicios!</span>
            
            <Sparkles 
              className="w-6 h-6 ml-2 text-juliana-gold opacity-80" 
              strokeWidth={2}
            />
          </h1>
          
        </div>

      </div>

        {/* Botones de Categorías */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categorias.map((categoria) => {
            const activa = categoriaActiva === categoria;

            return (
              <button
                key={categoria}
                onClick={() => setCategoriaActiva(categoria)}
                className={`juliana-category-button   ${
                  activa
                    ? "juliana-category-button-active"
                    : "juliana-category-button-inactive"
                }`}
              >
                {categoria}
              </button>
            );
          })}
        </div>

        {/* Grilla de Servicios */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productosFiltrados.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      </section>
     <Footer />
    </main>
  );
}