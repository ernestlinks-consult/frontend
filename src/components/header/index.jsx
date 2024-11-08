"use client";
import Logo from "./logo";
import Button from "../button";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = "/images/elc-logo.png";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="max-w-full max-h-[120px] items-center justify-between">
      <div className="flex flex-row items-center  mx-[120px] my-3">
        <div>
          <Logo image={logo} alt={"elc-logo"} className="w-iw h-ih" />
        </div>
        <div className="w-[550px] mr-12 ml-60">
          <ul className="text-base flex space-x-4">
            <li className="p-2.5">
              <a href="#about" className="mx-4">
                About
              </a>
            </li>
            <li className="p-2.5">
              <a href="#service" className="mx-4">
                Service
              </a>
            </li>
            <li className="p-2.5">
              <a href="#resource" className="mx-4">
                Resource
              </a>
            </li>
            <li className="p-2.5">
              <a href="#contact" className="mx-4">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="w-auto ml-auto ">
          <Button
            cta="Get started"
            icon={<PanToolAltIcon />}
            className="text-white bg-customblue p-4 rounded-8 md:h-hmd lg:h-hlg"
          />
        </div>
      </div>
    </header>
  );
}
