import { FaInfoCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const Card = ({ title, children, icon, styling }) => {
  return (
    <>
      <div
        className={`w-full h-full px-8 flex flex-col justify-center items-center ${styling}`}
      >
        <div className="p-5 bg-[#4E1F00]/90 rounded-full mb-6">{icon}</div>
        <h2 className="text-xl text-center font-montserrat font-medium mb-3 title-color">
          {title}
        </h2>
        <p className="text-center text-sm font-montserrat leading-7 description-color">
          {children}
        </p>
      </div>
    </>
  );
};

export default Card;
