import React from "react";
import SocialMedia from "../../../constants";
import Image from "next/image";

const Footer = () => {
  const githubIcon = SocialMedia.length > 0 ? SocialMedia[0] : null;
  const linkedinIcon = SocialMedia.length > 0 ? SocialMedia[1] : null;

  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Portfolio</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Adriana Martinez Bautista - Made con ♥ en Bogota Colombia, por 
            <a
              href="/"
              className="text-gray-600 ml-1"
            >
              AdriMartinezB
            </a>
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
      </footer>
    </>
  );
};

export default Footer;
