import React, { useEffect, useState } from "react";
import Button from "../Button";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "@firebase/firestore";
import { useParams } from "react-router";

function CustomizerTitle() {
  const [value, setvalue] = useState("untitled");
  const { designId } = useParams();
  const setDesignName = () => {
    localStorage.setItem("designName", value);
  };
  useEffect(() => {
    const getDesignName = async () => {
      try {
        const response = await getDoc(doc(db, "designs", designId));
        if (response.exists()) {
          console.log(response.data());
          setvalue(response.data().title);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getDesignName();
  }, []);
  return (
    <div className="m-5 space-x-2 z-10">
      <input
        value={value}
        className="outline-none shadow-lg rounded-full p-2 bg-black border-gray-500 border-x-2  text-white"
        onChange={(e) => setvalue(e.target.value)}
      />
      <Button
        onClick={setDesignName}
        className={
          "bg-[#09090C] shadow-lg rounded-full text-violet-500 hover:text-violet-600"
        }
      >
        Change
      </Button>
    </div>
  );
}

export default CustomizerTitle;
