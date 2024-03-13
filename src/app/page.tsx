import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full h-screen relative">
      <Navbar />
      <div className="flex item-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/bg.jpg)", opacity: 0.5}}>
      </div>
      <Footer />
    </main>
    
  );
} 