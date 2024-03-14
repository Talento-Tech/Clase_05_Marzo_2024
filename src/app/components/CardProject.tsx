import React from "react";

const CardProject = () => {
  return (
    <section className="text-gray-600 body-font bg-white w-3/4 place-content-center">
      <div className="container px-16 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-[40px] text-gray-900">
            Proyectos
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBukDRDToc9noW2PADweh9QOCW30U-E1UZ5odMvn3QBg&s"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Platzi
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Grupo R5
              </h2>
              <p className="leading-relaxed text-base">
                Desarrollo de proyecto para interfaz en Grupo R5, en la cual se hace el proceso de compra del soat.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://www.usergioarboleda.edu.co/wp-content/uploads/2021/06/Misio%CC%81n-TIC-2022-Universidad-Sergio-Arboleda.jpg"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Misión TIC 2022
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Software para tienda
              </h2>
              <p className="leading-relaxed text-base">
                Se desarrolla un software para tienda en la cual se hace inventario y facturas de venta para una tienda.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPb3e1r9oD-5qWHYTSyjl6dezu-xGJACKdMlCiFoejA&s"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SENA - Bienestar al aprendiz
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Proyecto S.A.T.D.
              </h2>
              <p className="leading-relaxed text-base">
                Software de un sistema de alertas tempranas de deserción para los aprendices del centro de diseño y metrología. 
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://miro.medium.com/v2/resize:fit:1125/0*N1fmHtI8gmkH_2Vu.png"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                GitHub
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Mi GitHub
              </h2>
              <p className="leading-relaxed text-base">
                En mi GitHub encontraras todo lo que he programado y desarrollado, ademas de mis procesos de aprendizaje. 
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/>
        </div>
      </div>
    </div>
  </div>



    </section>
  );
};

export default CardProject;
