import React from "react";
import { cn } from "../../utils/utils";

function FormGroup({ title, className, children, ...rest }) {
  return (
    <div className={cn("flex space-y-4 items-center", className)}>
      <div className="flex-[.5]">
        <label className="font-semibold text-white">{title}:-</label>
      </div>
      <div className="flex-[1]">{children}</div>
    </div>
  );
}

export default FormGroup;
