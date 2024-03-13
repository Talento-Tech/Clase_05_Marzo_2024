import React from "react";
import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
    return(
        <main className="w-full h-screen">
            <Navbar />
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/bg.jpg)", opacity: 0.6}}>
            <AboutMe />
            </div>
            <Footer />
        </main>
    )
}

export default page