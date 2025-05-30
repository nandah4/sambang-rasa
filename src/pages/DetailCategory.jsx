import { useParams, useLocation } from "react-router";
import { useState } from "react";
import { category } from "../data/dataExplore";
import { slug } from "../helper/slug";

const DetailCategory = () => {
  const { state } = useLocation();
  const { title } = useParams();
  const data = state || category.find((e) => slug(e.title == title));

  const [truncate, setTruncate] = useState(0);
  const limit = 100;

  const setOnTruncate = (id) => {
    setTruncate((curr) => (curr === id ? null : id));
  };

  const displayText = (text, id) => {
    if (truncate == id || text.length <= limit) return text;
    return text.slice(0, limit) + " ...";
  };

  if (!data) return <p>Data tidak ditemukan.</p>;
  return (
    <>
      <main>
        <section className="h-[400px] w-full relative">
          <div className="bg-[#4E1F00] absolute opacity-60 top-0 left-0 right-0 h-full"></div>
          <img src={data.image} className="w-full h-full object-cover" />
        </section>

        {/* Common Section Category */}
        <section className="max-w-5xl mx-auto my-8 px-3 xl:px-0">
          {/* Original Title */}
          <h1 className="font-montserrat text-2xl title-color">
            {data.originalTitle}
          </h1>
          {/* Description */}
          <p className="text-sm font-montserrat title-color mt-5 leading-6">
            {data.description}
          </p>
        </section>

        {/* Content Sejarah */}
        {data.content != 0 && (
          <>
            <section className="max-w-5xl mx-auto my-8 px-3 xl:px-0 mt-10">
              <div className="grid grid-cols-1 md1:grid-cols-6 relative">
                <div className="col-span-2 mb-5 md1:mb-0">
                  <ul className="md1:pr-10 sticky top-28 left-0 right-0">
                    <li className="font-montserrat text-sm text-[#da9900] rounded-md py-3 px-4 bg-[#ffb200]/10">
                      Sejarah dan Asal Usul Wayang Kulit
                    </li>
                  </ul>
                </div>
                <div className="col-span-4 px-7">
                  {data.content.map((e) => (
                    <p className="mb-3 font-montserrat text-justify text-sm title-color leading-6">
                      {e.description}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Content Jenis Wayang */}
        {(data.dataJenisWayang != 0 || data.dataWayangIconic != 0) && (
          <section className="max-w-5xl mx-auto my-8 px-3 xl:px-0">
            {data.dataJenisWayang != 0 && (
              <>
                <h2 className="text-lg font-montserrat font-medium title-color">
                  🏔️ Jenis Wayang Berdasarkan Daerah di Indonesia
                </h2>
                <div className="grid md1:grid-cols-4 base:grid-cols-3 xs:grid-cols-2 gap-x-4 gap-y-4 mb-8 mt-5">
                  {data.dataJenisWayang?.map((element, index) => (
                    <p
                      className="font-montserrat text-[13px] title-color"
                      key={index}
                    >
                      {element}
                    </p>
                  ))}
                </div>
              </>
            )}

            {data.dataWayangIconic != 0 && (
              <>
                <h2 className="text-lg font-montserrat font-medium title-color">
                  🕴 Tokoh Ikonik Dalam Cerita Wayang Jawa
                </h2>
                <div className="md1:grid-cols-2 gap-x-8 grid gap-y-5 mt-5">
                  {data.dataWayangIconic.map((e) => (
                    <div key={e.id} className="w-full h-full col-span-1 ">
                      <div
                        className={`p-5 border rounded-lg border-gray-300 overflow-hidden`}
                      >
                        <img
                          src={e.image}
                          className="w-36 mr-3 mb-3 float-left h-36 object-contain"
                        />
                        <p className="font-montserrat text-lg font-medium mb-3">
                          {e.title}
                        </p>
                        <div>
                          <p className="font-montserrat text-[13px] leading-6 ">
                            {displayText(e.description, e.id)}
                          </p>
                          {e.description.length > limit && (
                            <p
                              onClick={() => setOnTruncate(e.id)}
                              className="cursor-pointer font-montserrat text-[13px] font-medium mt-2"
                            >
                              {e.id == truncate ? "Tutup" : "Baca Selengkapnya"}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
        )}

        {/* Content Unsur Wayang */}
        {data.dataUnsurUtama != 0 && (
          <>
            <section className="max-w-5xl mx-auto my-10 px-3 xl:px-0">
              <div>
                <h2 className="text-lg font-montserrat font-medium title-color mb-5">
                  🎬 3 Unsur Utama Pertunjukkan Wayang Kulit
                </h2>
                <div className="grid md1:grid-cols-3 base:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10">
                  {data.dataUnsurUtama
                    .filter((element) => element.isMain)
                    .map((element) => (
                      <div className="rounded-lg overflow-hidden shadow-xs">
                        <img
                          className="w-full h-44 object-cover rounded-tl-lg rounded-tr-lg "
                          src={element.image}
                        ></img>
                        <div className="p-3">
                          <h4 className="font-montserrat text-base title-color font-medium mb-3">
                            {element.title}
                          </h4>
                          <p className="font-montserrat text-[13px] text-justify title-color">
                            {element.description.slice(0, 300)}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="my-14">
                <h2 className="text-lg font-montserrat font-medium title-color mb-3">
                  🎬 Unsur Lain dalam Pertunjukkan Wayang Kulit
                </h2>
                <p className="font-montserrat text-sm title-color mb-5">
                  Terdapat unsur peralatan pagelaran Wayang Kulit yang terdiri
                  dari peralatan Dalang dan Niyaga/Wiyaga (pemain Gamelan)
                </p>
                <div className="grid md1:grid-cols-3 base:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10">
                  {data.dataUnsurUtama
                    .filter((element) => !element.isMain)
                    .map((element) => (
                      <div className="rounded-lg overflow-hidden shadow-xs">
                        <img
                          className="w-full h-44 object-cover rounded-tl-lg rounded-tr-lg "
                          src={element.image}
                        ></img>
                        <div className="p-3">
                          <h4 className="font-montserrat text-base title-color font-medium mb-3">
                            {element.title}
                          </h4>
                          <p className="font-montserrat text-[13px] text-justify title-color">
                            {element.description.slice(0, 300)}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          </>
        )}

        <section className="max-w-5xl mx-auto my-8 px-3 xl:px-0">
          <div className="mt-10">
            <h2 className="text-2xl font-montserrat title-color">
              Sumber Artikel
            </h2>
            {data.sumber != 0 ? (
              <>
                <div className="flex gap-x-5 mt-2">
                  {data.sumber.map((e) => (
                    <p className="font-montserrat title-color text-sm font-medium underline text-blue-500">
                      <a target="_blank" href={e.link}>
                        {e.sumberName}{" "}
                      </a>
                    </p>
                  ))}
                </div>
              </>
            ) : (
              <p className="font-montserrat text-sm mt-2 title-color">
                Sumber akan tertera di sini
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailCategory;
