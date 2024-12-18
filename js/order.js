let bagItemsObject;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems"); // Retrieve from localStorage
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []; // Parse or initialize as an empty array if not found
  loadBagItemObjects();
  displayItems();
  displayBagSummary();
}

function displayBagSummary() {
  let paymentBox = document.querySelector(".payment-box");
  let totalItem = bagItemsObject.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPyament = 0;

  bagItemsObject.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });
  finalPyament = totalMRP - totalDiscount + 70 - 3.23;

  paymentBox.innerHTML = `
        <p class="price-heading">Price Details (${totalItem} items)</p>
          <div class="bag-mrp">
            <p class="bag-mrp-text">Bag MRP :</p>
            <p class="bag-mrp-price">&#8377;${totalMRP}</p>
          </div>
          <div class="bag-discount">
            <p class="bag-discount-text">Bag Discount :</p>
            <p class="bag-discount-price">&#8377;${totalDiscount}</p>
          </div>
          <div class="discount">
            <p class="discount-text">Discount :</p>
            <p class="discount-price">&#8377;3.23</p>
          </div>
          <div class="shipping">
            <p class="shipping-text">Shipping :</p>
            <p class="shipping-price">&#8377;70</p>
          </div>
          <div class="total-amount">
            <p class="total-amount-text">You Pay :</p>
            <p class="total-amount-price">&#8377;${finalPyament}</p>
          </div>
          <div class="place-order">
            <a href="../html/sucess.html" class="place"> PROCEED <i class="fa-solid fa-arrow-right"></i></a>
          </div>`;
}

function loadBagItemObjects() {
  bagItemsObject = bagItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter((bagItemId) => bagItemId != itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  loadBagItemObjects();
  displayItems();
  displayBagIcon();
  displayBagSummary();
}
function displayItems() {
  let itemContainer = document.querySelector(".ordered-item-description");
  let innerHTML = "";
  bagItemsObject.forEach((bagItem) => {
    innerHTML += generateItems(bagItem);
  });
  itemContainer.innerHTML = innerHTML;
}

function generateItems(item) {
  return `
    <div class="ordered-item-box">
        <div class="ordered-item">
            <div class="ordered-item-image">
                <img src="${item.image}" alt="${item.product}">
            </div>
            <div class="ordered-item-name">
                ${item.product} <br>
            </div>
            <div class="ordered-item-delete" onclick="removeFromBag(${item.id})">
                <button class="ordered-item-deleteicon">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
        <div class="ordered-item-price">
            <span class="no-of-item">Quantity : 1 <i class="fa-solid fa-chevron-down"></i></span>
            <span class="item-price">&#8377;${item.current_price}</span>
        </div>
    </div>`;
}
