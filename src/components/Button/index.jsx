import React from "react";
import { cn } from "../../utils/utils";

function Button({ className, children, ...rest }) {
  return (
    <button
      className={cn(
        "bg-primary hover:bg-blue-700 outline-none p-3 rounded-lg text-white",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
