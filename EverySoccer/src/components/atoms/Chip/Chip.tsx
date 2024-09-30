import React from "react";

interface Props {
  status: string;
  size?: string;
}

const Chip = ({ status, size = "m" }: Props) => {
  const chipColor: { [key: string]: string } = {
    win: "bg-green-500",
    draw: "bg-stone-400",
    lose: "bg-red-600",
  };

  const sizeList: { [key: string]: string } = {
    l: "w-5 h-5",
    m: "w-4 h-4",
    s: "w-3 h-3",
  };

  return <div className={`${chipColor[status]} ${sizeList[size]} rounded-full`}></div>;
};

export default Chip;
