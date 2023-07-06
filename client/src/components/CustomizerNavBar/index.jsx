import React, { useState } from "react";
import Avatar from "../Avatar";
import { downloadCanvasToImage } from "../../utils/customizer.help";

function CustomizerNavBar() {
  const [isLoading, setIsLoading] = useState(false);
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
  const onSave = () => {
    alert("onSaved");
  };
  const onProfile = () => {};
  const onDownload = () => {
    downloadCanvasToImage();
  };
  return (
    <div className="bg-white p-2 px-5 shadow-lg rounded-full">
      <div className="flex justify-center items-center space-x-2 sm:space-x-6">
        <div onClick={onSave} className="cursor-pointer hover:text-blue-500">
          Save
        </div>
        <div onClick={onShare} className="cursor-pointer hover:text-blue-500">
          Share
        </div>
        <div onClick={onDownload} className="cursor-pointer hover:text-blue-500">
          Export to PNG
        </div>
        <Avatar onClick={onProfile} />
      </div>
    </div>
  );
}

export default CustomizerNavBar;
