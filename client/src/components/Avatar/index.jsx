import React from "react";
import { cn } from "../../utils/utils";

function Avatar({ title, className, ...rest }) {
  return (
    <div
      {...rest}
      className={cn(
        `cursor-pointer flex justify-center items-center bg-pink-400 p-5 w-8 h-8 rounded-full`,
        className
      )}
    >
      B
    </div>
  );
}

export default Avatar;
