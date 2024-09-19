import { FC } from "react";

import styles from "./input.module.css";

export interface InputProps {
  placeholder: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const Input: FC<InputProps> = ({
  placeholder,
  label,
  handleChange,
  name,
}) => {
  return (
    <div className="relative flex w-full flex-col gap-4 lg:flex-row lg:justify-end">
      <label className="w-24 self-start text-left font-inter text-xs lg:self-center lg:text-right">
        {label}
      </label>
      <div className="relative flex w-full flex-col md:flex-row xl:max-w-[364px]">
        <input
          name={name}
          onChange={handleChange}
          className={`${styles.inputGradient} relative z-10 rounded border border-transparent bg-neutral-800 p-2 font-inter text-neutral-400`}
          placeholder={placeholder}
          style={{ width: "-webkit-fill-available" }}
        />
      </div>
    </div>
  );
};
