import Image from "next/image";
import ContactForm from "./components/contactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex item-center bg-cover bg-center" style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg)"}}>
        {/* 
          Portfolio
            Presentación
            Proyectos
            Contacto
        */}
      </div>
      <h1 className="text-lg font-bold">Hola</h1>
      <ContactForm />
    </main>
  );
}
