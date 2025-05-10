import { useEffect, useState } from "react";
import { imageData, faqs } from "./../data/datasBeranda.js";

import videoAsset from "./../assets/asset-video.mov";
import {
  FaEarthEurope,
  FaBookOpenReader,
  FaMapLocationDot,
} from "react-icons/fa6";
import Card from "../components/ui/Card.jsx";
import { FaqItem } from "../components/ui/FaqItem.jsx";

const Beranda = () => {
  const [isImage, setIsImage] = useState(0);
  const [faqNums, setFaqNums] = useState(0);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsImage((e) => (e + 1) % imageData.length);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [isImage]);

  const onFaqActive = (id) => {
    setFaqNums((nowId) => (nowId == id ? 0 : id));
  };

  const leftFaqs = faqs.filter((e) => Number(e.id) <= 3);
  const rightFaqs = faqs.filter((e) => Number(e.id) > 3);

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
                      window.scrollTo({ top: 420, behavior: "smooth" })
                    }
                  >
                    <p className="font-montserrat text-[12px] font-medium">
                      Ketahui Lebih Banyak
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Sekilas Section */}
        <section className="max-w-6xl my-14 mx-auto py-5">
          <h2 className="text-2xl mx-3 title-color font-montserrat font-medium text-center mb-5 md:mb-9">
            Sekilas Tentang Wayang
          </h2>
          <div className=" w-full h-full grid grid-cols-1 md1:grid-cols-3 gap-y-7 md1:gap-x-5">
            <Card
              title={"UNESCO"}
              icon={<FaEarthEurope size={27} className="text-white" />}
            >
              Diakui oleh UNESCO sebagai (
              <span className="italic">Intangible Cultural Heritage</span>) di
              tahun 2003, dan "
              <span className="italic">
                Masterpiece of the Oral and Intangible Heritage of Humanity
              </span>
              ".
            </Card>

            <Card
              title={"CERITA"}
              icon={<FaBookOpenReader size={27} className="text-white" />}
            >
              Berkembang dari kisah Ramayana dan Mahabharata asal India. Tokoh
              Punakawan seperti--Semar hingga Bagong disesuaikan dengan budaya
              lokal.
            </Card>

            <Card
              title={"JENIS"}
              icon={<FaMapLocationDot size={27} className="text-white" />}
            >
              Lebih dari 60 jenis Wayang telah diakui menjadi
              <span className="italic"> Intangible Cultural Heritage</span> dan
              lebih dari 100 jenis telah tersebar di seluruh Indonesia
            </Card>
          </div>
        </section>
        {/* Mengajak Section  */}
        <section className="w-full ">
          <div className="md:mx-auto md:max-w-4xl lg:max-w-6xl h-[57vh] md:rounded-2xl bg-[#74512D] w-full overflow-hidden mt-2">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full bg-[#4E1F00]/80">
                <div className="md1:grid-cols-5 md1:grid h-full">
                  <div className="col-span-2 flex items-end p-5 md1:p-14 justify-start border-amber-200">
                    {/* <p className="text-white font-montserrat text-[12px] font-me">
                      Pertunjukan Wayang Kulit oleh{" "}
                      <span className="underline">Dalang Ki Seno Nugroho</span>
                    </p> */}
                  </div>
                  <div className="md1:col-span-3 flex flex-col p-5 md1:p-14">
                    <p className="font-montserrat leading-8 font-semibold text-white text-[18px]">
                      Mari kenali lebih dekat seni pertunjukan wayang dan
                      pelajari bagaimana cerita, suara, dan gerak bersatu
                      menciptakan warisan budaya yang hidup hingga kini.
                    </p>
                    <div className=" mt-5 md:mt-10">
                      <p className="text-white font-medium font-montserrat text-sm">
                        <span className="underline cursor-pointer">
                          Explore
                        </span>{" "}
                        atau{" "}
                        <span className="underline cursor-pointer">
                          Belajar Menjadi Dalang
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <video
                className="w-full h-full object-cover loop"
                src={videoAsset}
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="w-full my-22">
          <div className="max-w-6xl mx-4 xl:mx-auto ">
            <h1 className="text-2xl font-montserrat text-center mb-8">
              Frequently Answer Questions
            </h1>

            <div className="grid grid-cols-1 base:grid-cols-2 gap-x-8">
              <div className="col-span-1 w-full ">
                {leftFaqs.map((e) => (
                  <FaqItem
                    key={e.id}
                    data={e}
                    onClick={onFaqActive}
                    isActive={faqNums}
                  />
                ))}
              </div>

              <div className="col-span-1 w-full">
                {rightFaqs.map((e) => (
                  <FaqItem
                    key={e.id}
                    data={e}
                    onClick={onFaqActive}
                    isActive={faqNums}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="h-dvh w-full"></section>
      </main>
    </>
  );
};
export default Beranda;
