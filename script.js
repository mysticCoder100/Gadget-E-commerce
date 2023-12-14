"use strict";
const gadgetData = [
  {
    id: 1,
    title: " Beats by Dr. Dre Pill 2.0 Portable Speaker",
    category: "headset",
    img: "./img/headset-1.webp",
    star: 5,
    price: 1600,
  },

  {
    id: 2,
    title: "Beats Electronics Solo3 Apple Headphones",
    category: "headset",
    img: "./img/headset-2.jpg",
    star: 4.5,
    price: 80,
  },
  {
    id: 3,
    title: "Ideapad Intel Celeron 4GB RAM 256 SSD 15.6 Windows 10",
    category: "laptop",
    img: "./img/laptop-1.webp",
    star: 5,
    price: 1800,
  },
  {
    id: 4,
    title: "Nikon DSLR Camera ",
    category: "camera",
    img: "./img/cam-1.webp",
    star: 4,
    price: 2000,
  },
  {
    id: 5,
    title: "Apple iPhone 8 64GB",
    category: "phone",
    img: "./img/phone-1.jpg",
    star: 5,
    price: 2000,
  },
  {
    id: 6,
    title: "Leaf Bass Wireless Bluetooth Over Ear Headphones with Mic and 10",
    category: "headset",
    img: "./img/headset-3.jpg",
    star: 4,
    price: 200,
  },
  {
    id: 7,
    title: "Apple iPhone 8 64GB",
    category: "phone",
    img: "./img/phone-2.jpg",
    star: 5,
    price: 1900,
  },
  {
    id: 8,
    title: "HP 15s-fq5192TU Core i5 12th Gen 15.6 HD Laptop",
    category: "laptop",
    img: "./img/laptop-2.png",
    star: 5,
    price: 1900,
  },
  {
    id: 9,
    title:
      "Camera Lens comes with ZM 50mm f/1.5 Carl Zeiss sonnar as well  as a strap and a roll of film as always. ",
    category: "camera",
    img: "./img/cam-2.webp",
    star: 5,
    price: 300,
  },
  {
    id: 10,
    title: "Folding-phone-folding-screen-smartphone-mockup",
    category: "phone",
    img: "./img/phone-3.webp",
    star: 4.5,
    price: 2000,
  },
  {
    id: 11,
    title: "GSP 602 Bass Wireless Bluetooth Over Ear Headphones",
    category: "headset",
    img: "./img/headset-4.webp",
    star: 4.5,
    price: 200,
  },
  {
    id: 12,
    title:
      "Dell Latitude 3440 14 Notebook - Full HD - 1920 x 1080 - Intel Core i7 13th Gen i7-1355U Deca-core",
    category: "laptop",
    img: "./img/laptop-4.webp",
    star: 4.5,
    price: 2500,
  },
  {
    id: 13,
    title: "Latest Redmi Smartphone | Xiaomi Canada",
    category: "phone",
    img: "./img/phone-4.webp",
    star: 4.5,
    price: 2500,
  },
  {
    id: 14,
    title: "Generic 32GB SD Card-Digital Camera Vloing Camera For Photography",
    category: "camera",
    img: "./img/cam-3.webp",
    star: 4.5,
    price: 1500,
  },
  {
    id: 15,
    title: "Best HP laptops for college students-under 500-115600",
    category: "laptop",
    img: "./img/laptop-3.png",
    star: 4.5,
    price: 1768,
  },
  {
    id: 16,
    title: "Canon XA40 Professional UHD 4K Camcorder - Awpro.tv",
    category: "camera",
    img: "./img/cam-4.webp",
    star: 5,
    price: 3000,
  },
  {
    id: 17,
    title: "Beats Electronics Headphones mobile phones apple headphones",
    category: "headset",
    img: "./img/headset-5.jpg",
    star: 5,
    price: 2200,
  },
  {
    id: 18,
    title: "Beats Electronics Headphones mobile phones apple headphones",
    category: "laptop",
    img: "./img/laptop-5.png",
    star: 5,
    price: 3000,
  },
  {
    id: 19,
    title: "Latest Xiaomi Smartphone | Xiaomi Malaysia",
    category: "phone",
    img: "./img/phone-5.webp",
    star: 4.5,
    price: 2300,
  },
  {
    id: 20,
    title: "B&H Photo Video Digital Cameras, Photography, Computers",
    category: "camera",
    img: "./img/cam-5.webp",
    star: 4.5,
    price: 3000,
  },
  {
    id: 21,
    title: "white cordless headset",
    category: "headset",
    img: "./img/headset-6.jpg",
    star: 5,
    price: 100,
  },
  {
    id: 22,
    title: "white cordless headset",
    category: "laptop",
    img: "./img/laptop-6.jpg",
    star: 5,
    price: 2400,
  },
  {
    id: 23,
    title:
      "Sony Xperia XZ Mobile Phone LTE 23MP 5.2 32GB 3GB Smartphone - Silver",
    category: "phone",
    img: "./img/phone-6.png",
    star: 5,
    price: 200,
  },
  {
    id: 24,
    title: "21714-4-canon-digital-camera for outdoor photography",
    category: "camera",
    img: "./img/cam-6.webp",
    star: 5,
    price: 3000,
  },
  {
    id: 25,
    title: "white-headphones-sound-electronic-device wireless",
    category: "headset",
    img: "./img/headset-7.png",
    star: 4.5,
    price: 300,
  },
  {
    id: 26,
    title:
      "Apple Macbook-air-m2-chip-with-8-core-cpu mac-os-laptop 8gb-ram-256gb-ssd-back-view",
    category: "laptop",
    img: "./img/laptop-7.png",
    star: 5,
    price: 3003,
  },
  {
    id: 27,
    title: "iPhone 14 PNG transparent, size: 500x500px with face id",
    category: "phone",
    img: "./img/phone-7.webp",
    star: 5,
    price: 4000,
  },
  {
    id: 28,
    title:
      "Video Camera Viewfinder PNG, Clipart, Board Game, Camera, Camera Icon, Camera Lens",
    category: "camera",
    img: "./img/cam-7.webp",
    star: 5,
    price: 3330,
  },
  {
    id: 29,
    title: "headphones-glowing-blue wireless",
    category: "headset",
    img: "./img/headset-8.png",
    star: 4.5,
    price: 400,
  },
  {
    id: 30,
    title: "apple-macbook-air-13-3-rental face detector",
    category: "laptop",
    img: "./img/laptop-8.png",
    star: 5,
    price: 4000,
  },
  {
    id: 31,
    title:
      "APPLE iPHONE 12 MINI BLUE MGE63AA/A 5,4″ Super Retina OLED Apple A14 Boinic Chip 4GB RAM 128G",
    category: "phone",
    img: "./img/phone-8.webp",
    star: 4.5,
    price: 300,
  },
  {
    id: 32,
    title: "PANASONIC-HC-X1 Video Camera Viewfinder PNG, Clipart, Board Game,",
    category: "camera",
    img: "./img/cam-8.webp",
    star: 4.5,
    price: 400,
  },
  {
    id: 33,
    title: "Marvo HG8901 3.5mm Stereo Gaming Headsets",
    category: "headset",
    img: "./img/headset-9.webp",
    star: 5,
    price: 2500,
  },
  {
    id: 34,
    title: "Apple Macbook-pro-2020-silver-01-600x315w",
    category: "laptop",
    img: "./img/laptop-9.png",
    star: 5,
    price: 2500,
  },
  {
    id: 35,
    title:
      "Apple IPhone 14 Pro Vs IPhone 14: One Is New, The Other Is, 59% OFF",
    category: "phone",
    img: "./img/phone-9.webp",
    star: 4.5,
    price: 300,
  },
  {
    id: 36,
    title: "DJI FOCUS - Remote Follow Focus | Simple Camera Hire",
    category: "camera",
    img: "./img/cam-10.webp",
    star: 5,
    price: 3000,
  },
  {
    id: 37,
    title: " Wireless Gaming Headset Bluetooth Headphone",
    category: "headset",
    img: "./img/headset-10.webp",
    star: 5,
    price: 3000,
  },
  {
    id: 38,
    title: "HP 15s-fq5192TU Core i5 12th Gen 15.6 HD Laptop",
    category: "laptop",
    img: "./img/laptop-10.webp",
    star: 4.5,
    price: 350,
  },
  {
    id: 39,
    title:
      "Apple IPhone 14 Pro Vs IPhone 14: One Is New, The Other Is, 59% OFF",
    category: "phone",
    img: "./img/phone-10.webp",
    star: 4.5,
    price: 450,
  },
  {
    id: 40,
    title: "Digital Cameras DirectNine - Europe",
    category: "camera",
    img: "./img/cam-10.webp",
    star: 5,
    price: 4500,
  },
  {
    id: 41,
    title: "Walton Tamarind EX5800A 14 Inch Core I5 8th Gen Laptop Price in BD",
    category: "laptop",
    img: "./img/laptop-11.webp",
    star: 4.5,
    price: 250,
  },
  {
    id: 42,
    title:
      "T-Mobile® Official Site: Get Even More Without Paying More | T-Mobile ",
    category: "phone",
    img: "./img/phone-11.webp",
    star: 4.5,
    price: 350,
  },
  {
    id: 43,
    title: "DJI FOCUS - Remote Follow Focus | Simple Camera Hire",
    category: "camera",
    img: "./img/cam-11.webp",
    star: 5,
    price: 100,
  },
  {
    id: 44,
    title: "Walton Tamarind EX5800A 14 Inch Core I5 8th Gen Laptop Price in BD",
    category: "laptop",
    img: "./img/laptop-12.webp",
    star: 4.5,
    price: 300,
  },
  {
    id: 45,
    title: "Samsung Galaxy A04s 4GB RAM 128GB ROM",
    category: "phone",
    img: "./img/phone-12.webp",
    star: 5,
    price: 450,
  },
  {
    id: 46,
    title: "Smart Camera 360 Multipurpose camera",
    category: "camera",
    img: "./img/cam-13.webp",
    star: 5,
    price: 650,
  },

  {
    id: 47,
    title:
      "Dell Latitude 3440 14 Notebook - Full HD - 1920 x 1080 - Intel Core i7 13th Gen i7-1355U Deca-core",
    category: "laptop",
    img: "./img/laptop-14.jpg",
    star: 5,
    price: 750,
  },

  {
    id: 48,
    title: "Samsung Mobile Phone Png Hd HQ PNG",
    category: "phone",
    img: "./img/phone-14.png",
    star: 5,
    price: 250,
  },

  {
    id: 49,
    title: "ICA-3480F - H.265 IP Camera - PLANET Technology",
    category: "camera",
    img: "./img/cam-14.jpg",
    star: 4.5,
    price: 350,
  },
  {
    id: 50,
    title: "ICA-3480F - H.265 IP Camera - PLANET Technology",
    category: "laptop",
    img: "./img/laptop-15.webp",
    star: 5,
    price: 500,
  },

  {
    id: 51,
    title: "Folding Phone folding screen smartphone mockup",
    category: "phone",
    img: "./img/phone-15.png",
    star: 4.5,
    price: 200,
  },

  {
    id: 52,
    title: "Folding Phone folding screen smartphone mockup",
    category: "camera",
    img: "./img/cam-15.webp",
    star: 4.5,
    price: 650,
  },
  {
    id: 53,
    title:
      "Analog Casual Wear Skmei Men Wrist Watches, Model Name/Number: Skmei_1816_black Black Black",
    category: "watch",
    img: "./img/watch-1.webp",
    star: 4.5,
    price: 150,
  },
  {
    id: 54,
    title:
      "Official Matrix Resurrections Awakening Chronograph Wristwatch L Size Watch  | eBay",
    category: "watch",
    img: "./img/watch-2.webp",
    star: 5,
    price: 80,
  },
  {
    id: 55,
    title: "Quartz Homage Rolex Submariner Wristwatch – Don Jamison",
    category: "watch",
    img: "./img/watch-3.webp",
    star: 5,
    price: 90,
  },
  {
    id: 56,
    title:
      "NAVIFORCE Mens Watches Waterproof 24 Hour Date Quartz Watch Man Leather Sport Wrist Watch Men",
    category: "watch",
    img: "./img/watch-4.jpg",
    star: 4.5,
    price: 70,
  },
  {
    id: 57,
    title: "WHISTLE + WRISTWATCH | Fox 40 International",
    category: "watch",
    img: "./img/watch-5.webp",
    star: 4,
    price: 100,
  },
  {
    id: 58,
    title:
      "Buy Richard Mille Replica RM052 Fabric Belt Mechanical Men's Watch [RM052]",
    category: "watch",
    img: "./img/watch-6.jpg",
    star: 5,
    price: 499,
  },
  {
    id: 59,
    title:
      "Cagau: Asset value of luxury watches to rise during pandemic - Arabian  Business",
    category: "watch",
    img: "./img/watch-7.webp",
    star: 5,
    price: 100,
  },
];

const contentView = document.querySelector(".content__view");
const linksEl = document.querySelectorAll("li a");
const ulEl = document.querySelector(".side__nav");
const btnSearch = document.querySelector(".search__button");
const inputEl = document.querySelector(".input__field");
// Display all dynamic data
window.addEventListener("DOMContentLoaded", () => {
  displayCartData(gadgetData);

  // getting unique category
  const categories = gadgetData.reduce(
    function (value, item) {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["all"]
  );
  const categoryBtn = categories
    .map(function (category) {
      return `<li class="side__nav__item">
    <a href="#" data-id="${category}" class="side__nav__link">${category}</a>
  </li>`;
    })
    .join("");
  ulEl.innerHTML = categoryBtn;

  // links
  const linksEl = document.querySelectorAll("li a");
  linksEl.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const category = e.target.getAttribute("data-id");
      const gadgetCategory = gadgetData.filter(function (data) {
        if (data.category === category) {
          return data;
        }
      });
      if (category === "all") {
        displayCartData(gadgetData);
      } else {
        displayCartData(gadgetCategory);
      }
    });
  });
});

// Function to display all data
function displayCartData(cartMain) {
  let displayData = cartMain.map(function (carts) {
    return `<div class="gadget__container">
    <div class="gadget__icon">
      <button class="love__button">
        <svg class="love__icon">
          <use xlink:href="./img/symbol-defs.svg#icon-bookmark"></use>
        </svg>
      </button>
      <button class="love__button">
        <svg class="love__icon">
          <use xlink:href="./img/symbol-defs.svg#icon-heart"></use>
        </svg>
      </button>
    </div>
    <img src=${carts.img} alt="" />
    <div class="details">
      <div class="detail__left">
        <h2 class="product__name">
          ${carts.title}
        </h2>
        <div class="product-quantity-container">
          <div>
            <div class="amounts">
              <h2>$${carts.price}</h2>
            </div>
          </div>
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>

    <div class="add__buttons">
      <div class="stars">
        <button class="star__button">
          <svg class="star__icon--main">
            <use xlink:href="./img/symbol-defs.svg#icon-star"></use>
          </svg>
        </button>
        <div>
          <h2>${carts.star}</h2>
        </div>
      </div>
      <div>
        <button class="cart__button--main">
          <a href="#"
            ><svg class="cart__icon--main">
              <use xlink:href="./img/sprite.svg#icon-cart"></use></svg
          ></a>
        </button>
      </div>
    </div>
  </div>`;
  });
  displayData = displayData.join("");
  contentView.innerHTML = displayData;
}

// Search
btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  let searchValue = inputEl.value.toLowerCase();
  if (searchValue !== "") {
    let searchCategory = gadgetData.filter(function (data) {
      let lowerCaseTitle = data.title.toLowerCase(); // Convert title to lowercase
      let lowerCaseCategory = data.category.toLowerCase(); // Convert category to lowercase

      if (
        lowerCaseTitle.includes(searchValue) ||
        lowerCaseCategory.includes(searchValue)
      ) {
        return true; // Return data if found
      }

      return false; // Filter out data if not found
    });

    if (searchCategory) {
      displayCartData(searchCategory);
    }
    inputEl.value = "";
  } else {
    alert("Please search the category or title");
  }
});

///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Interval function for automatic slide change
  const startSlider = function () {
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
    startSlider(); // Start automatic sliding
  };

  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();
