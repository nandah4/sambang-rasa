import { useEffect, useState, useRef } from "react";
import { imageData, faqs, dataEvents } from "./../data/datasBeranda.js";

import videoAsset from "./../assets/asset-video.mov";
import {
  FaEarthEurope,
  FaBookOpenReader,
  FaMapLocationDot,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa6";
import Card from "../components/ui/Card.jsx";
import { FaqItem } from "../components/ui/FaqItem.jsx";

const Beranda = () => {
  const [isImage, setIsImage] = useState(0);
  const [faqNums, setFaqNums] = useState(1);
  const scrollRef = useRef(null);

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

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir == "left" ? -290 : 290,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <main className="w-full flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="w-full">
          <section className="h-[80vh] bg-amber-50 relative overflow-hidden">
            <img
              src={imageData[isImage]}
              className="w-full h-full object-cover"
            />

            <div className="bg-[#4E1F00] absolute opacity-70 top-0 left-0 right-0 h-full"></div>
            <div className="absolute z-10 top-0 right-0 left-0 mx-auto max-w-6xl h-full">
              <div className="flex justify-center flex-col items-start w-full h-full">
                <h1 className="text-white max-w-3xl font-montserrat leading-10 md:leading-12 font-semibold text-2xl base:text-3xl md:text-4xl text-start px-6 lg:px-0">
                  Mengenal Wayang Kulit, Menyelami Warisan Budaya
                </h1>

                <p className="text-white max-w-xl leading-6 md:leading-8 font-montserrat text-start font-light text-[13px] mt-5 px-6 lg:px-0">
                  Wayang bukan sekadar hiburan tradisional—ia adalah cerminan
                  nilai, filosofi, dan sejarah bangsa yang telah hidup selama
                  berabad-abad.
                </p>

                <div className="px-6 lg:px-0">
                  <div
                    className="bg-white px-5 cursor-pointer py-3 rounded-md mt-7"
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
        <section className="max-w-6xl my-16 mx-auto py-5">
          <h2 className="text-2xl mx-3 title-color font-montserrat text-center mb-5 md:mb-9">
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

        {/* News Event */}
        <section className="max-w-full w-full md1:h-[80vh] my-20">
          <div className="mx-4 lg:mx-auto max-w-6xl h-full ">
            <div className="md1:grid md1:grid-cols-5 h-full">
              <div className="col-span-2 flex justify-center flex-start  flex-col">
                <h1 className="font-montserrat text-3xl w-10/12 leading-9">
                  Hidupkan Budaya, Event & Pertunjukan Wayang Terbaru.
                </h1>
                <p className="mt-5 font-montserrat text-[15px] title-color leading-7 pr-8">
                  Ikuti jejak pertunjukan dan kegiatan budaya wayang terkini di
                  berbagai daerah. Dari panggung rakyat hingga festival
                  akbar—temukan acara terdekat dan jadilah bagian dari
                  pelestarian warisan budaya Indonesia.
                </p>
                <div className="flex gap-x-5 my-5 md1:mt-8">
                  <div
                    onClick={() => scroll("left")}
                    className="bg-[#4E1F00]/80 hover:bg-[#4E1F00] cursor-pointer h-12 w-12 rounded-full flex justify-center items-center"
                  >
                    <FaArrowLeft size={20} className="text-white" />
                  </div>
                  <div
                    onClick={() => scroll("right")}
                    className="bg-[#4E1F00]/80 hover:bg-[#4E1F00] cursor-pointer h-12 w-12 rounded-full flex justify-center items-center"
                  >
                    <FaArrowRight size={20} className=" text-white" />
                  </div>
                </div>
              </div>
              <div
                ref={scrollRef}
                className="col-span-3 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
              >
                <div className="flex gap-x-5 w-max items-center justify-center h-full pl-5">
                  {dataEvents.map((e) => (
                    <div className="h-[70vh] w-[50vh] rounded-xl relative overflow-hidden shadow-md">
                      <img
                        src={e.image}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute z-10 left-0 right-0 top-0 bottom-0 bg-gradient-to-t from-black/90 flex justify-start items-end p-5">
                        <div className="">
                          <h3 className="font-montserrat text-white text-base">
                            {e.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full mb-20">
          <div className="max-w-6xl mx-4 xl:mx-auto ">
            <h1 className="text-2xl font-montserrat title-color text-center mb-9">
              Frequently Answer Questions (FAQ)
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
