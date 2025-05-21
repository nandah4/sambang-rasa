import { head } from "framer-motion/client";
import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

export const Dropdown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const headDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headDropdownRef.current &&
        !headDropdownRef.current.contains(event.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div ref={headDropdownRef} className="w-full xs:w-64 cursor-pointer ">
        <div className=" bg-[#4E1F00] rounded-lg relative shadow-md">
          <div
            onClick={() => {
              setIsActive((e) => !e);
            }}
            className="flex px-4 py-3 justify-between items-center"
          >
            <div>
              <p className="font-montserrat text-sm text-white">
                Pilih Kota Anda
              </p>
            </div>
            <div>
              <FaAngleDown className="text-sm text-white" />
            </div>
          </div>

          {isActive && (
            <>
              <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-md rounded-md border border-gray-300">
                <ul className="flex flex-col">
                  <li className="px-4 py-3 border-b border-b-gray-300">
                    <input
                      type="text"
                      placeholder="Kota Malang .."
                      className="text-[13px] font-montserrat title-color rounded px-2 bg-gray-50 py-3 w-full h-full focus:outline-0"
                    ></input>
                  </li>
                  <li
                    onClick={() => {
                      setIsActive((e) => !e);
                      props.setLocation("Solo");
                    }}
                    className="px-4 py-4 hover:bg-gray-50 font-montserrat title-color text-sm"
                  >
                    Solo
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
