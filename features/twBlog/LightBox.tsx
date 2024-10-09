import React, { FunctionComponent } from "react";
import Image from "next/image";

export const LightBox: FunctionComponent<{
  src: string;
  isOpen: boolean;
  title?: string;
}> = ({ src, isOpen, title }) => {
  return (
    <>
      {isOpen ? (
        <>
          <div className="fixed left-0 top-0 z-[100] h-full w-full bg-black opacity-70" />
          <div className="fixed left-1/2 top-1/2 z-[200] w-[70%] -translate-x-1/2 -translate-y-1/2 transform max-md:w-[95%]">
            <div className="flex flex-col items-center p-4">
              <img
                src={src}
                alt="image"
                className="h-auto w-full object-contain"
              />
              {title && (
                <h1 className="mt-2 w-max bg-white p-2 font-extrabold text-black">
                  {title}
                </h1>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt="image"
              fill
              style={{
                objectFit: "contain",
              }}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
          {title && (
            <span className="mb-2 block text-center text-sm text-gray-600">
              {title}
            </span>
          )}
        </>
      )}
    </>
  );
};