import { useEffect, useState, useRef, React } from "react";
import {
  imageData,
  faqs,
  dataEvents,
  testimonials,
} from "./../data/datasBeranda.js";

import videoAsset from "./../assets/asset-video.mov";
import {
  FaEarthEurope,
  FaBookOpenReader,
  FaMapLocationDot,
  FaArrowRight,
  FaArrowLeft,
  FaArrowDown,
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

  const leftFaqs = faqs.filter((e) => Number(e.id) <= 2);
  const rightFaqs = faqs.filter((e) => Number(e.id) > 2);

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
      <main className="w-full">
        {/* Hero Section */}
        <section className="h-[80vh] bg-amber-50 relative overflow-hidden">
          <img
            src={imageData[isImage]}
            className="w-full h-full object-cover"
          />

          <div className="bg-[#4E1F00] absolute opacity-70 top-0 left-0 right-0 h-full"></div>
          <div className="absolute z-10 top-0 right-0 left-0 mx-auto max-w-7xl h-full px-3 xl:px-0">
            <div className="flex justify-center flex-col items-start w-full h-full">
              <h1 className="text-white md1:max-w-4xl font-montserrat leading-10 md1:leading-14 font-semibold text-3xl md1:text-4xl text-start">
                Mengenal Wayang Kulit, Menyelami Salah Satu Warisan Budaya di
                Indonesia.
              </h1>

              <p className="text-white md1:max-w-xl leading-6 md1:leading-8 font-montserrat text-start text-[13px] md1:text-sm mt-5">
                Wayang bukan sekadar hiburan tradisional—ia adalah cerminan
                nilai, filosofi, dan sejarah bangsa yang telah hidup selama
                berabad-abad.
              </p>
              <div
                className="bg-white group  px-3 md1:px-5 cursor-pointer py-3 md1:py-4 rounded-md md1:rounded-xl mt-7 gap-x-4 flex items-center"
                onClick={() =>
                  window.scrollTo({ top: 480, behavior: "smooth" })
                }
              >
                <p className="font-montserrat title-color text-[12px] md1:text-[13px] font-medium">
                  Jelajahi Selengkapnya
                </p>
                <FaArrowDown
                  size={17}
                  className=" group-hover:text-[#ffb200] text-gray-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sekilas Section */}
        <section className="max-w-7xl my-20  mx-auto px-3 xl:px-0">
          <h2 className="text-3xl font-montserrat text-center mb-9 md1:mb-14">
            Fakta Menarik Tentang Wayang
          </h2>
          <div className="w-full h-full grid grid-cols-1 base:grid-cols-2 md:grid-cols-3 gap-y-7 base:gap-y-3 gap-x-3 md1:gap-x-12">
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

        {/* News Event */}
        <section className="max-w-full w-full md1:h-[80vh] px-3 xl:px-0 mt-10 mb-20">
          <div className="mx-auto max-w-7xl h-full ">
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
                <div className="flex gap-x-5 my-8">
                  <div
                    onClick={() => scroll("left")}
                    className="bg-[#4E1F00]/70 hover:bg-[#4E1F00] cursor-pointer h-12 w-12 rounded-full flex justify-center items-center"
                  >
                    <FaArrowLeft size={17} className="text-white" />
                  </div>
                  <div
                    onClick={() => scroll("right")}
                    className="bg-[#4E1F00]/70 hover:bg-[#4E1F00] cursor-pointer h-12 w-12 rounded-full flex justify-center items-center"
                  >
                    <FaArrowRight size={17} className=" text-white" />
                  </div>
                </div>
              </div>
              <div
                ref={scrollRef}
                className="col-span-3 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
              >
                <div className="flex gap-x-5 w-max items-center justify-center h-full md1:pl-5">
                  {dataEvents.map((e) => (
                    <div key={e.title} className="h-[70vh] w-[50vh] rounded-xl relative overflow-hidden shadow-lg">
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

        {/* Mengajak Section  */}
        <section className="w-full px-3 xl:px-0 mb-25">
          <div className="mx-auto md1:max-w-7xl h-[57vh] rounded-xl md1:rounded-3xl bg-[#74512D] overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full bg-[#4E1F00]/90">
                <div className="base:grid-cols-5 base:grid h-full">
                  <div className="col-span-2 ">
                    {/* <p className="text-white font-montserrat text-[12px] font-me">
                      Pertunjukan Wayang Kulit oleh{" "}
                      <span className="underline">Dalang Ki Seno Nugroho</span>
                    </p> */}
                  </div>
                  <div className="base:col-span-3 flex flex-col p-8 md1:p-14">
                    <p className="font-montserrat leading-8 font-medium text-white text-base base:text-[18px]">
                      "Mari kenali lebih dekat seni pertunjukan wayang dan
                      pelajari bagaimana cerita, suara, dan gerak bersatu
                      menciptakan warisan budaya yang hidup hingga kini."
                    </p>
                    <div className="mt-6 md1:mt-10">
                      <p className="text-white cursor-pointer underline font-medium font-montserrat text-sm">
                        Explore Yuk!
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

        {/* Testimoni Action */}
        <section className="max-w-full mb-20 md1:h-[65vh] brder">
          <div className="max-w-7xl w-full h-full mx-auto px-3 xl:px-0">
            <div className="grid grid-cols-1 md1:grid-cols-6 h-full">
              <div className="col-span-4 h-[50vh] md1:h-auto  grid grid-cols-1 lgxs:grid-cols-2 gap-6 pr-0 lgxs:pr-6 pb-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
                {testimonials.map((e) => (
                  <div
                    className={` ${
                      e.id == 1 ? "bg-[#4E1F00]/90" : ""
                    } h-[28vh] rounded-xl shadow-lg  flex flex-col p-5 justify-between`}
                  >
                    <p
                      className={`font-montserrat text-sm ${
                        e.id == 1 ? "text-white" : "title-color"
                      } leading-6`}
                    >
                      <span className="font-montserrat text-2xl font-semibold">
                        "{" "}
                      </span>
                      {e.testimonial}
                    </p>
                    <div>
                      <p
                        className={`font-montserrat text-sm font-medium ${
                          e.id == 1 ? "text-white" : "title-color"
                        }`}
                      >
                        {e.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-span-2 flex flex-col justify-center items-start w-full p-5">
                <h2 className="font-montserrat text-3xl leading-9">
                  Cerita dari Teman-Teman Rasa
                </h2>
                <p className="font-montserrat text-start text-[15px] mt-5 leading-7 title-color">
                  Kami percaya setiap cerita punya kesan. Inilah pendapat mereka
                  yang telah merasakan pengalaman belajar budaya lewat Sambang
                  Rasa.
                </p>
                <p className="font-montserrat text-sm mt-5 font-semibold title-color">
                  {testimonials.length} Ulasan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full mb-20 px-3 xl:px-0">
          <div className="max-w-7xl xl:mx-auto ">
            <h1 className="text-2xl font-montserrat title-color text-center mb-9 md1:mb-14">
              Frequently Answer Questions (FAQ)
            </h1>

            <div className="grid grid-cols-1 base:grid-cols-2 gap-x-10">
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
