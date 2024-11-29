"use client";

import React, { useEffect, useState } from "react";
import PCSreen from "./_Components/PCScreen";
import TabletScreen from "./_Components/TabletScreen";

const AdaptProjectCardsToScreen = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="z-30 h-auto w-full flex justify-center">
      {width >= 1750 ? <PCSreen /> : <TabletScreen />}
    </div>
  );
};

export default AdaptProjectCardsToScreen;
