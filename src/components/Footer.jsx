import Link from 'next/link';

export default function Footer() {
  const websiteUrl = "https://tu-sitio-web.com"; 

  return (
    <footer className="py-6 px-4 bg-juliana-gray/60 mt-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 text-xs text-gray-400">
        <span>Desarrollado por</span>
        <Link 
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm inline-flex items-center gap-0.5 hover:opacity-80 transition-opacity duration-200"
        >
          <span className="text-red-700">&lt;</span>
          <span className="text-juliana-aqua font-bold">Toledana</span>
          <span className="text-juliana-aqua font-bold">Dev</span>
          <span className="text-red-700">&#47;&gt;</span>
        </Link>
      </div>
    </footer>
  );
}