import React, { useState } from "react";
import Avatar from "../Avatar";
import { downloadCanvasToImage } from "../../utils/customizer.help";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import DialogBox from "../DialogBox";
import Button from "../Button";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { async } from "regenerator-runtime";
import { snapshot, useSnapshot } from "valtio";
import state from "../CustomizerViewer/valito";
import { db } from "./../../firebase/firebase";

function CustomizerNavBar() {
  const { designId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setshowDialog] = useState(false);
  const onShare = () => {
    if (isLoading) return;
    setIsLoading(true);
    const data = new FormData();
    const canvas = document.querySelector("canvas");
    const dataURL = canvas.toDataURL();
    data.append("file", dataURL);
    data.append("upload_preset", import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME);
    fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME
      }/upload`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        console.log(result);
        const link = document.createElement("a");
        link.href = `http://twitter.com/share?text=Just%20designed%20an%20amazing%203D%20t-shirt%20on%20${encodeURI(
          location.href
        )}!%20%F0%9F%98%8D%F0%9F%8E%A8%20Create%20your%20own%20custom%20designs%20and%20bring%20them%20to%20life.%20Express%20your%20unique%20style%20with%20personalized%20fashion!%20Check%20it%20out%20%F0%9F%91%89%20&url=${
          result.url
        }&hashtags=Tshirt,Customize,Fashion`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong report to admin");
        setIsLoading(false);
      });
  };
  const onSave = (e) => {
    e.preventDefault();
    setshowDialog(true);
  };
  const navigate = useNavigate();
  const onProfile = () => {
    navigate("/app/customizer/profile");
  };
  const onDownload = () => {
    downloadCanvasToImage();
  };
  const onHandleSave = async () => {
    try {
      const { uid } = JSON.parse(await localStorage.getItem("userInfo"));
      const designTitle = await localStorage.getItem("designName");
      const designRef = doc(db, "designs", designId);
      const designSnap = await getDoc(designRef);
      if (!designSnap.exists()) {
        await setDoc(designRef, {
          uid: uid,
          title: designTitle,
          lastUpdate: new Date().toUTCString(),
          ...snapshot(state),
        });
      } else {
        console.log("false");
        await updateDoc(designRef, {
          ...snapshot(state),
          title: designTitle,
          lastUpdate: new Date().toUTCString(),
        });
      }
      setshowDialog(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#09090C] text-white p-2 px-5 shadow-lg rounded-full">
      <div className="flex justify-center items-center space-x-2 sm:space-x-6">
        <div onClick={onSave} className="cursor-pointer hover:text-violet-500">
          Save
        </div>
        <div onClick={onShare} className="cursor-pointer hover:text-violet-500">
          Share
        </div>
        <div onClick={onDownload} className="cursor-pointer hover:text-violet-500">
          Export to PNG
        </div>
        <Avatar className={"w-10 h-10"} onClick={onProfile} />
      </div>
      <DialogBox setVisible={setshowDialog} visible={showDialog}>
        <div className="flex justify-center flex-col items-center h-full">
          <div>Do you want to save the design?</div>
          <div className="space-x-3 space-y-2">
            <Button
              className={
                "bg-[#09090C] text-white hover:bg-blue-900 hover:text-white "
              }
              onClick={onHandleSave}
            >
              Save
            </Button>
            <Button
              onClick={() => {
                setshowDialog(false);
              }}
              className={"bg-red-700  text-white  hover:bg-red-900 hover:text-white"}
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogBox>
    </div>
  );
}

export default CustomizerNavBar;
