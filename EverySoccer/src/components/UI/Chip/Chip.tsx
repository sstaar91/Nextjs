import React from "react";

interface Props {
  status: string;
}

const Chip = ({ status }: Props) => {
  const chipColor: { [key: string]: string } = {
    win: "bg-green-500",
    draw: "bg-red-600",
    loose: "bg-stone-400",
  };

  return <div className={`${chipColor[status]}`}></div>;
};

export default Chip;
