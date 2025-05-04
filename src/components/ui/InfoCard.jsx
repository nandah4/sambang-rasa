import { FaInfoCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const InfoCard = ({ title, children, onIconClick }) => {
  return (
    <div className="p-3 border border-slate-400 flex justify-center flex-col items-center relative rounded-xl">
      <h3 className="font-montserrat text-center font-semibold text-xl mb-4">
        {title}
      </h3>
      <p className="text-center font-montserrat text-[13px]">
        {children}
        <FaInfoCircle
          size={20}
          className="text-[#FEBA17] absolute top-3 right-3 md:top-5 md:right-5 cursor-pointer"
          onClick={onIconClick}
        />
      </p>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onIconClick: PropTypes.func,
};

export default InfoCard;
