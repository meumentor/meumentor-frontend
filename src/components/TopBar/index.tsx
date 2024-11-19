import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../Logo";
import { BoxMenu, Menu } from "./styles";
import SideMenu from "./SideMenu";
import { useState } from "react";
import useWindowDimensions from "@/lib/hooks/useWindowDimensions";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions()

  return (
    <BoxMenu>
      <Logo />
      <Menu>
        <button
          onClick={() => {
            document.body.style.overflow = 'hidden'
            setIsOpen(prev => !prev)
          }}
          style={{ background: "transparent", outline: "none", border: "none" }}
        >
          <RxHamburgerMenu className="icon-menu" size="1.8em" />
        </button>
        <SideMenu {...{ isOpen, setIsOpen, width }} />
      </Menu>
    </BoxMenu>
  );
}
