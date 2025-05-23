import { FaPlus, FaMinus } from "react-icons/fa6";

export const FaqItem = ({ data, isActive, onClick }) => {
  return (
    <div className="border-b pb-4 border-gray-300 w-full mb-6">
      <div className="w-full grid grid-cols-12">
        <div className="col-span-11">
          <p
            className={`text-[15px] font-medium font-montserrat description-color ${
              isActive == data.id ? " title-color" : ""
            }`}
          >
            {data.question}
          </p>
          {isActive == data.id ? (
            <p className="text-[15px] title-color leading-6 font-montserrat py-2 description-color">
              {data.answer}
            </p>
          ) : null}
        </div>
        <div
          onClick={() => onClick(Number(data.id))}
          className={`col-span-1 flex justify-end text-[#4E1F00] items-start hover:text-[#ffb200] ${
            data.id == isActive ? "text-[#ffb200]" : ""
          }`}
        >
          {isActive != data.id ? (
            <FaPlus size={19} className="cursor-pointer" />
          ) : (
            <FaMinus size={19} className="cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
