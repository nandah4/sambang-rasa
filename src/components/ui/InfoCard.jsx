import { FaInfoCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const InfoCard = ({ title, children, icon }) => {
  return (
    <div className="grid grid-cols-5 p-2 relative ">
      <div className="col-span-1 flex justify-center items-center">{icon}</div>
      <div className="col-span-4  flex flex-col justify-start">
        <h3 className="font-montserrat text-slate-700 font-semibold text-xl mb-4">
          {title}
        </h3>
        <p className="text-start font-montserrat text-slate-500 text-[13px]">
          {children}
        </p>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfoCard;
