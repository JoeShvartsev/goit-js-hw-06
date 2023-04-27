const categoryEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoryEl.length}`);

categoryEl.forEach(categ => {
  console.log(`Category: ${categ.firstElementChild.textContent}`);
  console.log(`Elements: ${categ.lastElementChild.querySelectorAll('li').length}`);
});