import React from "react";
import "./cta.css";

interface Props {
  title: string;
  type: string;
  onClickCta: () => void;
}

const Cta = ({ title, type, onClickCta }: Props) => {
  return (
    <button className={`py-3 px-4 w-full rounded-xl font-bold ${type}`} onClick={onClickCta}>
      {title}
    </button>
  );
};

export default Cta;
