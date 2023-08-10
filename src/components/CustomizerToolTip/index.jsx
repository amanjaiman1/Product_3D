const ToolTip = ({ index, current, title, shortCut, setselectedOption }) => {
  const handleSelect = () => {
    setselectedOption(index);
  };
  return (
    <div onClick={handleSelect} className={`${index != current ? "hidden" : ""}`}>
      <div className=" bg-[#09090C] border-2 border-gray-300 rounded p-3 absolute w-[200px] bottom-[65px] right-[-60px] flex z-10">
        <span className="font-medium">{title}</span>{" "}
        <span className="ml-8 rounded bg-gray-900 shadow-[inset_0_0px_4px_rgba(0,0,0,0.1)]">
          {shortCut}
        </span>
      </div>
      <div className="w-16 overflow-hidden inline-block absolute bottom-8 left-[10] z-0 ">
        <div className=" h-11 w-11 border-2 shadow-lg bg-white -rotate-45 transform origin-top-left border-gray-300"></div>
      </div>
    </div>
  );
};
export default ToolTip;
