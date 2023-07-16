import React from "react";
import { cn } from "../../utils/utils";

function Avatar({ title, user, className, ...rest }) {
  return (
    <div
      {...rest}
      className={cn(
        `cursor-pointer flex justify-center items-center bg-pink-400  rounded-full`,
        className
      )}
    >
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPsDc4aXHKSmc9M7sBCaUJnwFs7xww7vlgq2Ix_XGgA&s"
        }
        alt="User Profile"
        className="rounded-full h-full w-full cursor-pointer hover:scale-110 transform transition-transform"
      />
    </div>
  );
}

export default Avatar;
