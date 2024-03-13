import React from "react";
import SocialMedia from "../../../constants";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const portfolioIcon = SocialMedia.length > 0 ? SocialMedia[3] : null;
  const socialMediaIcons = SocialMedia.slice(0, 3);

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {portfolioIcon && (
              <Image
                key={portfolioIcon.name}
                src={portfolioIcon.src}
                alt={portfolioIcon.name}
                width={30}
                height={30}
              />
            )}
            <span className="ml-3 text-xl">Portfolio</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/skills" className="text-lg mr-5 hover:text-gray-900">My Projects</Link>
            <Link href="/contactMe" className="text-lg mr-5 hover:text-gray-900">Contact me</Link>
          </nav>
          <div className="flex flex-row gap-3 items-center">
              {socialMediaIcons.map((social) => (
              <Image 
                key={social.name} 
                src={social.src} 
                alt={social.name} 
                width={30} 
                height={30} 
              />
              ))}
          </div>
          
        </div>
      </header>
    </>
  );
};

export default Navbar;
