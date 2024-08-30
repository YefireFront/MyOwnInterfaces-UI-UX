const $ = (Selector) => document.querySelector(Selector);
const card = $(".card");
const card_info = $(".detail__data");
const detail__btn = $(".detail__btn");

console.log(card);
console.log(card_info);
console.log(detail__btn);

card.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Card...");
});
card_info.addEventListener("click",(e) => {
    e.stopPropagation()
    console.log("Card_ Info.....");
});
detail__btn.addEventListener("click",(e) => {
    e.stopPropagation()
  console.log("Card button ...");
});
