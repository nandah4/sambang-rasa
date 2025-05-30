import { useEffect, useState, useRef, useContext } from "react";
import {
  imageData,
  faqs,
  dataEvents,
  testimonials,
} from "./../data/datasBeranda.js";

import videoAsset from "./../assets/beranda/asset-video.mov";
import {
  FaEarthEurope,
  FaBookOpenReader,
  FaMapLocationDot,
  FaArrowRight,
  FaArrowLeft,
  FaArrowDown,
  FaRegPenToSquare,
} from "react-icons/fa6";
import Card from "../components/ui/Card.jsx";
import { FaqItem } from "../components/ui/FaqItem.jsx";
import categoryImage3 from "./../assets/explores/explore3.jpg";
import { DataProvider } from "../App.jsx";
import { Link } from "react-router";

const Beranda = () => {
  const [isImage, setIsImage] = useState(0);
  const [faqNums, setFaqNums] = useState(1);
  const scrollRef = useRef(null);

  // Navigate to ulasan
  const { getUlasan, setUlasan } = useContext(DataProvider);
  useEffect(() => {
    if (getUlasan) {
      setTimeout(() => {
        const el = document.getElementById("ulasan");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        setUlasan(null);
      }, 50);
    }
  }, [getUlasan, setUlasan]);

  // Slider hero image
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsImage((e) => (e + 1) % imageData.length);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [isImage]);

  // Faq
  const onFaqActive = (id) => {
    setFaqNums((nowId) => (nowId == id ? 0 : id));
  };

  // event scroll
  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir == "left" ? -280 : 290,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <main className="w-full">
        {/* Hero Section */}
        <section className="h-[540px] bg-amber-50 relative overflow-hidden">
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
                  window.scrollTo({ top: 440, behavior: "smooth" })
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
        <section className="max-w-7xl my-20 mx-auto px-3 xl:px-0">
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
        <section className="max-w-full w-full md1:h-[500px] px-3 xl:px-0 mb-20">
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
                    <div
                      key={e.title}
                      className="h-[480px] w-[360px] rounded-xl relative overflow-hidden shadow-lg"
                    >
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
        <section className="w-full px-3 xl:px-0 mb-20">
          <div className="mx-auto md1:max-w-7xl h-auto base:h-[400px] relative rounded-xl bg-[#74512D] overflow-hidden">
            <video
              className="w-full h-full object-cover loop absolute z-0 inset-x-0"
              src={videoAsset}
              autoPlay
              loop
              muted
              disableRemotePlayback
              playsInline
            ></video>
            <div className=" relative base:absolute z-10 w-full h-full bg-[#4E1F00]/80">
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
                    <Link to={"/explore"}>
                      <p className="text-white cursor-pointer underline font-medium font-montserrat text-sm">
                        Explore Yuk!
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimoni Action */}
        <section className="max-w-full mb-20 md1:h-[500px]">
          <div className="max-w-7xl w-full h-full mx-auto px-3 xl:px-0">
            <div className="grid grid-cols-1 md1:grid-cols-6 h-full">
              <div className="col-span-4 h-[300px] md1:h-auto grid grid-cols-1 lgxs:grid-cols-2 gap-6 md1:pr-6 pb-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
                {testimonials.map((e) => (
                  <div
                    key={e.id}
                    className={` ${
                      e.id == 1 ? "bg-[#4E1F00]/90" : ""
                    } h-[200px] rounded-xl shadow-lg border border-gray-100 flex flex-col p-5 justify-between`}
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
              <div className="col-span-2 flex flex-col justify-center items-start w-full  pt-5 md1:p-5">
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
        <section className="w-full mb-10 px-3 xl:px-0">
          <div className="max-w-7xl xl:mx-auto ">
            <div className="grid grid-cols-1 base:grid-cols-2 gap-x-10">
              <div className="col-span-1 w-full flex justify-start">
                <h1 className="text-3xl font-montserrat title-color text-center mb-9 md1:mb-14">
                  Pertanyaan yang Sering Diajukan (FAQ)
                </h1>
              </div>

              <div className="col-span-1 w-full">
                {faqs.map((e) => (
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

        {/* Ulasan */}
        <section id="ulasan" className="mt-20 mb-30 px-3 xl:px-0">
          <div className="max-w-7xl h-auto mdcontact:h-[450px] mx-auto w-full relative rounded-xl overflow-hidden">
            <img
              src={categoryImage3}
              className="w-full h-full object-cover absolute z-0 inset-0"
            />
            <div className="absolute bg-[#4E1F00] opacity-50 inset-0 z-0"></div>
            <div className="grid mdcontact:grid-cols-2 w-full p-7 base:p-14 relative mdcontact:absolute z-10 mdcontact:inset-0">
              <div className="flex items-center pr-5 mb-8 mdcontact:mb-0">
                <h2 className="text-2xl base:text-3xl font-montserrat text-white leading-10">
                  Bagikan Cerita Anda Selama Belajar Kesenian Wayang dan Biarkan
                  Orang Lain Mendapatkan Gambaran dari Pengalaman Nyata
                </h2>
              </div>
              <div className="mdcontact:pl-20">
                <div>
                  <label
                    htmlFor="username"
                    className="font-montserrat  text-base text-white"
                  >
                    Nama Anda
                  </label>
                  <input
                    className="mt-2 shadow rounded-md w-full bg-white py-4 px-3 border-gray-300 focus:shadow-amber-800 text-sm focus:outline-none title-color font-montserrat leading-tight"
                    placeholder="Angga Wijaya"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="cerita"
                    className="font-montserrat  text-base text-white"
                  >
                    Cerita Anda
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-2 p-3 w-full text-sm title-color font-montserrat bg-gray-50 rounded-lg border border-gray-300 focus:outline-0"
                    placeholder="Tulis cerita Anda di sini ..."
                  ></textarea>
                </div>
                <button className="bg-white rounded-md cursor-pointer px-5 py-3 mt-5 flex gap-x-4 items-center">
                  <FaRegPenToSquare className="title-color text-base" />
                  <p className="text-sm font-montserrat title-color">
                    Mulai Bagikan
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Beranda;
