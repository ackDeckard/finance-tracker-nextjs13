import { currencyFormater } from "@/lib/utils";
import React from "react";

function ExpenseItem({ color, title, total }) {
  return (
    <div className="flex items-center justify-between rounded-3xl bg-slate-700 px-4 py-4 transition-transform  duration-200 ease-in hover:scale-105">
      <div className="flex items-center gap-2">
        <div className={`h-6 w-6 rounded-full ${color}`} />
        <h4 className="capitalize">{title}</h4>
      </div>
      <p>{currencyFormater(total)}</p>
    </div>
  );
}

export default ExpenseItem;
