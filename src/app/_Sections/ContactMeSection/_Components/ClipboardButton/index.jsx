"use client";

import React from "react";

const ClipBoardButton = ({ clipBoard }) => {
  const [activateCopy, setActiveCopy] = React.useState(false);

  const handleCopy = async () => {
    navigator.clipboard.writeText(clipBoard);
    setActiveCopy(true);
    setTimeout(() => {
      setActiveCopy(false);
    }, 4000);
  };
  return (
    <div
      className="cursor-pointer relative"
      onClick={() => {
        handleCopy();
      }}
    >
      <div
        className={`${
          activateCopy
            ? "bg-principal-color block text-white font-semibold p-1 rounded-lg absolute -top-4 -right-16"
            : "hidden"
        } `}
      >
        ¡Copied!
      </div>
      <svg
        className="fill-text-color ml-1"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
      </svg>
    </div>
  );
};

export default ClipBoardButton;
