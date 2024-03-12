import React from "react";

const ContactForm = () =>{
    return(
        <>
            <form className="font-bold" action="">
                <input type="text" placeholder="Nombre" name="name" className="w-full mb-1" />
                <input type="email" placeholder="Correo electronico" name="email" className="w-full mb-1" />
                <input type="text" placeholder="Mensaje" name="message" className="w-full mb-1" />
            </form>
            <button> Send Message</button>
            <div className="mb-1">
                Hello, waiting for your contact
            </div>
        </>
        
    )
}

export default ContactForm