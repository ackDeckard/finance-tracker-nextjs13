import Image from "next/image";
import React from "react";

import { MdQueryStats } from "react-icons/md";
import Button from "./Button";

function Header() {
  return (
    <header className="container mx-auto max-w-3xl px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* user image */}
          <Image
            src="/steam.jpg"
            alt="user profile image"
            width={0}
            height={0}
            unoptimized
            className="mr-2 h-11 w-11 rounded-full"
          />

          {/* user profile name */}
          <small>Olá, usuário</small>
        </div>

        <nav className="flex gap-2">
          <div>
            <MdQueryStats size={30} />
          </div>
          <div>
            <Button text={"Sign out"} type={"red"} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
