import Image from "next/image";
import { Inter } from "@next/font/google";
import Button from "./component/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container mx-auto max-w-3xl px-6 py-6">
      <section>
        <small className="text-gray-400 ">Meu balanço</small>
        <h2 className="text-4xl font-bold">$ 100 000</h2>
      </section>

      <section>
        <Button type={"common"} text={"+ Gastos"} />
        <Button type={"blue"} text={"+ Renda"} />
      </section>
    </main>
  );
}
