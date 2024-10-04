import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="w-full pb-20">
      <InlineWidget
        styles={{ minWidth: "max-content", height: "630px" }}
        url="https://calendly.com/viktor-vaczi/chat-with-v"
      />
    </div>
  );
};

export default Calendly;
