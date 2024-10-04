import React, { FC, useState } from "react";
import RemoveIcon from "../../../public/lp/remove.svg";
import AddIcon from "../../../public/lp/add.svg";

const TwAccordion: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Proven tech skills",
      content:
        "With many clients and projects behind us, our experience covers everything from quick prototypes to enterprise apps. Besides using Node.js on back-end we are experts with React, ProseMirror, Kubernetes, Scala and many more.",
    },
    {
      title: "Speed to market",
      content:
        "The goal is to launch your app quickly. We help speed up development with experienced developers and marketers. Therefore, you will get a product or prototype that can be tested and showcased as soon as possible.",
    },
    {
      title: "End-to-End Support",
      content:
        "You can rely on us from product ideation through design, development, SEO, and marketing. We can take part in planning or even take over project management or architecture.",
      span: "After the project, we will stay to maintain and to provide 24/7 support.",
    },
    {
      title: "On-demand",
      content:
        "Our team adjusts to your team’s changing needs, scaling up or down as required. We give you expertise and software engineers based on your project characteristics, and assign dedicated project managers.",
    },
    {
      title: "Performance",
      content:
        "We use technologies trusted by industry giants to build fast, high-performance apps with great user experiences. Our tech stack and test automation processes ensure we deliver robust, scalable products.",
    },
  ];

  return (
    <div className="mx-auto flex w-full flex-col">
      <style jsx>{`
        .accordion-background {
          background:
            linear-gradient(#000, #000) padding-box,
            linear-gradient(90deg, #ff0000, #ff9900) border-box;

          border-bottom: 2px solid transparent;

          @media (min-width: 769px) {
            background:
              linear-gradient(#fff, #fff) padding-box,
              linear-gradient(90deg, #ff0000, #ff9900) border-box;
          }
        }

        .svg-icon {
          svg {
            fill: white;
            path {
              fill: white;
            }
          }

          @media (min-width: 769px) {
            svg {
              fill: black;
              path {
                fill: black;
              }
            }
          }
        }
      `}</style>
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-background w-full">
          <div
            className="flex cursor-pointer items-center justify-between py-4"
            onClick={() => handleAccordionClick(index)}
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            {activeIndex === index ? (
              <RemoveIcon className="svg-icon h-6 w-6" />
            ) : (
              <AddIcon className="svg-icon h-6 w-6" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4 font-montserrat">
              {item.content}{" "}
              <span className="font-montserrat font-bold">
                {" "}
                {item.span && item.span}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwAccordion;
