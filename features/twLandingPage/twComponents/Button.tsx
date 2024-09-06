import React, { FunctionComponent, useMemo, useState } from "react";
import { motion } from "framer-motion";

import styles from "./button.module.css";
import RightArrow from "../../../public/lp/right_arrow.svg";

export interface ButtonProps {
  handleClick?: () => void;
  label: string;
  type?: "button" | "submit" | "reset";
  theme?: "primary" | "secondary" | "tertiary";
  className?: string;
  wide?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({
  handleClick,
  label,
  type = "button",
  theme = "primary",
  className,
  wide,
}) => {
  const themeClasses = useMemo(() => {
    switch (theme) {
      case "primary":
        return styles.buttonPrimary;
      case "secondary":
        return styles.buttonSecondary;
      case "tertiary":
        return styles.buttonSecondaryWhite;
      default:
        return styles.buttonPrimary;
    }
  }, [theme]);

  const [animate, setAnimate] = useState({ opacity: 0 });
  const [pos, setPos] = useState(5);

  return (
    <motion.button
      onClick={handleClick}
      className={`uppercase ${themeClasses} relative w-full rounded font-bold text-white md:w-64 ${wide ? "md:w-full md:max-w-fit" : "md:max-w-max"} ${className} font-pt-sans`}
      type={type}
      onMouseOver={() => {
        setAnimate({ opacity: 1 });
        setPos(-5);
      }}
      onMouseOut={() => {
        setAnimate({ opacity: 0 });
        setPos(5);
      }}
      whileHover={
        theme === "primary"
          ? {
              background: "linear-gradient(90deg, #ff0000, #ff9900) border-box",
            }
          : {}
      }
    >
      <motion.span
        initial={{ x: 5 }}
        animate={{ x: pos }}
        className="color-white"
      >
        {label}
      </motion.span>
      {theme === "primary" ? (
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
