let btn = document.getElementById("btn");
let card = document.getElementById("card17");

btn.addEventListener("click", () => {
  card.scrollIntoView({ behavior: "smooth" });
});

//много параметров, все можно посмотреть на mdn

let goTopBtn = document.getElementById("gotop");
goTopBtn.addEventListener("click", () => {
  //   window.scrollTo(0, 0);
  window.scrollTo({ top: 0, behavior: "smooth" });
});
