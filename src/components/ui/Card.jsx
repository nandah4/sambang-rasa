const Card = ({ title, children, icon, styling }) => {
  return (
    <>
      <div
        className={`w-full h-full flex flex-col justify-center items-center ${styling}`}
      >
        <div className="p-5 bg-[#4E1F00]/90 rounded-full mb-8">{icon}</div>
        <h2 className="text-xl text-center font-montserrat font-medium mb-5 title-color">
          {title}
        </h2>
        <p className="text-center text-[15px] font-montserrat leading-7 description-color">
          {children}
        </p>
      </div>
    </>
  );
};


export default Card;
