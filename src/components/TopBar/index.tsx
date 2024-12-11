import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../Logo";
import { BoxMenu, Menu } from "./styles";
import SideMenu from "./SideMenu";
import { useState } from "react";

interface TopBarProps {
  logged?: boolean
}

export default function TopBar(props: TopBarProps) {
  const [isOpen, setIsOpen] = useState(false)
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
        <SideMenu {...{ isOpen, setIsOpen, ...props }} />
      </Menu>
    </BoxMenu>
  );
}
