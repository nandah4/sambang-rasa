import logov2 from "./../assets/logo/logov2.png";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full border bg-[#4E1F00]">
      <div className="max-w-7xl mx-auto w-full h-full py-14 px-3 xl:px-0">
        <div className="flex justify-between ">
          <div className="flex gap-x-5 items-center">
            <div className="h-12 w-12">
              <img src={logov2} className="w-full h-full" />
            </div>
            <h2 className="font-montserrat font-medium text-xl text-white">
              Sambang Rasa
            </h2>
          </div>
        </div>
        <div className="w-full  grid grid-cols-1 base:grid-cols-5 gap-x-20 md:gap-x-30 mt-7 base:mt-5">
          {/* Description */}
          <div className="base:col-span-2  w-full">
            <p className="font-montserrat text-[15px] text-white leading-6">
              Sambang Rasa adalah platform yang menghubungkan masyarakat dengan
              sanggar seni lokal melalui program mentorship, informasi lokasi
              belajar, dan cerita dari pelajar lain.
            </p>
          </div>
          {/* Sosial Media */}
          <div className="flex base:col-span-3  w-full flex-col items-start gap-y-5 mt-7 base:mt-0">
            <h3 className="text-[15px] font-montserrat text-white">
              Sosial Media
            </h3>
            <ul className="w-full flex flex-wrap  items-start justify-start gap-x-14 gap-y-5">
              <li>
                <FaSquareInstagram className="text-white text-3xl cursor-pointer" />
              </li>
              <li>
                {" "}
                <FaSquareFacebook className="text-white text-3xl cursor-pointer" />
              </li>
              <li>
                <FaSquareXTwitter className="text-white text-3xl cursor-pointer" />
              </li>
              <li>
                {" "}
                <FaSquareYoutube className="text-white text-3xl cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
