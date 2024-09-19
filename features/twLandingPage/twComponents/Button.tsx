import React, { FunctionComponent, useMemo, useState } from "react";
import { motion } from "framer-motion";

import RightArrow from "../../../public/lp/right_arrow.svg";
import styles from "./button.module.css";

export interface ButtonProps {
  handleClick?: () => void;
  label: string;
  type?: "button" | "submit" | "reset";
  theme?: "primary" | "secondary" | "tertiary";
  className?: string;
  wide?: boolean;
  disabled?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({
  handleClick,
  label,
  type = "button",
  theme = "primary",
  disabled,
  className,
  wide,
}) => {
  const themeClasses = useMemo(() => {
    if (disabled) {
      return styles.buttonDisabled;
    }
    switch (theme) {
      case "primary":
        return `${styles.buttonPrimary} ${!disabled ? "hover:bg-gradient-to-r hover:from-[#dd0000] hover:to-[#ff9900]" : ""}`;
      case "secondary":
        return styles.buttonSecondary;
      case "tertiary":
        return styles.buttonSecondaryWhite;
      default:
        return styles.buttonPrimary;
    }
  }, [theme, disabled]);

  const [animate, setAnimate] = useState({ opacity: 0 });
  const [pos, setPos] = useState(5);

  return (
    <motion.button
      disabled={disabled}
      onClick={handleClick}
      className={`relative w-full rounded font-bold uppercase text-white md:w-64 ${wide ? "md:w-full md:max-w-fit" : "md:max-w-max"} ${className} font-pt-sans ${themeClasses}`}
      type={type}
      onMouseOver={() => {
        setAnimate({ opacity: 1 });
        setPos(-5);
      }}
      onMouseOut={() => {
        setAnimate({ opacity: 0 });
        setPos(5);
      }}
    >
      <motion.span
        initial={{ x: 5 }}
        animate={{ x: pos }}
        className="color-white font-sans tracking-wider"
      >
        {label}
      </motion.span>
      {theme === "primary" && !disabled ? (
        <motion.span
          className="color-white"
          initial={{ opacity: 0 }}
          animate={animate}
          transition={{ duration: 0.3 }}
        >
          <RightArrow />
        </motion.span>
      ) : null}
    </motion.button>
  );
};
