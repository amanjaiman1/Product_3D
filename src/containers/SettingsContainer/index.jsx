import React, { useEffect, useState } from "react";
import FormGroup from "../../components/FormGroup";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

function SettingsContainer() {
  return (
    <div className="flex space-y-5 flex-wrap p-4 items-center border-2 border-gray-200 border-solid shadow-md m-10">
      <div className="flex w-full">
        <label className="flex-[.2] text-white" htmlFor="">
          Theme
        </label>
        <select className="flex-[.1]" name="" id="">
          <option value="">Dark</option>
          <option value="">Light</option>
        </select>
      </div>
      <div className="flex w-full text-white">
        <label className="flex-[.2]" htmlFor="">
          Language
        </label>
        <select className="flex-[.1]" name="" id="">
          <option value="">English</option>
          <option value="">Tamil</option>
          <option value="">Hindi</option>
        </select>
      </div>
      <Button className={"bg-primary text-white hover:bg-blue-900 hover:text-white"}>
        Save Changes
      </Button>
    </div>
  );
}

export default SettingsContainer;
