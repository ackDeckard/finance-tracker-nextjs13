"use client";
import { Inter } from "@next/font/google";
import Button from "./component/Button";
import { currencyFormater } from "@/lib/utils";
import ExpenseItem from "./component/ExpenseItem";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { useState } from "react";
import Modal from "./component/Modal";

ChartJS.register(ArcElement, Tooltip, Legend);

const inter = Inter({ subsets: ["latin"] });

const DUMMY = [
  {
    id: 1,
    title: "Coding classes",
    total: 500,
    color: "bg-yellow-500",
  },
  {
    id: 2,
    title: "Swimming classes",
    total: 200,
    color: "bg-emerald-700",
  },
  {
    id: 3,
    title: "History fund",
    total: 500,
    color: "bg-purple-700",
  },
  {
    id: 4,
    title: "Games",
    total: 600,
    color: "bg-stone-700",
  },
  {
    id: 5,
    title: "Cinema",
    total: 50,
    color: "bg-pink-700",
  },
];

export default function Home() {
  const [showAddIncomeModel, setshowAddIncomeModel] = useState(false);
  return (
    <>
      {/* add income modal */}
      <Modal show={showAddIncomeModel} onClose={setshowAddIncomeModel}>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <label htmlFor="amount">Income Amount</label>
            <input
              type="number"
              name="amount"
              min={0.01}
              step={0.01}
              placeholder="Enter income amount"
              required
              className="rounded-lg bg-slate-600 px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="description">Description</label>
            <input
              type="number"
              name="description"
              placeholder="Enter description"
              required
              className="rounded-lg bg-slate-600 px-4 py-2"
            />
            <button className="w-1/3 rounded-lg bg-slate-600 px-4 py-2">
              Add amount
            </button>
          </div>
        </form>
      </Modal>

      <main className="container mx-auto max-w-3xl px-6 py-6 ">
        {/* show current finance balance, uses util to format the currency  */}
        <section className="py-3">
          <small className="text-gray-400 ">Meu balanço</small>
          <h2 className="text-4xl font-bold">{currencyFormater(143000)}</h2>
        </section>

        {/* add expenses/income  */}
        <section className="flex items-center py-3">
          <Button type={""} text={"Expenses (-)"} hover={true} />
          <Button
            type={"blue"}
            text={"Income (+)"}
            hover={true}
            show={showAddIncomeModel}
            onClose={setshowAddIncomeModel}
          />
        </section>

        {/* detailed expenses */}
        <section className="py-6">
          <h3 className="text-gray-400">My expenses</h3>
          <div className="mt-6 flex flex-col gap-4">
            {DUMMY.map(({ id, title, total, color }) => (
              <ExpenseItem key={id} title={title} total={total} color={color} />
            ))}
          </div>
        </section>

        {/* Char section */}
        <section className="py-6">
          <h3 className="text-gray-400">Stats</h3>
          <div className="mx-auto w-1/2">
            <Doughnut
              data={{
                labels: DUMMY.map((item) => item.title),
                datasets: [
                  {
                    label: "Expenses",
                    data: DUMMY.map((item) => item.total),
                    backgroundColor: DUMMY.map((item) => item.color),
                    borderColor: ["#18181b"],
                    borderWidth: 2,
                  },
                ],
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
