import React, { useEffect, useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import CommunityPreviewCard from "../../components/CommunityPreviewCard";
import { generateUUID } from "three/src/math/MathUtils";
function CommunityContainer() {
  const [state, setState] = useState({
    loading: true,
    data: [],
  });
  const [search, setsearch] = useState("");
  useEffect(() => {
    const arr = [];
    const getData = async () => {
      const colRef = collection(db, "designs");
      const q = query(colRef, where("isCommunity", "==", true));
      var data = await (await getDocs(q)).docs;
      data.forEach(async (item) => {
        try {
          const userInfo = JSON.parse(await localStorage.getItem("userInfo"));
          arr.push({ ...item.data(), uid: userInfo.uid, id: generateUUID() });
        } catch (error) {
          console.log(error);
        }
      });
      setState({ loading: false, data: arr });
    };
    getData();
  }, []);
  const hadleSearch = async () => {
    let arr = [];
    let colRef = collection(db, "designs");
    let q = query(colRef, where("isCommunity", "==", true));
    let data = await (await getDocs(q)).docs;
    data.forEach(async (item) => {
      try {
        const userInfo = JSON.parse(await localStorage.getItem("userInfo"));
        arr.push({ ...item.data(), uid: userInfo?.uid, id: generateUUID() });
      } catch (error) {
        console.log(error);
      }
    });
    let newArr = arr.filter((e) => {
      return e?.title?.includes(search);
    });
    setState({ loading: false, data: newArr });
  };
  return (
    <div className="max-h-screen border-2 p-2 m-10">
      <div className="flex items-center space-y-2">
        <TextField
          onChange={(event) => setsearch(event.target.value)}
          placeHolder="Search Design"
        />
        <Button
          onClick={hadleSearch}
          className={"bg-primary p-2 text-white hover:bg-blue-600 hover:text-white"}
        >
          Search
        </Button>
      </div>
      <div className="flex flex-wrap">
        {state.loading ? (
          <h1>Loading..</h1>
        ) : (
          state?.data?.map((e) => <CommunityPreviewCard data={e} />)
        )}
      </div>
    </div>
  );
}

export default CommunityContainer;
