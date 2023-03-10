"use client";
import React from "react";
import { RiCloseLine } from "react-icons/ri";

function Modal({ show, onClose, children }) {
  return (
    <div
      className={`${
        show ? "transform: translate-x-[200%]" : "transform: translate-x-0"
      }  absolute top-0 left-0 z-30 h-[80vh] w-full drop-shadow-xl transition-all duration-500`}
    >
      <div className="container mx-auto h-full max-w-lg rounded-lg bg-slate-800 py-6 px-4">
        <button
          onClick={() => {
            onClose(true);
          }}
        >
          <RiCloseLine
            size={25}
            color={"bg-white "}
            className="h-9 w-9 rounded-lg bg-slate-600"
          />
        </button>
        <h3>{children}</h3>
      </div>
    </div>
  );
}

export default Modal;
