import { useEffect, useState } from "react";
import imageData from "./../data/datasBeranda.js";
import SectionHero2 from "./../assets/section2-hero.JPG";
import icons from "./../assets/image.png";
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
          <section className="h-[80vh] bg-amber-50 relative m-2 rounded-3xl overflow-hidden">
            <img
              src={imageData[isImage]}
              className="w-full h-full object-cover"
            />

            <div className="bg-[#4E1F00] absolute opacity-70 top-0 left-0 right-0 h-full"></div>
            <div className="absolute z-10 top-0 right-0 left-0 mx-auto max-w-6xl h-full">
              <div className="flex justify-center flex-col items-start w-full h-full">
                <h1 className="text-white max-w-3xl font-montserrat leading-10 md:leading-12 font-semibold text-4xl md:text-4xl text-start px-6 lg:px-0">
                  Mengenal Wayang Kulit, Menyelami Warisan Budaya
                </h1>

                <p className="text-white max-w-xl leading-6 md:leading-8 font-montserrat text-start font-light text-[13px] mt-5 px-6 lg:px-0">
                  Wayang bukan sekadar hiburan tradisional—ia adalah cerminan
                  nilai, filosofi, dan sejarah bangsa yang telah hidup selama
                  berabad-abad. Melalui web ini, mari kita telusuri kekayaan
                  kisah dan karakter dalam dunia wayang, serta perannya dalam
                  membentuk identitas budaya Indonesia.
                </p>

                <div className="px-6 lg:px-0">
                  <div
                    className="bg-white px-5 cursor-pointer py-3  rounded-lg mt-5"
                    onClick={() =>
                      window.scrollTo({ top: 400, behavior: "smooth" })
                    }
                  >
                    <p className="font-montserrat text-[12px] font-medium">
                      Ketahui Lebih Banyak
                    </p>
                  </div>
                </div>

                {/* <div
                  onClick={() =>
                    window.scrollTo({ top: 320, behavior: "smooth" })
                  }
                  className="h-14 w-10 cursor-pointer z-10 bg-[#FEBA17]/80 flex justify-center items-center rounded-full mt-5 md:mt-8"
                >
                 
                  <motion.div
                    animate={{
                      y: [-5, 10, -5],
                      transition: { duration: 2, repeat: Infinity },
                    }}
                  >
                    <FaArrowDown size={24} className="text-white" />
                  </motion.div>
                </div> */}
              </div>
            </div>
          </section>
        </div>

        {/* Explanation Section */}
        {/* <section className="w-full mt-10 ">
          <div className="max-w-6xl mx-4 md:mx-auto flex justify-center gap-x-3 items-center mb-10">
            <h1 className="md:text-2xl text-xl font-medium font-montserrat">
              Sekilas Tentang Wayang Kulit
            </h1>
          </div>
          <div className="max-h-[65vh] max-w-6xl mx-4 md:mx-auto">
            <div className="h-full w-full  md:grid-cols-3">
              <div className="col-span-2 grid grid-cols-2 gap-3">
                <InfoCard title={"UNESCO"} icon={<FaInfoCircle size={25} />}>
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
        </section> */}

        <section className="max-w-6xl h-[40vh] rounded-3xl bg-[#74512D] border mx-auto w-full overflow-hidden">
          <div className="grid grid-cols-3 p-5">
            <div className="col-span-1 border"></div>
            <div className="col-span-2 border"></div>
          </div>
        </section>

        <section className="h-dvh w-full"></section>
      </main>
    </>
  );
};
export default Beranda;
