import React, { useState } from "react";
import MenuIcon from "../../Components/Menu/MenuIcon";
import Backdrop from "../../Components/General/Backdrop";
import MenuSlide from "../../Components/Menu/MenuSlide";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuIcon openMenu={handleOpen} />
      <Backdrop open={open} closeBackdrop={handleOpen} />
      <MenuSlide open={open} closeMenu={handleClose}/>
    </>
  );
};

export default Menu;
