import { FunctionComponent } from "react";

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
      className={`${selected && "bg-black font-bold text-white"} font-pt-sans border-customGray flex rounded-full border border-solid px-4 py-2 text-[10px] text-black`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
