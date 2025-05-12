// JavaScript for Carousel Functionality

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const carouselInner = document.querySelector('.carousel-inner'); // Get the inner container once
let intervalId; // To store the interval ID for clearing

// Function to show a specific slide
function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Event Listener for Next button
const nextButton = document.querySelector('.carousel-control-next');
if (nextButton) {
  nextButton.addEventListener('click', () => {
    clearInterval(intervalId); // Stop automatic transition on manual interaction
    showSlide(currentIndex + 1);
    startTransitionSequence(); // Restart the specific sequence
  });
}

// Event Listener for Previous button
const prevButton = document.querySelector('.carousel-control-prev');
if (prevButton) {
  prevButton.addEventListener('click', () => {
    clearInterval(intervalId); // Stop automatic transition on manual interaction
    showSlide(currentIndex - 1);
    startTransitionSequence(); // Restart the specific sequence
  });
}

function startTransitionSequence() {
  clearInterval(intervalId); // Clear any existing interval

  const sequence = [1, 2, 3, 2, 1];
  let sequenceIndex = 0;

  intervalId = setInterval(() => {
    const nextIndex = sequence[sequenceIndex];
    showSlide(nextIndex);
    sequenceIndex = (sequenceIndex + 1) % sequence.length;
  }, 2000); // Adjust the time interval as needed
}

// Start the specific transition sequence on load
startTransitionSequence();

// Function to hide the carousel and show the shop categories
function showShopCategories() {
  // Hide the carousel
  document.getElementById('carousel-shop').style.display = 'none';
  // Show the shop categories section
  document.getElementById('shop-categories').style.display = 'block';
}

// Function to hide the shop categories and show the selected category products
function showCategory(category) {
  const categoryData = {
    men: [
      { title: "Trendy T-Shirt", description: "A comfortable and stylish t-shirt for every occasion.", image: "img/men-clothing1.jpg", price: 20 },
      { title: "Jeans", description: "Perfect fit jeans for any casual look.", image: "img/men-clothing2.jpg", price: 40 },
      { title: "Jacket", description: "Stay warm and stylish with our latest jackets.", image: "img/men-clothing3.jpg", price: 60 },
      { title: "Casual Shirt", description: "A relaxed fit shirt for day-to-day comfort.", image: "img/men-clothing4.jpg", price: 30 },
      { title: "Sweater", description: "Soft and cozy sweater for cooler days.", image: "img/men-clothing5.jpg", price: 25 },
      { title: "Shorts", description: "Stay cool with our versatile shorts.", image: "img/men-clothing6.jpg", price: 15 },
      { title: "Sports T-shirt", description: "Perfect for your workout sessions.", image: "img/men-clothing7.jpg", price: 20 },
      { title: "Chinos", description: "Casual yet smart chinos for every occasion.", image: "img/men-clothing8.jpg", price: 35 },
      { title: "Blazer", description: "A formal blazer for professional settings.", image: "img/men-clothing9.jpg", price: 50 },
      { title: "Boots", description: "Durable boots for both style and comfort.", image: "img/men-clothing10.jpg", price: 45 }
    ],
    women: [
      { title: "Elegant Dress", description: "An elegant dress perfect for special occasions.", image: "img/women-clothing1.jpg", price: 70 },
      { title: "Casual Blouse", description: "A chic blouse for your everyday look.", image: "img/women-clothing2.jpg", price: 25 },
      { title: "Summer Skirt", description: "Perfect for sunny days.", image: "img/women-clothing3.jpg", price: 30 },
      { title: "Jeans", description: "Trendy and comfortable jeans for all seasons.", image: "img/women-clothing4.jpg", price: 40 },
      { title: "Cardigan", description: "Cozy and stylish cardigan for any occasion.", image: "img/women-clothing5.jpg", price: 35 },
      { title: "Blazer", description: "A formal blazer perfect for professional wear.", image: "img/women-clothing6.jpg", price: 50 },
      { title: "T-Shirt", description: "A basic but essential t-shirt for every wardrobe.", image: "img/women-clothing7.jpg", price: 20 },
      { title: "Jumpsuit", description: "Trendy jumpsuit for a chic look.", image: "img/women-clothing8.jpg", price: 60 },
      { title: "Boots", description: "Fashionable boots to complement your winter wardrobe.", image: "img/women-clothing9.jpg", price: 55 },
      { title: "Maxi Dress", description: "Comfortable and stylish maxi dress for any occasion.", image: "img/women-clothing10.jpg", price: 65 }
    ],
    kids: [
      { title: "Colorful T-Shirt", description: "Fun and colorful t-shirts for kids.", image: "img/kids-clothing1.png", price: 15 },
      { title: "Playful Shorts", description: "Comfortable shorts for active kids.", image: "img/kids-clothing2.png", price: 12 },
      { title: "Winter Jacket", description: "Keep your kids warm with stylish winter jackets.", image: "img/kids-clothing3.png", price: 40 },
      { title: "Graphic Hoodie", description: "Cozy hoodie with fun graphics for kids.", image: "img/kids-clothing4.png", price: 25 },
      { title: "Floral Dress", description: "A cute floral dress for your little girl.", image: "img/kids-clothing5.png", price: 30 },
      { title: "Denim Jeans", description: "Classic denim jeans for both boys and girls.", image: "img/kids-clothing6.png", price: 20 },
      { title: "Sneakers", description: "Comfortable sneakers for running and playing.", image: "img/kids-clothing7.png", price: 25 },
      { title: "Winter Boots", description: "Stylish boots to keep your kids warm in the cold.", image: "img/kids-clothing8.png", price: 35 },
      { title: "Puffer Jacket", description: "Puffer jacket to keep your child warm during winter.", image: "img/kids-clothing9.jpg", price: 50 },
      { title: "Overalls", description: "Fun and practical overalls for every kid.", image: "img/kids-clothing10.jpg", price: 28 }
    ]
  };

  // Hide the category selection
  document.getElementById('shop-categories').style.display = 'none';
  // Show the dynamic collection section
  document.getElementById('dynamic-collection').style.display = 'block';

  // Set the title based on the selected category
  document.getElementById('collection-title').textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Collection`;

  // Get the product cards container
  const productCardsContainer = document.getElementById('product-cards');
  productCardsContainer.innerHTML = ''; // Clear any existing cards

  // Loop through the selected category and create the product cards
  categoryData[category].forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';

    card.innerHTML = `
      <img src="${product.image}" class="card-img-top" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-price">$${product.price}</p>
        <button class="btn btn-primary" onclick="addToCart('${category}', '${product.title}', ${product.price})">Add to Cart</button>
      </div>
    `;

    productCardsContainer.appendChild(card);
  });
}

// Cart functionality
let cart = [];

// Function to add an item to the cart
function addToCart(category, title, price) {
  // Find if the item already exists in the cart
  const existingItemIndex = cart.findIndex(item => item.title === title && item.category === category);

  if (existingItemIndex === -1) {
    // If not in the cart, add a new item
    cart.push({ category, title, price, quantity: 1 });
  } else {
    // If already in the cart, update the quantity
    cart[existingItemIndex].quantity += 1;
  }

  updateCartUI();  // Update the UI to reflect the cart changes
}

// Function to update the cart UI
function updateCartUI() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = ''; // Clear the current cart UI

  let totalAmount = 0;

  // Loop through the cart and add each item to the cart UI
  cart.forEach(item => {
    totalAmount += item.price * item.quantity;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <p>${item.title} x ${item.quantity} - $${item.price * item.quantity}</p>
      <button onclick="removeFromCart('${item.title}', '${item.category}')">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });

  // Update the cart summary (total)
  document.getElementById('cart-total').textContent = totalAmount.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(title, category) {
  // Remove the item from the cart
  const itemIndex = cart.findIndex(item => item.title === title && item.category === category);

  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    updateCartUI();  // Update the cart UI after removal
  }
}

// Function to toggle the visibility of the cart
function toggleCart() {
  const cartSection = document.getElementById('shopping-cart');
  if (cartSection.style.display === 'none' || cartSection.style.display === '') {
    cartSection.style.display = 'block'; // Show the cart
  } else {
    cartSection.style.display = 'none'; // Hide the cart
  }
}

// Function to checkout (you can customize this to handle actual checkout logic)
function checkout() {
  alert('Proceeding to checkout');
  // Here you can integrate a payment gateway or redirect to a checkout page.
}

function hideAllSections() {
  const sections = [
    "carousel-shop",
    "shop-categories",
    "dynamic-collection",
    "hot-deals",
    "contact"
  ];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
}

function showHome() {
  hideAllSections();
  document.getElementById("carousel-shop").style.display = "block";
}

function showShopCategories() {
  hideAllSections();
  document.getElementById("shop-categories").style.display = "block";
}

function showHotDeals() {
  hideAllSections();
  document.getElementById("hot-deals").style.display = "block";
}

function showContact() {
  hideAllSections();
  document.getElementById("contact").style.display = "block";
}

function toggleCart() {
  const cart = document.getElementById("shopping-cart");
  cart.style.display = (cart.style.display === "block") ? "none" : "block";
}

// Show home carousel on first load
document.addEventListener("DOMContentLoaded", () => {
  showHome();
});

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting by default

    const firstName = contactForm.querySelector('input[placeholder="First name"]').value.trim();
    const lastName = contactForm.querySelector('input[placeholder="Last name"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const phone = contactForm.querySelector('input[type="tel"]').value.trim();
    const message = contactForm.querySelector("textarea").value.trim();
    const privacyChecked = contactForm.querySelector("#privacy").checked;

    // Validation
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      message === ""
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    // Email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!privacyChecked) {
      alert("You must agree to the privacy policy.");
      return;
    }

    // If all fields are valid
    alert("Thank you for contacting us!");
    contactForm.reset(); // Optionally reset the form
  });
});


