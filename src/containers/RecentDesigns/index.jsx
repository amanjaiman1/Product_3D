import React, { useEffect, useState } from "react";
import RecentDesignCard from "../../components/RecentDesignCard";
import { db } from "../../firebase/firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
function RecentDesigns() {
  const [recentDesign, setrecentDesign] = useState({
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
          setrecentDesign((prev) => {
            return { ...prev, loading: false };
          });
          return;
        }
        data.forEach((snap) => {
          result.push({ id: snap.id, ...snap.data() });
        });
        setrecentDesign({
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
    <div className="flex space-x-1 flex-wrap p-4 items-center">
      {recentDesign?.loading ? (
        <h1>Loading...</h1>
      ) : recentDesign.data.length != 0 ? (
        recentDesign?.data?.map((item, index) => (
          <RecentDesignCard key={index} data={item} />
        ))
      ) : (
        <h1>No designs found</h1>
      )}
    </div>
  );
}

export default RecentDesigns;
