import React from "react";

interface TabComponentProps {
  tab: "article" | "tech";
  setTab: React.Dispatch<React.SetStateAction<"article" | "tech">>;
}

const TabComponent: React.FC<TabComponentProps> = ({ tab, setTab }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-center font-pt-sans">
        <div
          className={`cursor-pointer px-8 pb-2 font-semibold ${
            tab === "article"
              ? "border-b-4 border-red-500"
              : "border-b border-gray-300"
          }`}
          onClick={() => setTab("article")}
        >
          ARTICLES
        </div>
        <div
          className={`cursor-pointer px-5 pb-2 font-semibold ${
            tab === "tech"
              ? "border-b-4 border-red-500"
              : "border-b border-gray-300"
          }`}
          onClick={() => setTab("tech")}
        >
          TECH BLOG
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
