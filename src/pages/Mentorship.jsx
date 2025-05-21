import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import heroImage from "./../assets/mentorship/hero-mentorship.jpg";
import { Dropdown } from "../components/ui/Dropdown";

const Mentorship = () => {
  const [userDummy, setUserDummy] = useState();
  const [location, setLocation] = useState(null);

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

        <section className="max-w-7xl border mx-auto my-10 px-3 xl:px-0">
          <div className="md1:grid md1:grid-cols-5">
            <div className="col-span-3 border border-amber-300 pr-5">
              <div>
                <h2 className="font-montserrat text-xl font-medium mb-5">
                  100 Sanggar Seni
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-x-5 gap-y-5">
                <div className="border rounded-lg shadow-md">
                  <div className="h-50 w-full rounded-lg bg-amber-600"></div>
                  <div className="p-2">
                    <h3 className="font-montserrat">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="font-montserrat mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias, aspernatur?
                    </p>
                  </div>
                </div>
                <div className="border rounded-lg shadow-md">
                  <div className="h-50 w-full rounded-lg bg-amber-600"></div>
                  <div className="p-2">
                    <h3 className="font-montserrat">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="font-montserrat mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias, aspernatur?
                    </p>
                  </div>
                </div>
                <div className="border rounded-lg shadow-md">
                  <div className="h-50 w-full rounded-lg bg-amber-600"></div>
                  <div className="p-2">
                    <h3 className="font-montserrat">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="font-montserrat mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias, aspernatur?
                    </p>
                  </div>
                </div>
                <div className="border rounded-lg shadow-md">
                  <div className="h-50 w-full rounded-lg bg-amber-600"></div>
                  <div className="p-2">
                    <h3 className="font-montserrat">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="font-montserrat mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias, aspernatur?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 border border-blue-300 p-5">
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
