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
        referrerpolicy="no-referrer"
        src={user?.profilePic}
        alt="User Profile"
        className="rounded-full h-full w-full cursor-pointer hover:scale-110 transform transition-transform"
      />
    </div>
  );
}

export default Avatar;
