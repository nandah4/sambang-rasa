import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import heroImage from "./../assets/mentorship/hero-mentorship.jpg";
import { Dropdown } from "../components/ui/Dropdown";
import { seniPlaces } from "../data/dataMentorship";

const Mentorship = () => {
  const [userDummy, setUserDummy] = useState();
  const [location, setLocation] = useState(null);

  const placesFilter = seniPlaces.filter((e) => e.location == location);
  const displayedPlace = location == null ? seniPlaces : placesFilter;

  console.log(location);
  return (
    <>
      <main>
        <section className="h-[60vh] relative">
          <div className="bg-[#4E1F00] absolute opacity-70 top-0 left-0 right-0 h-full"></div>
          <img src={heroImage} className="w-full h-full object-cover" />
          <div className="flex max-w-7xl items-end mx-auto px-3 xl:px-0 absolute bottom-10 left-0 right-0">
            <h1 className="z-20 font-montserrat text-3xl text-white">
              Mentorship
            </h1>
          </div>
        </section>

        <section className="max-w-7xl mx-auto my-10 px-3 xl:px-0">
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
          }  max-w-7xl mx-auto my-10 px-3 xl:px-0 -z-20`}
        >
          <div className="grid grid-cols-1 md1:grid-cols-5">
            <div className="md1:col-span-3 md1:pr-5">
              <div>
                <h2 className="font-montserrat title-color text-xl font-medium mb-3">
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
                    Kami Menemukan Sanggar di {location}, Selamat Belajar 😄!
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
                        <p className="font-montserrat mt-3 text-sm">
                          Lokasi Sanggar
                        </p>
                        <p className="font-montserrat mt-1 text-[13px]">
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
                  ? "h-[45vh] md1:h-[65vh]"
                  : "h-[45vh] md1:h-full"
              } w-full md1:col-span-2 md1:mt-0 mt-6 md1:p-5 md1:pb-0`}
            >
              <div className="w-full h-full">
                <MapContainer
                  center={[-7.5555, 110.8]}
                  zoom={13}
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: -100,
                    position: "relative",
                  }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[-7.5555, 110.8]}>
                    <Popup>Sanggar Wayang.</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Mentorship;
