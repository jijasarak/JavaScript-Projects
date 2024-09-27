const menuItems = document.getElementById("MenuItems");

menuItems.style.maxHeight = "0px";

const menuToggle = () => {
  menuItems.style.maxHeight =
    menuItems.style.maxHeight == "0px" ? "200px" : "0px";
};


