import React from "react";

function ContributorCard({ contributor, index }) {
  return (
    <div
      key={contributor?.id}
      className={`flex flex-col items-center space-y-4 text-center group transition duration-300 ease-in-out transform-gpu hover:scale-105`}
      style={{ width: "11rem" }}
    >
      <a
        rel="noopener noreferrer"
        href={`https://github.com/${contributor?.login}`}
        aria-label="GitHub"
        className="p-2 rounded-md group-hover:text-violet-400 relative group"
      >
        <img
          src={contributor?.avatar_url}
          alt="avatar"
          className="w-32 h-32 mx-auto rounded-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-[-1]"></div>
      </a>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-violet text-white">
          {contributor?.login}
        </h2>
        <p className="text-xs text-white">{`Contributions: ${contributor?.contributions}`}</p>
      </div>
    </div>
  );
}

export default ContributorCard;
