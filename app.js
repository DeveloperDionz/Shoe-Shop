const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 1800,
    desc: "Step into timeless style with the AIR FORCE crafted for comfort and durability. Featuring a sleek leather upper, cushioned midsole, and classic silhouette, this shoe delivers all‑day support whether you’re on the move or keeping it casual. Its versatile design pairs effortlessly with any outfit, making it a staple for both streetwear and everyday wear.",
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 3000,
    desc:"Elevate your game with the legendary Air Jordan, a sneaker that blends performance with iconic streetwear style. Built with premium leather overlays, responsive cushioning, and bold design lines, the Air Jordan delivers comfort on the court and confidence off it. Its heritage as Michael Jordan's signature shoe makes it more than footwear—it's a cultural statement. Whether paired with casual fits or athletic gear, the Air Jordan stands out as a timeless essential for sneaker enthusiasts.",
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 2500,
    desc:"Classic meets contemporary with the Nike Blazer, a sneaker that has stood the test of time since its debut in the 1970s. Originally designed for basketball, the Blazer has evolved into a streetwear staple thanks to its clean lines, durable construction, and versatile design. Featuring a premium leather or suede upper, supportive midsole, and retro‑inspired silhouette, the Blazer delivers comfort and effortless style. Whether paired with jeans, shorts, or casual wear, it adds a touch of vintage cool to any outfit.",
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 2700,
    desc: "The Nike Crater brings sustainability and style together in one bold design. Crafted with recycled materials and innovative Crater Foam cushioning, this sneaker delivers lightweight comfort while reducing environmental impact. Its textured midsole and modern silhouette give it a futuristic look, while the durable construction ensures everyday wearability. Perfect for those who value eco‑friendly fashion without compromising on performance, the Crater is a statement piece for both streetwear and casual outfits.",
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 1000,
    desc: "The Nike Space Hippie redefines sneaker design with sustainability at its core. Made from “Space Waste Yarn”, a blend of recycled plastic bottles, T-shirts, and yarn scraps. This shoe delivers lightweight comfort while reducing environmental impact. Its Crater Foam midsole provides responsive cushioning with a unique speckled look, symbolizing its eco-friendly origins. With a futuristic silhouette and breathable construction, the Space Hippie is perfect for those who want to make a bold style statement while supporting a cleaner planet.",
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currrentProductDesc = document.querySelector(".productDesc")

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "KSH " + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currrentProductDesc.textContent = choosenProduct.desc;

    //assigning new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});