document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".sidebar-menu a");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove the "active" class from all menu items
      menuItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Add the "active" class to the clicked menu item
      item.classList.add("active");
    });
  });

  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ip = document.getElementById("ip").value;
    const subnet = document.getElementById("subnet").value;
    const gateway = document.getElementById("gateway").value;

    alert(`IP: ${ip}\nSubnet: ${subnet}\nGateway: ${gateway}`);
  });
});

const submenuIcons = document.querySelectorAll(
  `aside .asideNav .navItem .submenuIcon`
);

const asideIcon = document.querySelector(`aside .asideIcon`);
const submenus = document.querySelectorAll(`aside .asideNav .navItem .submenu`);
// handle opening every submenu when clicking the arrow btn
submenuIcons?.forEach((icon) => {
  icon.addEventListener("click", function () {
    icon.parentNode.classList.toggle("open");
  });
});
const aside = document.querySelector(` aside`);
const restPageFromAside = document.querySelector(` .header-main-section`);
// function to handle the showing of the submenus relating to the aside shrinked or not
function hideSubmenu() {
  if (aside?.classList.contains("shrink")) {
    submenus?.forEach((menu) => {
      if (menu.parentNode.classList.contains("open")) {
        menu.parentNode.classList.remove("open");
      }
    });
  }
}
// open aside when hover it
aside?.addEventListener("mouseenter", function () {
  if (!aside.classList.contains("shrink")) {
    aside.classList.remove("shrink");
    hideSubmenu();
  }
});
// close aside when the hover is done
aside?.addEventListener("mouseleave", function () {
  if (aside.classList.contains("shrink")) {
    aside.classList.add("shrink");
    hideSubmenu();
  }
});
hideSubmenu();
// handling the submenus when resizing to not effect the responsive
document.addEventListener("resize", hideSubmenu);
// toggle the aside with the aside btn at bigger screens
asideIcon?.addEventListener("click", function () {
  if (aside?.classList.contains("shrink")) {
    restPageFromAside?.classList.remove("full");
    aside.classList.remove("shrink");
  } else {
    restPageFromAside?.classList.add("full");
    aside.classList.add("shrink");
  }
  hideSubmenu();
});
