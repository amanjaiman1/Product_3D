import React from "react";
import { cn } from "../../utils/utils";

function Avatar({ title, user, className, ...rest }) {
  return (
    <div
      {...rest}
      className={cn(
        `cursor-pointer flex justify-center items-center bg-pink-400 p-5 w-8 h-8 rounded-full`,
        className
      )}
    >
      <img
        width={"100%"}
        height={"100%"}
        src={user?.profilePic}
        alt="User Profile"
        className="rounded-full h-16 w-16 sm:h-5 sm:w-5 lg:h-10 lg:w-10 cursor-pointer hover:scale-110 transform transition-transform"
      />
    </div>
  );
}

export default Avatar;
