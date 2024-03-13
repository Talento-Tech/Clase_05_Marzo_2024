import React from "react";
import SocialMedia from "../../../constants";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const portfolioIcon = SocialMedia.length > 0 ? SocialMedia[3] : null;

  return (
    <>
      <div>
        {/* <Image
          src = "/favicon.ico"
          alt = "logo"
          width = {5}
          height = {5}
          className = "w-full h-full"
        /> */}
      </div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a 
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
            rel="noopener noreferrer"
          >
            {portfolioIcon && (
              <Image
                key={portfolioIcon.name}
                src={portfolioIcon.src}
                alt={portfolioIcon.name}
                width={30}
                height={30}
              />
            )}
            <span className="ml-3 text-xl">AdriMartinezB</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/aboutMe" className="text-lg mr-5 hover:text-gray-900">
              About me
            </Link>
            <Link
              href="/contactMe"
              className="text-lg mr-5 hover:text-gray-900"
            >
              Contact me
            </Link>
            <Link
              href="/projects"
              className="text-lg mr-5 hover:text-gray-900"
            >
              Projects
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
