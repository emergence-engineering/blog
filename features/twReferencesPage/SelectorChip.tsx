import { FunctionComponent } from "react";
import { ptSans } from "../../utils/fonts";

interface ISelectorChipProps {
  selected: boolean;
  label: string;
  handleClick: () => void;
}

export const SelectorChip: FunctionComponent<ISelectorChipProps> = ({
  selected,
  label,
  handleClick,
}) => {
  return (
    <button
      className={`${selected && "bg-black font-bold text-white"} ${ptSans.className} flex rounded-full border border-solid border-customGray px-4 py-2 text-[10px] text-black`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
