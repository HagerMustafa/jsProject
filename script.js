//slider
var slide1 = document.getElementById("1");
var slide2 = document.getElementById("2");
var slider = document.getElementsByClassName("slider");

var i = 1;
var id = +document.getElementById(i).getAttribute("id");
console.log(id);
function rightDirection() {
  // i++;
  id = id + 1;
  console.log(id);
  if (id == 1) {
    id = id + 1;

    slide2.classList.add("remove");
    slide1.classList.remove("remove");
    // id++;
  } else if (id == 2) {
    // id = id + 1;

    slide2.classList.remove("remove");
    slide1.classList.add("remove");
    // id = id + 1;
    id = 1;
    console.log(id);
  } else if (id >= 3) {
    // id = id + 1;
    id = 1;
    console.log(id);
    slide2.classList.add("remove");
    slide1.classList.remove("remove");
  }
}
function leftDirection() {
  // rightDirection();
  id = id - 1;
  console.log(id);
  if (id == 1) {
    slide2.classList.add("remove");
    slide1.classList.remove("remove");
  }
  if (id < 1 || id > 2) {
    id = 2;
    slide1.classList.add("remove");
    slide2.classList.remove("remove");
  }
}

//--------------------------------
//filter
var filteredSelect = document.getElementById("filter");
var cards = document.getElementById("cards");
var clothes = document.getElementById("clothes");
var electronics = document.getElementById("Electronics");
var bags = document.getElementById("Bags");
var watches = document.getElementById("watches");

function hideBag() {
  bags.classList.add("hide");
}
function hideClothes() {
  clothes.classList.add("hide");
}
function hideWatches() {
  watches.classList.add("hide");
}
function hideElectronics() {
  electronics.classList.add("hide");
}
// console.log(filteredSelect.options[3].selected);
function select() {
  console.log("s");
  if (filteredSelect.options[0].selected) {
    clothes.classList.remove("hide");
    bags.classList.remove("hide");
    watches.classList.remove("hide");
    electronics.classList.remove("hide");
  } else if (filteredSelect.options[1].selected) {
    clothes.classList.remove("hide");
    clothes.classList.add("show");
    hideElectronics();
    hideBag();
    hideWatches();
  } else if (filteredSelect.options[2].selected) {
    electronics.classList.add("show");
    electronics.classList.remove("hide");
    hideBag();
    hideWatches();
    hideClothes();
  } else if (filteredSelect.options[3].selected) {
    bags.classList.add("show");
    bags.classList.remove("hide");
    hideElectronics();
    hideWatches();
    hideClothes();
  } else if (filteredSelect.options[4].selected) {
    watches.classList.add("show");
    watches.classList.remove("hide");
    hideElectronics();
    hideClothes();
    hideBag();
  }
}

//---------------------------------------------------
//adding product to the cart
var theCart = document.getElementById("cart");
var content = document.getElementById("cart-content");
var listCard = document.getElementById("cart-components");
function addcart() {
  content.classList.add("cart-content");
  content.classList.remove("hide");
  content.innerHTML =
    "<i class='fa-solid close fa-xmark' id='close'></i> <button class='purple-button clear' id='clear'>Clear</button>";
  var closebtn = document.getElementById("close");
  console.log(closebtn);
  closebtn.addEventListener("click", function () {
    content.classList.remove("cart-content");
    content.classList.add("hide");
  });
}

function getNumerOfProducts() {}

theCart.addEventListener("click", addcart);

var productsList = [
  {
    name: "Man shirt",
    price: "20$",
    inCart: 0,
  },
  {
    name: "Dress",
    price: "30$",
    inCart: 0,
  },
  {
    name: "T-shirt",
    price: "12$",
    inCart: 0,
  },
  {
    name: "Laptop",
    price: "600$",
    inCart: 0,
  },
  {
    name: "Pc",
    price: "20$",
    inCart: 0,
  },
  {
    name: "Bag1",
    price: "12$",
    inCart: 0,
  },
  {
    name: "Bag2",
    price: "12$",
    inCart: 0,
  },
  {
    name: "Whatch1",
    price: "120$",
    inCart: 0,
  },
  {
    name: "Whatch2",
    price: "270$",
    inCart: 0,
  },
  {
    name: "Whatch3",
    price: "160$",
    inCart: 0,
  },
  {
    name: "Whatch4",
    price: "180$",
    inCart: 0,
  },
];

var addBtn = document.getElementsByClassName("addBtn");
var products = document.getElementsByClassName("card");
console.log(products[4].name);
for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].onclick = function addButton(theBtn, title, thePrice) {
    theBtn = this.parentElement.firstElementChild.getAttribute("src");
    title = this.previousElementSibling.firstElementChild;
    thePrice = this.previousElementSibling.lastElementChild;

    addcart();
    var content = document.getElementById("cart-content");

    var arrItem = `<li class="flex">
    <img src="${theBtn}" class="cart-img" />
    <div class="itemName"> ${title.innerText}</div>
    <div class="pricee">The Price${thePrice.innerText}</div>
    <button class="purple-button " id="del">Delete</button>
    </li>
    <hr class="line">`;
    console.log(arrItem);
    var arr = [];
    arr.push(arrItem);
    console.log(arr);
    content.innerHTML += arr;
    function cartNumber(theproduct) {
      console.log("plaplapla" + theproduct);
      let productNumbers = localStorage.getItem("cartItem");
      productNumbers = parseInt(productNumbers);
      if (productNumbers) {
        localStorage.setItem("cartItem", productNumbers + 1);
        document.querySelector(".cart-components").textContent =
          productNumbers + 1;
      } else {
        localStorage.setItem("cartItem", 1);
        document.querySelector(".cart-components").textContent = 1;
      }
      setItem(theproduct);
    }
    console.log(i);
    cartNumber(JSON.stringify(productsList[i]));

    var dlt = document.getElementById("del");
    dlt.addEventListener("click", function () {
      let productNumbers = localStorage.getItem("cartItem");
      productNumbers = parseInt(productNumbers);
      console.log(productNumbers);
      this.parentElement.remove();
      localStorage.setItem("cartItem", productNumbers - 1);
      document.querySelector(".cart-components").textContent =
        productNumbers - 1;
    });
    var closebtn = document.getElementById("close");
    closebtn.addEventListener("click", function () {
      content.classList.remove("cart-content");
      content.classList.add("hide");
    });

    // var theCardAdded = `<div><img src=""/></div><div></div>`;
    var content = document.getElementById("cart-content");
    // var clone = node.cloneNode(true);
    // content.append(theCardAdded);
    // console.log(theCardAdded);
    // }
    var clear = document.getElementById("clear");
    clear.addEventListener("click", function cler() {
      console.log(arr);
      localStorage.setItem("cartItem", 0);
      document.querySelector(".cart-components").textContent = 0;
      content.innerHTML =
        "<i class='fa-solid close fa-xmark' id='close'></i> <button class='purple-button clear' id='clear'>Clear</button>";
    });
  };
}
function setItem(theproduct) {
  theproduct.inCart = 1;
  var cartItem = [
    {
      [productsList.name]: theproduct,
    },
  ];
  console.log(cartItem);
  localStorage.setItem("productInCart", JSON.stringify(cartItem));
}
function onloadCartNumber() {
  let productNumbers = localStorage.getItem("cartItem");
  if (productNumbers) {
    document.querySelector(".cart-components").textContent = productNumbers;
  }
}
onloadCartNumber();
//-------------------------------
//scroll to top
var scrolBtn = document.getElementById("scroll");
window.onscroll = function () {
  scroll();
};
function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrolBtn.style.display = "block";
  } else {
    scrolBtn.style.display = "none";
  }
}
function topFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
