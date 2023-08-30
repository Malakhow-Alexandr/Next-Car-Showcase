import Link from "next/link";
import Image from "next/image";

import "./header.css";
import { CustomButton } from "..";

const Header = () => {
  return (
    <header className="w-full absolute z-10 ">
      <nav className="nav">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain hover:scale-125 transition-all duration-200"
          />
        </Link>
        <CustomButton
          btnType="button"
          title="Sing In"
          containerStyles="header-sing-in-button duration-200"
        />
      </nav>
    </header>
  );
};

export default Header;
