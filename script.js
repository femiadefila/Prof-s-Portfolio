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
