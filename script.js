// let sprints = Array.from(document.querySelectorAll('.sprint'))
// addEventListener("onClick" )

let sprints = [...document.querySelectorAll(".sprint")];
let time = 3000;
let imageCounter = 0;

sprints[imageCounter].style.opacity = 1;

setInterval(imageSlide, time);

function imageSlide() {
  sprints[imageCounter].style.animation = "";
  sprints[imageCounter].style.opacity = 0;
  imageCounter = (imageCounter + 1) % sprints.length;
  sprints[imageCounter].style.animation = "300ms pageLoad--left ease-in";
  sprints[imageCounter].style.opacity = 1;
}

let menu = document.querySelector(".navbar__menu");
let links = document.querySelector(".navbar__mobile");

menu.addEventListener("click", () => {
  //   console.log(links.style.display);
  links.style.display === "none"
    ? (links.style.display = "grid")
    : (links.style.display = "none");
});
