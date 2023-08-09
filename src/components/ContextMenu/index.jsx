import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { db } from "../../firebase/firebase";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import DialogBox from "./../DialogBox";
import { serializeToP3D } from "../../utils/utils";
import FileSaver from "file-saver";
function ContextMenu({ x, y, data, onClose }) {
  const [visible, setvisible] = useState(false);
  const navigate = useNavigate();
  const handleOpenNewtab = (event) => {
    window.open(`/app/customizer/editor/${data?.id}`, "_blank")?.focus();
  };
  const handleAddFav = async (event) => {
    try {
      const docRef = doc(db, "designs", data?.id);
      const designData = await getDoc(docRef);
      if (designData.exists()) {
        await updateDoc(docRef, { isFavourite: true });
      }
      onClose(null);
    } catch (err) {
      console.log(err);
    }
  };
  const handleShareCommunity = async (event) => {
    try {
      const docRef = doc(db, "designs", data?.id);
      const designData = await getDoc(docRef);
      if (designData.exists()) {
        await updateDoc(docRef, { isCommunity: true });
      }
      onClose(null);
    } catch (err) {
      console.log(err);
    }
  };
  const handleExport = async (event) => {
    try {
      const serializedData = serializeToP3D(data);
      const blob = new Blob([serializedData], { type: "text/plain;charset=utf-8" });
      FileSaver.saveAs(blob, data?.uid + ".p3d");
    } catch (error) {
      console.log(error);
    }
  };
  const handleRename = (event) => {
    navigate(`/app/customizer/editor/${data?.id}`);
  };
  const handleDelete = async (event) => {
    try {
      const docRef = doc(db, "designs", data?.id);
      const designData = await getDoc(docRef);
      if (designData.exists()) {
        await deleteDoc(docRef);
      }
      onClose(null);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log({ x: x, y: y, ctx: data });
  }, []);
  return (
    <div
      style={{ position: "fixed", top: y, left: x }}
      className={`shadow border-2 w-[250px] bg-white rounded-lg z-50 p-3`}
    >
      <ul>
        <li
          className="cursor-pointer border-b-2 hover:bg-slate-200 p-2"
          onClick={handleOpenNewtab}
        >
          Open in New tab
        </li>
        <li
          className="cursor-pointer border-b-2 hover:bg-slate-200 p-2"
          onClick={handleAddFav}
        >
          Add to Favourite
        </li>
        <li
          className="cursor-pointer border-b-2 hover:bg-slate-200 p-2"
          onClick={handleRename}
        >
          Rename
        </li>
        <li
          className="cursor-pointer border-b-2 hover:bg-slate-200 p-2"
          onClick={handleExport}
        >
          Export
        </li>
        <li
          className="cursor-pointer  hover:bg-slate-200 p-2"
          onClick={handleShareCommunity}
        >
          Share to Community
        </li>
        <li
          className="cursor-pointer  hover:bg-slate-200 p-2"
          onClick={() => {
            setvisible(true);
          }}
        >
          Delete
        </li>
        <li
          className="cursor-pointer  hover:bg-slate-200 p-2"
          onClick={() => {
            onClose(null);
          }}
        >
          Close
        </li>
      </ul>
      <DialogBox visible={visible}>
        <div className="flex flex-col justify-center items-center h-full">
          <div>Do you want remove the Design?</div>
          <div className="space-x-3 space-y-2">
            <Button
              onClick={handleDelete}
              className="bg-red-700  text-white  hover:bg-red-900 hover:text-white"
            >
              Delete
            </Button>
            <Button
              className={"bg-primary text-white hover:bg-blue-900 hover:text-white"}
              onClick={() => setvisible(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogBox>
    </div>
  );
}

export default ContextMenu;
