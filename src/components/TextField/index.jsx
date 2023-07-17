import React from "react";
import { cn } from "../../utils/utils";

function TextField({ className, ...rest }) {
  return (
    <input
      className={cn(
        "p-2 border-2 border-gray-200 border-solid rounded-[3px] outline-none w-full",
        className
      )}
      {...rest}
    />
  );
}

export default TextField;
