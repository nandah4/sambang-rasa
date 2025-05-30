import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import heroImage from "./../assets/mentorship/hero-mentorship.jpg";
import { Dropdown } from "../components/ui/Dropdown";
import { seniPlaces, dataMentorships } from "../data/dataMentorship";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import image1 from "./../assets/mentorship/sanggar_gogon.jpg";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIconPng from "leaflet/dist/images/marker-icon.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIconPng,
});

const Mentorship = () => {
  const [location, setLocation] = useState(null);
  const refScroll = useRef(null);
  const [detailMentor, setDetailMentor] = useState(null);

  const scrollSide = (dir) => {
    if (refScroll.current) {
      refScroll.current.scrollBy({
        left: dir == "left" ? -420 : 420,
        behavior: "smooth",
      });
    }
  };

  const clickMentor = (id) => {
    const selected = dataMentorships.find((e) => e.id === id);
    setDetailMentor(selected);

    setTimeout(() => {
      const el = document.querySelector("#mentordetail");
      el.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  const placesFilter = seniPlaces.filter((e) => e.location == location);
  const displayedPlace = location == null ? seniPlaces : placesFilter;

  console.log(location);
  return (
    <>
      <main>
        <section className="h-[400px] relative">
          <div className="bg-[#4E1F00] absolute opacity-70 top-0 left-0 right-0 h-full"></div>
          <img src={heroImage} className="w-full h-full object-cover" />
          <div className="flex max-w-7xl items-end mx-auto px-3 xl:px-0 absolute bottom-10 left-0 right-0">
            <h1 className="z-20 font-montserrat text-3xl text-white">
              Mentorship
            </h1>
          </div>
        </section>

        <section className="max-w-7xl mx-auto my-30 px-3 xl:px-0">
          <div className="grid base:grid-cols-2 md:grid-cols-3">
            <div className="col-span-1 md:col-span-2 ">
              <p className="text-2xl font-montserrat title-color">
                Beri Tahu Kami Kota/Kecamatan Kamu 😊
              </p>
              <p className="font-montserrat text-sm leading-6 mt-2 title-color">
                Bantu kami menyarankan lokasi belajar (Sanggar Seni) di sekitar
                tempat tinggal Anda.
              </p>
            </div>
            <div className="col-span-1 flex mt-4 base:mt-0 justify-start base:justify-end">
              <Dropdown setLocation={setLocation} />
            </div>
          </div>
        </section>

        <section
          className={`${
            displayedPlace.length === 0 ? "md1:h-[65vh]" : "h-auto"
          }  max-w-7xl mx-auto mb-30 px-3 xl:px-0 -z-20`}
        >
          <div className="grid grid-cols-1 md1:grid-cols-5">
            <div className="md1:col-span-3 md1:pr-5">
              <div>
                <h2 className="font-montserrat title-color text-2xl mb-3">
                  {displayedPlace.length} Sanggar Seni Wayang
                </h2>
                {displayedPlace.length === 0 ? (
                  <p className="font-montserrat text-sm title-color">
                    Mohon Maaf, Sanggar Seni terdekat belum ditemukan 😢
                  </p>
                ) : location == null ? (
                  ""
                ) : (
                  <p className="mb-3 font-montserrat text-sm title-color">
                    Kami menemukan tempatnya di {location}, Selamat Belajar 😄!
                  </p>
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-x-5 gap-y-5">
                {displayedPlace.map((el) => (
                  <div
                    key={el.id}
                    className="rounded-lg shadow overflow-hidden"
                  >
                    <div className="h-50 w-full rounded-lg bg-amber-600 relative">
                      <img
                        src={el.image}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute left-3 bottom-3 rounded px-2 py-2 bg-[#4E1F00] ">
                        <p className="font-montserrat font-medium text-xs text-white">
                          {el.location}
                        </p>
                      </div>
                    </div>
                    <div className="p-5 mt-2">
                      <h3 className="font-montserrat text-base font-medium title-color">
                        🛖 {el.title}
                      </h3>
                      <div>
                        <p className="font-montserrat title-color mt-3 text-sm">
                          Lokasi Sanggar
                        </p>
                        <p className="font-montserra title-color mt-1 text-[13px]">
                          {el.detailLocation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`${
                displayedPlace.length === 0
                  ? "h-[350px] md1:h-[500px]"
                  : "h-[350px] md1:h-full"
              } w-full md1:col-span-2 md1:mt-0 mt-6 md1:pt-5 md1:pl-7`}
            >
              <h2 className=" md1:hidden text-2xl font-montserrat title-color mb-5">
                Map Yang Mempermudah Anda
              </h2>
              <div className="w-full h-full -z-50">
                <MapContainer
                  center={[-7.5585649, 110.8509434]}
                  zoom={13}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    zIndex: "0",
                  }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[-7.5585649, 110.8509434]}>
                    <Popup>
                      <div>
                        <div className="h-20 w-full bg-amber-50 mb-2">
                          <img
                            src={image1}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h1 className="title-color font-montserrat text-sm">
                          Sanggar Wayang Gogon Surakarta
                        </h1>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Discover Mentor */}
        <section className="max-w-7xl mx-auto px-3 xl:px-0 mb-30">
          <div className="flex flex-col gap-y-5">
            <div className="flex justify-between items-center flex-wrap">
              <div>
                <h2 className="font-montserrat text-2xl title-color">
                  Mentor-mentor Terbaik Anda
                </h2>
                <p className="mt-2 text-sm title-color font-montserrat">
                  Tidak hanya mentor wayang, tapi juga sinden, pengrawit, dan
                  praktisi seni lainnya.
                </p>
              </div>

              <div className="h-full flex gap-x-3 mt-5 md1:mt-0">
                <div
                  onClick={() => {
                    scrollSide("left");
                  }}
                  className="p-3 cursor-pointer group hover:bg-[#4E1F00]/70 border border-gray-300 rounded-full"
                >
                  <FaAngleLeft className="text-md group-hover:text-white" />
                </div>
                <div
                  onClick={() => scrollSide("right")}
                  className="p-3 cursor-pointer border group hover:bg-[#4E1F00]/70 border-gray-300 rounded-full"
                >
                  <FaAngleRight className="text-md group-hover:text-white " />
                </div>
              </div>
            </div>

            <div
              ref={refScroll}
              className="mt-3 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory gap-x-10"
            >
              <div className="flex gap-x-5 w-max items-center justify-center">
                {dataMentorships.map((e) => (
                  <div
                    key={e.id}
                    className="h-auto w-80 shadow-xs border border-gray-300 rounded-lg overflow-hidden"
                  >
                    <div className="h-70 w-full relative">
                      <div className="absolute left-3 bottom-3 rounded-md px-3 py-2 bg-[#4E1F00] ">
                        <p className="font-montserrat font-medium text-xs text-white">
                          {e.sanggar}
                        </p>
                      </div>
                      <img
                        src={e.image}
                        className="w-full h-full object-center"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-montserrat font-medium text-base title-color">
                        {e.nameMentor}
                      </h3>
                      <p className="mt-2 font-montserrat text-[13px] title-color">
                        {e.description}
                      </p>
                      <button
                        onClick={() => clickMentor(e.id)}
                        className="bg-[#4E1F00]/80 cursor-pointer hover:bg-[#4E1F00] rounded w-full text-white font-montserrat text-sm py-2 mt-5"
                      >
                        Lihat Detail Mentor
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {detailMentor != null && (
          <>
            <section
              id="mentordetail"
              className="max-w-7xl overflow-hidden mx-auto px-3 xl:px-0 mb-30"
            >
              <div className="grid md1:grid-cols-2 mx-auto">
                <div className="col-span-1 flex justify-center items-center h-full w-full">
                  <div className="h-[480px] w-full lgbase:w-[530px] shadow rounded-xl overflow-hidden">
                    <img
                      src={detailMentor.image}
                      className="w-full h-full object-center base:object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-1 md1:pl-5 h-full w-full flex flex-col justify-star mt-5 md1:mt-0">
                  <h2 className="text-2xl font-montserrat title-color mb-5">
                    Mengenal Lebih Dekat {detailMentor.nameMentor}
                  </h2>
                  <h1 className="font-montserrat text-xl title-color font-medium">
                    👷🏻 {detailMentor.nameMentor}
                  </h1>
                  <p className="font-montserrat text-sm title-color my-5">
                    {detailMentor.description}
                  </p>

                  <p className="font-montserrat text-lg title-color">
                    👣 Biodata dan Perjalanan Karir
                  </p>
                  <div className="p-7 bg-slate-50 rounded-lg mt-2">
                    <ul className="flex flex-col gap-y-3">
                      <li className="font-montserrat text-sm title-color">
                        Umur<span className="pl-28">: {detailMentor.age}</span>
                      </li>
                      <li className="font-montserrat text-sm title-color">
                        Sanggar
                        <span className="pl-[94px]">
                          : {detailMentor.sanggar}
                        </span>
                      </li>
                      <li className="font-montserrat text-sm title-color">
                        Bidang
                        <span className="pl-[102px]">
                          : {detailMentor.expertise}
                        </span>
                      </li>
                      <li className="font-montserrat text-sm title-color">
                        Pengalaman
                        <span className="pl-[63px]">
                          : {detailMentor.experienceYears} Tahun
                        </span>
                      </li>
                      <li className="font-montserrat text-sm title-color">
                        Karir
                        {detailMentor.journey.map((e) => (
                          <li className="text-sm font-montserrat title-color pl-1 mb-1">
                            ‼️ {e}
                          </li>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
};
export default Mentorship;
