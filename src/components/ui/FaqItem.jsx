import { FaPlus } from "react-icons/fa6";

export const FaqItem = ({ data, isActive, onClick }) => {
  return (
    <div className="border border-gray-300 rounded-2xl p-4 w-full mb-5">
      <div className="w-full grid grid-cols-12">
        <div className="col-span-11">
          <p
            className={`text-sm font-montserrat description-color ${
              isActive == data.id ? "font-medium title-color" : ""
            }`}
          >
            {data.question}
          </p>
          {isActive == data.id ? (
            <p className="text-sm leading-6 font-montserrat py-4 description-color">
              {data.answer}
            </p>
          ) : null}
        </div>
        <div
          onClick={() => onClick(Number(data.id))}
          className={`col-span-1 flex justify-end text-[#4E1F00] items-start hover:text-amber-300 ${
            data.id == isActive ? "text-amber-300" : ""
          }`}
        >
          <FaPlus size={19} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
