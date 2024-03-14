import React from "react";
import SocialMedia from "../../../constants";
import Image from "next/image";

const ContactForm = () => {
  const githubIcon = SocialMedia.length > 0 ? SocialMedia[0] : null;
  const linkedinIcon = SocialMedia.length > 0 ? SocialMedia[1] : null;

  return (
    <>
      <section className="text-gray-600 body-font relative bg-white w-3/4 place-content-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-[40px] text-gray-900">
              Contactáme
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-[20px]">
            Si te interesa mi perfil no dudes en contactárme. Actualmente me encuentro en la búsqueda de nuevos retos que me ayuden a demostrar mis habilidades. 
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
                  Contactar
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-blue-900">adpmb1995@hotmail.com</a>
                <p className="leading-normal my-5">
                  Bogotá, Colombia.
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a
                    href="https://github.com/AdriMartinezB"
                    className="ml-3 text-gray-500"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {githubIcon && (
                      <Image
                        key={githubIcon.name}
                        src={githubIcon.src}
                        alt={githubIcon.name}
                        width={20}
                        height={20}
                      />
                    )}
                  </a>
                  <a
                    href="https://co.linkedin.com/in/adrianamartinezbautista"
                    className="ml-3 text-gray-500"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {linkedinIcon && (
                      <Image
                        key={linkedinIcon.name}
                        src={linkedinIcon.src}
                        alt={linkedinIcon.name}
                        width={20}
                        height={20}
                      />
                    )}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
