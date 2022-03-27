const navToggle = document.querySelector(".nav-toggle");
const link = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //console.log(link.classList);
  //console.log(link.classList.contains("random")); false
  //console.log(link.classList.contains("links")); true
 // 1.yol
//   if (link.classList.contains("show-links")) {
//     link.classList.remove("show-links");
//   } else {
//     link.classList.add("show-links");
//   }
//2.yol
  link.classList.toggle("show-links");
});
