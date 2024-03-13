import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <Navbar />
      <div className="flex item-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/bg.jpg)", opacity: 0.5}}>
      </div>
    </main>
    
  );
} 