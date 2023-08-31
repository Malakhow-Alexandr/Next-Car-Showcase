import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className=" container  mx-auto flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className=" flex flex-col  max-sm:items-center justify-start items-start gap-6">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={118}
              height={18}
              className="object-contain hover:scale-125 transition-all duration-200"
            />
          </Link>

          <p className="text-gray-700 text-base">
            Car Hub 2023
            <br />
            All rights reserved &copy;
          </p>
        </div>
        <ul className="footer__links ">
          {footerLinks.map((link) => {
            return (
              <li className="footer__link" key={link.title}>
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map((item) => (
                  <Link
                    className="hover:text-blue-500 transition-all duration-200"
                    key={item.title}
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                ))}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container mx-auto flex max-md:flex-col justify-between items-center flex-wrap border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link
            href="/"
            className="text-grey-500 hover:text-blue-500 transition-all duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-grey-500 hover:text-blue-500 transition-all duration-200"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
