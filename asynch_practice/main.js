async function fetchShoppingItems(api) {
  const res = await fetch(api);
  const data = await res.json();

  return data;
}

function renderShopItems(shopItems) {
  const shoppingList = document.getElementById("shopping-list");

  shopItems.forEach((shopItem) => {
    const listItem = document.createElement("li");
    listItem.classList.add("shop-item");

    listItem.innerHTML = `
    <img src="${shopItem.thumbnail}">
    <h2>${shopItem.title}</h2>
    <p>${shopItem.price}</p>
    <p>${shopItem.description}</p>
    
    `;
    shoppingList.appendChild(listItem);
  });
}

window.addEventListener("load", async () => {
  const shopItems = await fetchShoppingItems("https://dummyjson.com/products");

  renderShopItems(shopItems.products);
});
