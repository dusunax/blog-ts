import { useRouter } from "next/router";
import Link from "next/link";

import NavMenu from "../../molecules/nav-menu/nav-menu";
import { useState } from "react";

const Header = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex py-2">
          <div className="drop-down text-2xl">πͺ</div>
          <NavMenu />
        </div>
        <div className="pt-40 pb-10">
          <h3 className="text-2xl font-semibold">
            κΈ°λ‘νλ νμ΄μ§: νλ‘ νΈμλ κ°λ° μΌμ§
          </h3>
          <Link href="/">http://dusuna.shop</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
