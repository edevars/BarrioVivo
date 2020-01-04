import React, { useState } from "react";
import MenuIcon from "../../Components/Menu/MenuIcon";
import Backdrop from "../../Components/General/Backdrop";
import MenuSlide from "../../Components/Menu/MenuSlide";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <MenuIcon openMenu={handleOpen} />
      <Backdrop open={open} closeBackdrop={handleOpen} />
      <MenuSlide open={open} />
    </>
  );
};

export default Menu;
