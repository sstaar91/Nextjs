import React from "react";
import "./Cta.css";

interface Props {
  title: string;
  styleType: string;
  onClickAction: () => void;
}

const Cta = ({ title, styleType, onClickAction }: Props) => {
  return (
    <button className={`${styleType}`} onClick={onClickAction}>
      {title}
    </button>
  );
};

export default Cta;
