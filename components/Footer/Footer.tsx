import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className=" container  mx-auto flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className=" flex flex-col  max-sm:items-center justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
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
                  <Link key={item.title} href={item.url}>
                    {item.title}
                  </Link>
                ))}
                item
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
