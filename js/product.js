

let bagItems;
onLoad();

function onLoad(){
  let bagItemsStr=localStorage.getItem("bagItems");
  bagItems =bagItemsStr ? JSON.parse(bagItemsStr):[];
  displayItems();
  displayBagIcon();
}

function AddToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagCount = document.querySelector(".bag-count");
  if(bagItems.length>0){
    bagCount.style.visibility= "visible";
  bagCount.innerText = bagItems.length;
  }
  else{
    bagCount.style.visibility= "hidden";
  }
}

function displayItems() {
  let itemContainer = document.querySelector(".item-container");
  if(!itemContainer){
    return;
  }
  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `    <div class="image-container">
            <img src="${item.image}">
            <div class="img-description">
                <div class="image-name">
                    ${item.product}
                </div>
                <div class="price">
                    <span class="mrp"> MRP: </span> <span class="old-price">&#8377;${item.original_price}</span>
                    <span class="new-price">&#8377;${item.current_price}</span>
                    <span class="off">${item.discount}% OFF</span>
                </div>
                <div class="review">
                    <span class="stars">
                        ${item.rating.stars}
                    </span>
                    <span class="noOfRev">(${item.rating.noOfReview})</span>
                </div>
            </div>
            <div class="add-to-bag">
              <sapn class="wishlist"><i class="fa-regular fa-heart"></i></sapn>
              <button class="add-to-bag-btn" onclick="AddToBag(${item.id})">Add To Bag</button>
            </div>
        </div>`;
  });
  itemContainer.innerHTML = innerHtml;
  const imageContainers = document.querySelectorAll(".image-container");
  imageContainers.forEach((container) => {
    const addToBag = container.querySelector(".add-to-bag");
    addToBag.style.visibility = "hidden";
    container.addEventListener("mouseenter", function () {
      addToBag.style.visibility = "visible";
    });

    container.addEventListener("mouseleave", function () {
      addToBag.style.visibility = "hidden";
    });
  });
}