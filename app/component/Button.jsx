"use Client";
import React from "react";

function Button({ type, text, hover, isModalOpen, setIsModalOpen }) {
  const RedButton = "text-red-600 font-bold border-red-600 bg-red-200";
  const Common = "bg-slate-700 border-slate-700 text-lime-400";
  const Hover = "hover:border-slate-700 hover:bg-slate-700 hover:scale-105";

  return (
    <div>
      <button
        className={`
        ${type === "red" && RedButton} ${type === "common" && Common}
        } rounded-xl px-4 py-2 text-sm capitalize  ${hover && Hover} `}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
