import React, { useState } from "react";
import MenuIcon from "../../Components/Menu/MenuIcon";
import Backdrop from "../../Components/Menu/Backdrop";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Backdrop open={open} closeMenu={handleOpen} />
      <MenuIcon openMenu={handleOpen} />
    </>
  );
};

export default Menu;
