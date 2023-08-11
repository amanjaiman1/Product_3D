import React, { useEffect, useState } from "react";
import RecentDesignCard from "../../components/RecentDesignCard";
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import ContextMenu from "../../components/ContextMenu";

function Favourite() {
  const [contextItem, setcontextItem] = useState(null);
  const handleConextMenu = (event, item) => {
    event.preventDefault();
    setcontextItem({ x: event.clientX, y: event.clientY, data: item });
  };
  const [favDesign, setFavDesign] = useState({
    loading: true,
    data: [],
  });
  useEffect(() => {
    async function getData() {
      try {
        const result = [];
        const userInfo = JSON.parse(await localStorage.getItem("userInfo"));
        const designRef = collection(db, "designs");
        const q = query(designRef, where("uid", "==", userInfo.uid));
        const data = await getDocs(q);
        if (data.empty) {
          setFavDesign((prev) => {
            return { ...prev, loading: false };
          });
          return;
        }
        data.forEach((snap) => {
          if (snap?.data()?.isFavourite) {
            result.push({ id: snap.id, ...snap.data() });
          }
        });
        setFavDesign({
          loading: false,
          data: result,
        });
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  return (
    <div className="flex space-x-1 flex-wrap p-4 items-center text-white">
      {favDesign?.loading ? (
        <h1>Loading...</h1>
      ) : favDesign.data.length != 0 ? (
        favDesign?.data?.map((item, index) => (
          <RecentDesignCard
            onContextMenu={(event) => handleConextMenu(event, item)}
            key={index}
            data={item}
          />
        ))
      ) : (
        <h1>No designs found</h1>
      )}
      {contextItem && (
        <ContextMenu
          onClose={setcontextItem}
          x={contextItem?.x}
          y={contextItem?.y}
          data={contextItem?.data}
        />
      )}
    </div>
  );
}

export default Favourite;
