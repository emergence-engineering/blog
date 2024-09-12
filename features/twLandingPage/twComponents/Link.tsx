import { FC, useState } from "react";
import { motion } from "framer-motion";

import ArrowOutwardIcon from "../../../public/lp/arrow_outward.svg";
import { ptSans } from "../../../utils/fonts";

export interface LinkProps {
  href: string;
  label: string;
  website?: boolean;
}

export const Link: FC<LinkProps> = ({ href, label, website }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <motion.a
      href={href}
      className={`${ptSans.className} flex max-w-fit items-center justify-end gap-2 self-end bg-gradient-to-r from-red-600 via-orange-500 to-amber-300 bg-clip-text font-bold uppercase tracking-wider text-transparent`}
      whileHover={{
        background: "linear-gradient(90deg,  #fcd34d,#dc2626)",
        color: "transparent",
        backgroundClip: "text",
      }}
      target={website ? "_blank" : "_self"}
      onMouseOver={() => {
        setX(3);
        setY(-3);
      }}
      onMouseOut={() => {
        setX(0);
        setY(0);
      }}
    >
      {label}
      <motion.div initial={{ x: 0, y: 0 }} animate={{ x, y }}>
        <ArrowOutwardIcon />
      </motion.div>
    </motion.a>
  );
};
