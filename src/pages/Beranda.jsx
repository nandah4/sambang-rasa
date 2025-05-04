import { useEffect, useState } from "react";
import imageData from "./../data/datasBeranda.js";
import SectionHero2 from "./../assets/section2-hero.JPG";
import { FaArrowDown } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

import { motion } from "framer-motion";
import InfoCard from "../components/ui/InfoCard.jsx";

const Beranda = () => {
  const [isImage, setIsImage] = useState(0);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsImage((e) => (e + 1) % imageData.length);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [isImage]);

  return (
    <>
      <main className="w-full flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="w-full">
          <section className="h-[65vh] bg-amber-50 relative m-2 rounded-3xl overflow-hidden">
            <img
              src={imageData[isImage]}
              className="w-full h-full object-cover"
            />

            <div className="bg-[#4E1F00] absolute opacity-70 top-0 left-0 right-0 h-full"></div>
            <div className="absolute z-10 top-0 right-0 left-0 mx-auto max-w-7xl h-full">
              <div className="flex justify-center flex-col items-center h-full">
                <h1 className="text-white font-montserrat font-medium text-3xl md:text-4xl text-center px-6 lg:px-0">
                  Mengenal Wayang, Menyelami Warisan Budaya
                </h1>

                <p className="text-white font-montserrat text-center font-light text-[13px] md:text-sm mt-6 px-6 lg:px-0 max-w-3xl">
                  Wayang bukan sekadar hiburan tradisional—ia adalah cerminan
                  nilai, filosofi, dan sejarah bangsa yang telah hidup selama
                  berabad-abad. Melalui web ini, mari kita telusuri kekayaan
                  kisah dan karakter dalam dunia wayang, serta perannya dalam
                  membentuk identitas budaya Indonesia.
                </p>

                <div
                  onClick={() =>
                    window.scrollTo({ top: 320, behavior: "smooth" })
                  }
                  className="h-14 w-10 cursor-pointer z-10 bg-[#FEBA17]/80 flex justify-center items-center rounded-full mt-5 md:mt-8"
                >
                  {/* <p className="">Discover</p> */}
                  <motion.div
                    animate={{
                      y: [-5, 10, -5],
                      transition: { duration: 2, repeat: Infinity },
                    }}
                  >
                    <FaArrowDown size={24} className="text-white" />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Explanation Section */}
        <section className="w-full mt-10 ">
          <div className="max-w-6xl mx-4 md:mx-auto flex gap-x-3 items-center mb-5">
            <div className="md:w-40 w-15 h-1 bg-[#FEBA17] rounded-xl">

            </div>
            <h1 className="md:text-2xl text-xl font-medium font-montserrat">Sekilas Tentang Wayang</h1>
          </div>
          <div className="max-h-[65vh] max-w-6xl mx-4 md:mx-auto">
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-1 w-full h-[60vh] md:h-[65vh] overflow-hidden">
                <div className="w-full h-[55vh]">
                  <img
                    src={SectionHero2}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <p className="font-montserrat text-sm font-medium underline">
                    Tokoh Punakawan (Petruk)
                  </p>
                </div>
              </div>

              <div className="col-span-2 grid grid-cols-2 gap-3">
                <InfoCard title={"UNESCO"} onIconClick={""}>
                  Diakui oleh UNESCO sebagai Warisan Budaya Tak Benda (
                  <span className="italic">Intangible Cultural Heritage</span>)
                  pada tahun 2003, dan kemudian diangkat sebagai "
                  <span className="italic">
                    Masterpiece of the Oral and Intangible Heritage of Humanity
                  </span>
                  "
                </InfoCard>

                <InfoCard title={"JENIS"} onIconClick={""}>
                  Tercatat{" "}
                  <span className="font-semibold">60 jenis wayang</span> dalam
                  data WBTb Indonesia antara lain, Wayang Garing, Wayang Beber
                  Kyai Remeng, Wayang Beber Pacitan, Wayang Kulit Betawi, Wayang
                  Suket, Wayang Thengul, ...
                </InfoCard>

                <InfoCard title={"DALANG"} onIconClick={""}>
                  Diartikan sebagai seseorang yang mempunyai keahlian khusus
                  memainkan boneka wayang (ndalang). Seorang pemimpin atau
                  pemain utama dalam pertunjukan Wayang
                </InfoCard>

                <InfoCard title={"CERITA"} onIconClick={""}>
                  Berkembang dari kisah Ramayana dan Mahabharata asal India,
                  namun disesuaikan dengan budaya lokal. Tokoh Punakawan—seperti
                  Semar, Petruk, Gareng, dan Bagong—hanya ada dalam versi Jawa
                </InfoCard>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="relative w-full" id="section2">
          <div className="max-w-5xl xl:max-w-6xl shadow-md bg-white lg:h-[45vh] absolute top-[-80px] md:top-[-140px] left-0 right-0 mx-10 lg:mx-auto rounded-2xl">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-12 px-6 md:px-10 py-7 md:py-3 overflow-hidden">
              <div className="h-60 md:h-full w-full md:col-span-4 overflow-hidden">
                <img
                  src={SectionHero2}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="md:pl-10 h-full flex-col col-span-8 justify-center flex gap-y-2">
                <div>
                  <small className="font-montserrat text-xs">
                    <span className="text-red-500 mr-1 font-semibold">*</span>
                    Nama tokoh pada gambar disamping Semar
                  </small>
                </div>

                <h1 className="text-2xl font-montserrat font-semibold mb-3">
                  Sekilas Wayang Kulit
                </h1>
                <p className="font-montserrat text-sm text-justify leading-7">
                  Wayang kulit adalah seni tradisional Jawa dan Bali yang
                  berkembang sejak era Kerajaan Kahuripan. Cerita wayang diambil
                  dari Ramayana, Mahabharata, serta kisah lokal dan religius.
                  Pada 7 November 2003, wayang kulit diakui{" "}
                  <span className="font-semibold line">UNESCO </span>
                  sebagai Warisan Budaya Takbenda Dunia.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="h-dvh w-full"></section>

        <section className="h-dvh w-full"></section>
      </main>
    </>
  );
};
export default Beranda;
