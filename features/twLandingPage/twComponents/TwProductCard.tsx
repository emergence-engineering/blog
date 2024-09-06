import { FC } from "react";
import Image from "next/image";
import { Button } from "./Button";

interface ProductCardProps {
  productName: string;
  productLabel?: string;
  productDescription: string;
  productImage: string;
  productLink?: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  productName,
  productLabel,
  productImage,
  productDescription,
  productLink,
}) => {
  return (
    <div className="flex flex-col items-center rounded border border-solid border-black shadow-productCard">
      <div className="flex w-full items-center justify-between bg-black p-4">
        <div className="font-pt-sans-narrow text-xl font-bold text-white lg:text-3.5xl">
          {productName}
        </div>
        {productLabel && (
          <div className="flex max-w-half items-center justify-center rounded-3xl bg-product-card-yellow px-3 py-2 font-montserrat text-xs leading-normal lg:text-sm">
            {productLabel}
          </div>
        )}
      </div>
      <div className="flex flex-grow flex-col justify-between p-4">
        <div className="flex flex-col gap-4">
          <div className="font-montserrat text-sm lg:text-base">
            {productDescription}
          </div>
          <div className="relative mb-4 flex w-full justify-center">
            <Image
              src={productImage}
              alt={productName}
              width={productName === "Swaralink" ? 340 : 450}
              height={450}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
        {productLink && (
          <a
            href={productLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto self-end"
          >
            <Button
              label="WEBSITE"
              handleClick={() => {}}
              theme="tertiary"
              className="self-end"
            />
          </a>
        )}
      </div>
    </div>
  );
};
