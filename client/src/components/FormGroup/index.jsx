import React from "react";
import { cn } from "../../utils/utils";

function FormGroup({ title, className, children, ...rest }) {
  return (
    <div className={cn("flex space-x-3 items-center", className)}>
      <label className="font-semibold">{title}:-</label>
      {children}
    </div>
  );
}

export default FormGroup;
