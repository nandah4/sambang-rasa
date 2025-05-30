import { useState } from "react";
import { NavLink, Outlet, useParams } from "react-router";
import { category } from "./../data/dataExplore.js";
import backgrounImage from "./../assets/explores/bg-explore.jpeg";
import { slug } from "../helper/slug.js";

const Explore = () => {
  const { title } = useParams();
  // const [categorySelected, setCategorySelected] = useState(null)

  if (title) {
    return <Outlet />;
  }

  return (
    <>
      <main>
        <section className="h-[400px] relative">
          <div className="bg-[#4E1F00] absolute opacity-70 top-0 left-0 right-0 h-full"></div>
          <img src={backgrounImage} className="w-full h-full object-cover" />
          <div className="flex px-3 xl:px-0 items-end max-w-7xl h-full mx-auto absolute bottom-10 left-0 right-0">
            <p className="font-montserrat z-10 text-white text-3xl">
              Explore Wayang
            </p>
          </div>
        </section>

        <section className="w-full my-30">
          <div className="max-w-7xl mx-auto w-full h-full px-3 xl:px-0">
            <div className="md1:grid md1:grid-cols-5 h-full">
              <div className="md1:col-span-2 flex items-center justify-start md1:pr-3  border-amber-400">
                <p className="font-montserrat mb-5 md1:mb-0 md1:mt-0 font-medium text-2xl leading-9">
                  Kenalan Lebih Dekat Sama Dunia Wayang!
                </p>
              </div>
              <div className="md1:col-span-3 flex items-center justify-start md1:pl-8">
                <p className="font-montserrat text-sm leading-7">
                  Di halaman Explore Wayang ini, kamu diajak belajar tentang
                  tokoh-tokoh wayang, cerita legendaris kayak Mahabharata &
                  Ramayana. Kamu bisa ngerti kenapa wayang itu bukan cuma
                  tontonan, tapi juga tuntunan. Yuk, selami satu per satu dan
                  temuin sisi menarik dari budaya kita yang adiluhung ini!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-20 md1:my-20">
          <div className="max-w-7xl mx-auto">
            <div className="w-full h-full grid md1:grid-cols-3 base:grid-cols-2 grid-cols-1 gap-x-6 px-3 xl:px-0 gap-y-6">
              {category.map((e) => (
                <NavLink
                  state={e}
                  to={`/explore/${slug(e.shortTitle)}`}
                  key={e.id}
                  className="hover:shadow-xl cursor-pointer relative w-full h-70  shadow-xl rounded-md overflow-hidden"
                >
                  <img
                    src={e.image}
                    alt={e.shortTitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="group absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/50 hover:from-black/70 duration-1000 transition-all to-transparent">
                    <p className="absolute left-5 right-0 bottom-5 group-hover:bottom-6 text-white text-lg font-montserrat">
                      {e.shortTitle}
                    </p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Explore;
