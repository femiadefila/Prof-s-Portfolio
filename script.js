let animations = document.querySelectorAll(".animation");

function showScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animations.length; i++) {
    let heightAnimation = animations[i].offsetTop;
    if (heightAnimation - 450 < scrollTop && !animations[i].classList.contains("showUp")) {
      animations[i].classList.add("showUp");
    }
  }
}

window.addEventListener("scroll", showScroll);

// HamburgerMenu
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuItems = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// close menu when you click on a menu item
menuItems.forEach(item => {
  item.addEventListener('click', function () {
    close();
  });
});

function show() {
  mainMenu.style.display = 'flex';
}

function close() {
  mainMenu.style.display = 'none';
}

