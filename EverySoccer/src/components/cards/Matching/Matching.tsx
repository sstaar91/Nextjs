import React from "react";

const Matching = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-2 my-4 p-2 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="text-xs">24.08.05</div>
        <div className="text-xs">중랑 구립 구장 (양원역)</div>
      </div>
      <div className="flex items-center justify-around w-full">
        <div className="flex items-center justify-center flex-col">
          <div className="text-3xl font-medium">상두리 FC</div>
          <div className="text-xs">최근 전적 : 2승 1무 7패</div>
        </div>
        <div className="text-xl text-bold">17:00</div>
        <div className="flex items-center justify-center flex-col">
          <div className="text-3xl font-medium">두드림 FC</div>
          <div className="text-xs">최근 전적 : 4승 4무 2패</div>
        </div>
      </div>
    </div>
  );
};

export default Matching;
