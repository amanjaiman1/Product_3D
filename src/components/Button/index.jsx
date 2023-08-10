import React from "react";
import { cn } from "../../utils/utils";

function Button({ className, children, ...rest }) {
  return (
    <button
      className={cn(
        ` bg-[#110F0F] hover:text-black hover:bg-white
      outline-none p-2 rounded-full px-5 border-gray-500 border-y-2`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
