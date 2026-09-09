import Image from "next/image";


export default function ProductCard({ producto, cantidad = 0,}) {
  const whatsappNumber = "51932297805"; 
  
  const precioTotal = Number(producto.precio).toFixed(2);
  const montoReserva = (Number(producto.precio) * 0.20).toFixed(2);

  const mensajeCustom = `¡Hola! Me gustaría agendar una cita para el servicio:
 *${producto.nombre}*
 *Precio total:* S/ ${precioTotal}
 *Monto de reserva (20%):* S/ ${montoReserva}

¿Tienen disponibilidad de horarios?`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensajeCustom)}`;
  
  return (
    <article className="group juliana-product-card juliana-fade-in">
  <div className="relative h-60 w-full overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <Image
      src={producto.imagen}
      alt={producto.nombre}
      fill
      className="object-cover transition-transform  duration-700 group-hover:scale-110"
      sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw"
    />

    <div className="juliana-product-image-overlay" />
  </div>

  <div className="p-2">
    <h3 className="mt-4 juliana-title text-xl">
      {producto.nombre}
    </h3>
   <span className="font-bold">INCLUYE:</span>
    <p className="mt-3 min-h-14 text-sm text-aline-justify leading-relaxed text-juliana-gray-900">
      {producto.descripcion}
    </p>

    <div className="mt-2 flex items-center justify-between gap-3">
      {/* Precio Total del Servicio */}
      <div className="flex items-center justify-between">
       <span className="text-xs font-bold">PRECIO TOTAL: 
        <p className="juliana-product-price text-sm  opacity-80">
           S/ {Number(producto.precio).toFixed(2)}
          </p>
          </span>
        
      </div>

      {/* Monto de Reserva (20%) */}
      <div className="flex items-center justify-between font-semibold">
       <span className="text-xs text-juliana-gray">RESERVA (20%):
        <p className="text-base text-juliana-gold font-bold">
          S/ {(Number(producto.precio) * 0.20).toFixed(2)}
       </p>
       </span>
       
  </div>

         <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="juliana-button-add inline-flex items-center justify-center "
          >
            Agendar
          </a>
      
    </div>

  </div>
</article>
  );
}