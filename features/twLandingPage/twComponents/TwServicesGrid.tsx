import { FC } from "react";
import Link from "next/link";
import { montserrat } from "../../../utils/fonts";
import { Button } from "./Button";

export interface TwServiceCardProps {
  Icon: any;
  title: string;
  content: string;
  path?: string;
}

export const TwServiceCard: FC<TwServiceCardProps> = ({
  Icon,
  title,
  content,
  path,
}) => {
  return (
    <div
      className={`${path && "shadow-productCard"} rounded-lg border border-black bg-white`}
    >
      <div className="grid grid-cols-[120px,1fr] items-center gap-4 border-b border-black">
        <div className="flex border-r border-black p-4">
          <Icon className="h-[100px] w-[100px]" />
        </div>
        <div className="title pl-2">
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
      </div>

      <div className="flex flex-col border-t p-4">
        <p className={`${montserrat.className} text-base font-normal`}>
          {content}
        </p>
        {path && (
          <Link href={path} className="self-end">
            <Button label="READ MORE" theme="tertiary" />
          </Link>
        )}
      </div>
    </div>
  );
};
