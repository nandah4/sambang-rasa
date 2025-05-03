import { useEffect, useState } from "react";
import imageData from "./../data/datasBeranda.js"

const Beranda = () => {

  const [isImage, setIsImage] = useState(0);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsImage((e) => (e + 1) % imageData.length);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [isImage]);

  const nextImage = () => {
    if (isImage < imageData.length) {
      setIsImage((e) => e + 1);
    }
  };

  const prevImage = () => {
    if (isImage > 0) {
      setIsImage((e) => e - 1);
    }
  };

  return (
    <>
      <main className="w-full flex justify-center items-center">
        {/* Hero Section */}
        <div className=" w-full">
          <section className="h-[70vh] w-full bg-amber-50 relative">
            <img
              src={imageData[isImage]}
              className="w-full h-full object-cover"
            />
            <div className="bg-[#4E1F00] absolute opacity-70 top-0 left-0 right-0 h-full"></div>
            <div className="absolute z-10 top-0 right-0 left-0 mx-auto max-w-7xl h-full">
              <div className="flex justify-center flex-col items-center h-full">
                <h1 className="text-white font-montserrat font-semibold text-4xl">
                  Mengenal Wayang, Menyelami Warisan Budaya
                </h1>
                <div className="w-full">

                </div>
              </div>
            </div>
            {/* <div className="relative border">
              <div className="w-[420px] rotate-12 h-[480px]  absolute bottom-50 left-0 right-0 overflow-hidden">
                <img
                  src={Hero}
                  className=" object-contain w-full h-full scale-110"
                />
              </div>
              <div className="w-[380px] rotate-12 h-[440px]  absolute bottom-80 right-0 overflow-hidden">
                <img
                  src={Hero}
                  className=" object-contain w-full h-full scale-110"
                />
              </div>
            </div> */}

            <div></div>
          </section>
        </div>
      </main>
    </>
  );
};
export default Beranda;
