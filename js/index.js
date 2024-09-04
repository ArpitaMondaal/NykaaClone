let searchItem = document.querySelector(".search-item");
let signInBtn = document.querySelector(".sign-in-btn");
let bagIcon = document.querySelector(".bag");

searchItem.addEventListener("focus", function () {
  bagIcon.style.visibility = "hidden";
  signInBtn.style.visibility = "hidden"; // Hides the bag icon when searchItem is focused
});

searchItem.addEventListener("blur", function () {
  bagIcon.style.visibility = "visible";
  signInBtn.style.visibility = "visible"; // Shows the bag icon when searchItem loses focus
});

let addToBag = document.querySelector(".add-to-bag");
let imageContainer = document.querySelector(".image-container");
let itemContainer = document.querySelector(".item-container");
displaItems();
function displaItems(){
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
              <button class="add-to-bag-btn">Add To Bag</button>
            </div>
        </div>`;
});
itemContainer.innerHTML = innerHtml;
}

addToBag.style.visibility = "hidden";
imageContainer.addEventListener("mouseenter", function () {
  addToBag.style.visibility = "visible";
});

imageContainer.addEventListener("mouseleave", function () {
  addToBag.style.visibility = "hidden";
});
