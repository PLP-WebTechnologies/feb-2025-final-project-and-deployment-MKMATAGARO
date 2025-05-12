Project Documentation: M & W - Your Dress Code
1. **Overview**
This is a responsive fashion e-commerce website designed to provide a seamless shopping experience. It features a navigation bar, an animated carousel, product categories, hot deals, a contact form, and a dynamic shopping cart.
 The site is deployed at: https://dressing-your-code.netlify.app



2. **HTML Structure (index.html)**
Key Sections:
Header & Navigation (<header>):
- Logo
- Navigation links (Home, Shop Now, Hot Deals, Contact)
- Shopping cart icon with item counter
Carousel Section:
- 3 rotating slides with images, captions, and 'Shop Now' buttons
- Next/Prev buttons for manual navigation
Shop Categories (#shop-categories):
- Cards for Men’s, Women’s, and Kids’ fashion with images and descriptions
Dynamic Product Collection (#dynamic-collection):
- Populated dynamically when a category is selected
Hot Deals Section:
- Static promotional cards with product info and 'Add to Cart' buttons
Contact Section:
- Form with name, email, phone, message, and checkbox for privacy policy
- Decorative image
Shopping Cart (#shopping-cart):
- Displays added items, total cost, and a checkout button


3. **CSS Styling (styles.css)**
Main Features:
Layout & Responsiveness:
- Flexbox and grid systems used for aligning elements
- Mobile-friendly with adaptive scaling
Carousel Styling:
- .carousel-inner handles horizontal transitions using translateX
- .carousel-item styled to support fade-in/fade-out effects
- CSS transitions for smooth slide animations
Cards & Buttons:
- .card components styled with consistent padding, shadows, and hover effects
- Buttons styled with primary color theme and accessibility in mind
Contact Form:
- Styled inputs and labels
- Responsive grid for name fields and phone code dropdown

4. **JavaScript Functionality (main.js)**
Carousel:
- Auto-rotates using a custom sequence: [1, 2, 3, 2, 1]
- Manual navigation using Next/Prev buttons pauses and restarts the sequence
- Smooth transitions via JavaScript-controlled transform: translateX()
Swipe Support:
- Touch event listeners detect swipe left/right gestures
- Swipes navigate slides on mobile devices
Navigation Controls:
- onclick='showShopCategories()', showHotDeals(), showContact() toggle visibility of respective sections using display: none/block
- toggleCart() toggles shopping cart visibility
- showCategory(category) populates the dynamic product collection section
5. **Cart Functionality**
- 'Add to Cart' buttons increase item count in the cart icon
- Displays cart items, total price, and allows checkout
- Real-time updates in #cart-items and #cart-total

6. **Assets**
Images Used:
- img/woman-wearing-sundress.jpg
- img/friends-having-fun-summer-setting-studio.jpg
- img/view-man-dressed-summer-outfit.jpg
- img/men-fashion1.jpg, img/women-fashion1.jpg, img/kids-fashion1.jpg
- img/deal1.jpg, img/deal2.png
- img/clothes.png

7. **Deployment**
The project is deployed on Netlify: Visit Site - https://dressing-your-code.netlify.app


