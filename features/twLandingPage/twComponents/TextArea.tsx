import { FC } from "react";

import { inter } from "../../../utils/fonts";
import styles from "./input.module.css";

export interface TextareaProps {
  placeholder: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
}

export const Textarea: FC<TextareaProps> = ({
  placeholder,
  label,
  name,
  handleChange,
}) => {
  return (
    <div className="relative flex w-full flex-col gap-4 lg:flex-row lg:justify-end">
      <label
        className={`${inter.className} w-24 self-start text-left text-xs lg:pt-3 lg:text-right`}
      >
        {label}
      </label>
      <div className="relative flex w-full flex-col md:flex-row xl:max-w-[364px]">
        <textarea
          onChange={handleChange}
          name={name}
          className={`${styles.inputGradient} ${inter.className} relative z-10 h-40 rounded border border-transparent bg-neutral-800 p-2 text-neutral-400 focus:outline-none`}
          placeholder={placeholder}
          style={{ width: "-webkit-fill-available" }}
        />
      </div>
    </div>
  );
};
