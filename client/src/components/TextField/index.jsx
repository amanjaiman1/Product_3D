import React from "react";
import { cn } from "../../utils/utils";

function TextField({ className, ...rest }) {
  return <input className={cn("", className)} {...rest} />;
}

export default TextField;
