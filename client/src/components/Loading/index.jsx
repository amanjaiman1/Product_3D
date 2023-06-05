import { favicon } from "../../assets";
import MoonLoader from "react-spinners/MoonLoader";

const index = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-100">
      <MoonLoader
        color="#293fce"
        ariaLabel="grid-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <img
        src={favicon}
        className="h-14 w-12 -ml-16"
        loading="lazy"
      ></img>
    </div>
  );
};

export default index;
