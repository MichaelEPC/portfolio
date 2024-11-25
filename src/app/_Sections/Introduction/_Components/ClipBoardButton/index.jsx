"use client";

import React from "react";

const EmailButton = () => {
  const [activateCopy, setActiveCopy] = React.useState(false);

  const handleCopy = async () => {
    navigator.clipboard.writeText("michaelposadadev@gmail.com");
    setActiveCopy(true);
    setTimeout(() => {
      setActiveCopy(false);
    }, 2000);
  };

  return (
    <div
      onClick={() => {
        handleCopy();
      }}
      className="relative rounded-full ml-2 p-1 border-2 border-slate-400 bg-slate-500 cursor-pointer"
    >
      <svg
        className="fill-white"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
      >
        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
      </svg>

      <div
        className={`${
          activateCopy ? "block " : "hidden"
        } absolute top-14 -left-1 p-1 bg-principal-color rounded-full`}
      >
        <p className="text-white font-normal">Copied</p>
      </div>
    </div>
  );
};

export default EmailButton;
