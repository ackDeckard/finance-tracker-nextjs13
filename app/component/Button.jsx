import React from "react";

function Button({ type, text }) {
  const RedButton = "text-red-600 font-bold border-red-600 bg-red-200";
  const Common = "bg-slate-700 border-slate-700 text-lime-400";

  return (
    <div>
      <button
        className={`
        ${type === "red" && RedButton} ${type === "common" && Common}
        } rounded-xl px-4 py-2 text-sm capitalize `}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
