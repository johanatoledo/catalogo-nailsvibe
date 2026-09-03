import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";


export default function Navbar() {
  
  return (
    <header className="sticky top-0 z-30   bg-nails-champagne/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <Link href="/" >
          <Image
             src="/branding/logonails.png"
             alt="Nails Vibe"
             width={200}
             height={200}
             className="object-contain rounded-full "
          />
        </Link>

        <div className="flex items-center gap-4 text-sm ">

        
        

        </div>
      </nav>
    </header>
  );
}