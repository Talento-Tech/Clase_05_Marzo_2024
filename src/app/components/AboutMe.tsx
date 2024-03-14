import React from "react";

const AboutMe = () => {
  return (
    <section className="text-gray-600 body-font bg-white w-3/4 place-content-center">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-[40px] text-gray-900">
              Sobre mi
            </h1>
          </div>
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                

                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Adriana Martinez Bautista
                </h2>
                <div className="w-12 h-1 bg-blue-900 rounded mt-2 mb-4"></div>
                {/*                 <p className="text-base">
                  Desarrolladora de Software
                </p> */}
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-justify">
              <p className="leading-relaxed text-lg mb-4">
                Desarrolladora de Software con experiencia en el sector de la
                docencia en el área de sistemas, electrónica y mantenimiento de
                equipos, enfocada en tecnologías front-end y backend. Cuento con
                experiencia en proyectos con Html5, Css3, JavaScript, ReactJS,
                Bootstrap, Tailwind, PHP, Git y GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Habilidades
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Aquí encontraras algunas de las habilidades con las que cuento
            actualmente en el mundo de la programación.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-[20%] sm:w-[20%] w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="50px"
                height="50px"
              >
                <path fill="#ffd600" d="M6,42V6h36v36H6z" />
                <path
                  fill="#000001"
                  d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                JavaScript
              </h2>
              <p className="leading-relaxed">60%</p>
            </div>
          </div>

          <div className="p-4 md:w-[20%] sm:w-[20%] w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="50px"
                height="50px"
              >
                <linearGradient
                  id="TQDriqswrKwPOniLrPT12a"
                  x1="16.33"
                  x2="32.293"
                  y1="-2.748"
                  y2="41.109"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#2aa4f4" />
                  <stop offset="1" stop-color="#007ad9" />
                </linearGradient>
                <path
                  fill="url(#TQDriqswrKwPOniLrPT12a)"
                  d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"
                />
                <path
                  fill="#35c1f1"
                  d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"
                />
                <path
                  fill="#fff"
                  d="M33.1,13H24v4h4.9l-0.3,4H24v4h4.4l-0.3,4.5L24,30.9v4.2l7.9-2.6L32.6,21l0,0L33.1,13z"
                />
                <path
                  fill="#d6e0e9"
                  d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4	L19.8,27z"
                />
                <path
                  d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M34.164,12H33.1H24h-9.2h-1.078l0.081,1.075l0.3,4L14.172,18H15.1H24h3.822l-0.15,2H24h-4.6h-1.051 l0.052,1.05l0.2,4L18.649,26H15.8h-1.056l0.058,1.054l0.3,5.5l0.037,0.682l0.649,0.214l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6 l0.644-0.212l0.041-0.677l0.7-11.5l0.5-7.998L34.164,12L34.164,12z M20.761,26H24h3.331l-0.185,2.769L24,29.843l-3.128-1.068 l-0.073-1.815L20.761,26L20.761,26z"
                  opacity=".05"
                />
                <path
                  d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M33.632,12.5H33.1H24h-9.2h-0.539l0.04,0.537l0.3,4l0.035,0.463H15.1H24h4.361l-0.225,3H24h-4.6h-0.526 l0.026,0.525l0.2,4l0.024,0.475H19.6H24h3.866l-0.242,3.634L24,30.372l-3.614-1.234L20.3,26.98L20.28,26.5H19.8h-4h-0.528 l0.029,0.527l0.3,5.5l0.019,0.341l0.324,0.107l7.9,2.6L24,35.626l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.5-7.999 L33.632,12.5L33.632,12.5z"
                  opacity=".07"
                />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                CSS3
              </h2>
              <p className="leading-relaxed">75%</p>
            </div>
          </div>

          <div className="p-4 md:w-[20%] sm:w-[20%] w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="50px"
                height="50px"
              >
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
                <path
                  fill="#FFF"
                  d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                />
                <path
                  fill="#EEE"
                  d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                HTML5
              </h2>
              <p className="leading-relaxed">75%</p>
            </div>
          </div>

          <div className="p-4 md:w-[20%] sm:w-[20%] w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="50px"
                height="50px"
              >
                <path
                  fill="#80deea"
                  d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                />
                <path
                  fill="#80deea"
                  d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                />
                <path
                  fill="#80deea"
                  d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                />
                <circle cx="24" cy="24" r="4" fill="#80deea" />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                React
              </h2>
              <p className="leading-relaxed">40%</p>
            </div>
          </div>

          <div className="p-4 md:w-[20%] sm:w-[20%] w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="50px"
                height="50px"
              >
                <path
                  fill="#e64a19"
                  d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
                />
                <path
                  fill="#7c4dff"
                  d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
                />
                <path
                  fill="#66bb6a"
                  d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
                />
                <path
                  fill="#ff7043"
                  d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
                />
                <circle cx="32" cy="24" r="7" fill="#29b6f6" />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                Figma
              </h2>
              <p className="leading-relaxed">70%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
