import React from "react";
import ContactForm from "../components/contactForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <main className="w-full h-full">
      <Navbar />
      <div className="flex justify-center w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(/bg.jpg)"}}>
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
};

export default page;
