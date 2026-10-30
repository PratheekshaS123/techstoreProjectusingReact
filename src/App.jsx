// import ProductCard from "./components/ProductCard";
// import "./App.css";
// import { useState } from "react";
// import products from "./data";

// function App() {
//   // Getting all the brands
//   const allBrands = [...new Set(products.map((p) => p.brand))];

//   // State
//   const [cartItems, setCartItems] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedBrand, setSelectedBrand] = useState("All");
//   const [sortBy, setSortBy] = useState("default");

//   // Add to cart function
//   function addToCart(product) {
//     const existingItem = cartItems.find((item) => item.id === product.id);

//     if (existingItem) {
//       setCartItems(
//         cartItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   }

//   // Calculate total number of cart items
//   const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   // Calculate total price
//   const cartTotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   // Wishlist toggle function
//   function toggleWishlist(productID) {
//     if (wishlist.includes(productID)) {
//       // Already existing - remove it
//       setWishlist(wishlist.filter((id) => id !== productID));
//     } else {
//       // Not in the wishlist - just add it
//       setWishlist([...wishlist, productID]);
//     }
//   }

//   // Step 1: Filter based on search term (matches name or brand)
//   let filteredProducts = products.filter((product) => {
//     const matchesSearch =
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.brand.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesBrand =
//       selectedBrand === "All" || product.brand === selectedBrand;

//     return matchesSearch && matchesBrand;
//   });

//   // Step 2: Sort the filtered products
//   if (sortBy === "price-low") {
//     filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
//   } else if (sortBy === "price-high") {
//     filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
//   } else if (sortBy === "rating") {
//     filteredProducts = [...filteredProducts].sort(
//       (a, b) => b.rating - a.rating
//     );
//   }

//   return (
//     <div className="app">
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="nav-container">
//           <a href="/" className="logo">
//             <span className="logo-icon">◆</span>
//             TechStore
//           </a>

//           <ul className="nav-links">
//             <li>
//               <a href="#products" className="nav-link">
//                 Products
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link">
//                 Deals
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link">
//                 Support
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link">
//                 About
//               </a>
//             </li>
//           </ul>

//           <div className="nav-actions">
//             <button className="nav-btn">Sign In</button>
//             <button className="nav-btn primary">Shop Now</button>
//             <div className="nav-icon-wrapper" title="Wishlist">
//               <span className="nav-icon-emoji">❤️</span>
//               {wishlist.length > 0 && (
//                 <span className="nav-badge wishlist-badge">{wishlist.length}</span>
//               )}
//             </div>
//             <div className="nav-icon-wrapper" title="Cart">
//               <span className="nav-icon-emoji">🛒</span>
//               {cartCount > 0 && (
//                 <span className="nav-badge cart-badge">{cartCount}</span>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <p className="hero-tag">New Arrivals 2025</p>
//           <h1 className="hero-title">
//             The Future of Tech
//             <br />
//             <span className="hero-highlight">Is Here.</span>
//           </h1>
//           <p className="hero-description">
//             Discover the latest in premium technology. From powerful computers to
//             cutting-edge smartphones, find everything you need in one place.
//           </p>
//           <div className="hero-cta">
//             <button className="btn-primary">Explore Products</button>
//             <button className="btn-secondary">Learn More</button>
//           </div>
//         </div>
//         <div className="hero-stats">
//           <div className="stat">
//             <span className="stat-number">50K+</span>
//             <span className="stat-label">Happy Customers</span>
//           </div>
//           <div className="stat">
//             <span className="stat-number">200+</span>
//             <span className="stat-label">Premium Products</span>
//           </div>
//           <div className="stat">
//             <span className="stat-number">24/7</span>
//             <span className="stat-label">Customer Support</span>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="products-section" id="products">
//         <div className="section-header">
//           <h2 className="section-title">Best Sellers</h2>
//           <p className="section-subtitle">
//             Our most popular products loved by customers
//           </p>
//         </div>

//         {/* Filters & Search Bar */}
//         <div className="filters-bar">
//           {/* Search Input */}
//           <div className="search-wrapper">
//             <span className="search-icon">🔍</span>
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           {/* Brand Filter */}
//           <select
//             className="filter-select"
//             value={selectedBrand}
//             onChange={(e) => setSelectedBrand(e.target.value)}
//           >
//             <option value="All">All Brands</option>
//             {allBrands.map((brand) => (
//               <option key={brand} value={brand}>
//                 {brand}
//               </option>
//             ))}
//           </select>

//           {/* Sort Dropdown */}
//           <select
//             className="filter-select"
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//           >
//             <option value="default">Sort By</option>
//             <option value="price-low">Price: Low to High</option>
//             <option value="price-high">Price: High to Low</option>
//             <option value="rating">Top Rated</option>
//           </select>
//         </div>

//         {/* Cart Summary (shown when items exist) */}
//         {cartCount > 0 && (
//           <div className="cart-summary">
//             <span>
//               🛒 {cartCount} item{cartCount > 1 ? "s" : ""} in cart
//             </span>
//             <span className="cart-total">
//               Total: ₹{cartTotal.toLocaleString("en-IN")}
//             </span>
//           </div>
//         )}

//         {/* Product Grid */}
//         <div className="product-grid">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((data) => (
//               <ProductCard
//                 key={data.id}
//                 id={data.id}
//                 image={data.image}
//                 name={data.name}
//                 price={data.price}
//                 originalPrice={data.originalPrice}
//                 discount={data.discount}
//                 rating={data.rating}
//                 isBestSeller={data.isBestSeller}
//                 isWishlisted={wishlist.includes(data.id)}
//                 onAddToCart={() => addToCart(data)}
//                 onToggleWishlist={() => toggleWishlist(data.id)}
//               />
//             ))
//           ) : (
//             <div className="no-results">
//               <p>No products found matching your criteria.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2024 TechStore. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;



import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";
import products from "./data";

function App() {
  const allBrands = [...new Set(products.map((product) => product.brand))];

  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("techstore-theme") !== "light";
  });

  useEffect(() => {
    localStorage.setItem("techstore-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  function addToCart(product) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }

  function increaseQuantity(id) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleWishlist(productId) {
    setWishlist((currentWishlist) =>
      currentWishlist.includes(productId)
        ? currentWishlist.filter((id) => id !== productId)
        : [...currentWishlist, productId]
    );
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  let filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search);
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  }

  const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" aria-label="TechStore home">
            <span className="logo-icon">◆</span>
            <span>TechStore</span>
          </a>

          <ul className="nav-links">
            <li><a href="#products" className="nav-link">Products</a></li>
            <li><a href="#deals" className="nav-link">Deals</a></li>
            <li><a href="#support" className="nav-link">Support</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
          </ul>

          <div className="nav-actions">
            <button className="nav-btn" type="button">Sign In</button>
            <a className="nav-btn primary" href="#products">Shop Now</a>

            <button
              className="nav-icon-wrapper"
              type="button"
              title="Wishlist"
              aria-label={`Wishlist, ${wishlist.length} items`}
            >
              <span className="nav-icon-emoji" aria-hidden="true">♡</span>
              {wishlist.length > 0 && (
                <span className="nav-badge wishlist-badge">{wishlist.length}</span>
              )}
            </button>

            <button
              className="nav-icon-wrapper"
              type="button"
              title="Shopping cart"
              aria-label={`Shopping cart, ${cartCount} items`}
              onClick={() => setIsCartOpen(true)}
            >
              <svg viewBox="0 0 24 24" className="nav-svg-icon" aria-hidden="true">
                <path d="M3 3h2l2.1 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 1.9-1.4L22 7H6" />
                <circle cx="10" cy="20" r="1.3" />
                <circle cx="18" cy="20" r="1.3" />
              </svg>
              {cartCount > 0 && (
                <span className="nav-badge cart-badge">{cartCount}</span>
              )}
            </button>

            <button
              className="theme-toggle"
              type="button"
              onClick={() => setDarkMode((current) => !current)}
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? "☀" : "☾"}
            </button>
          </div>
        </div>
      </nav>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <p className="hero-tag">New Arrivals 2026</p>
            <h1 className="hero-title">
              The Future of Tech
              <br />
              <span className="hero-highlight">Is Here.</span>
            </h1>
            <p className="hero-description">
              Discover the latest in premium technology. From powerful computers
              to cutting-edge smartphones, find everything you need in one place.
            </p>
            <div className="hero-cta">
              <a href="#products" className="btn-primary">Explore Products</a>
              <a href="#about" className="btn-secondary">Learn More</a>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Premium Products</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Customer Support</span>
            </div>
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-header">
            <h2 className="section-title">Best Sellers</h2>
            <p className="section-subtitle">
              Our most popular products loved by customers
            </p>
          </div>

          <div className="filters-bar">
            <div className="search-wrapper">
              <span className="search-icon" aria-hidden="true">⌕</span>
              <input
                type="search"
                className="search-input"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search products"
              />
            </div>

            <select
              className="filter-select"
              value={selectedBrand}
              onChange={(event) => setSelectedBrand(event.target.value)}
              aria-label="Filter by brand"
            >
              <option value="All">All Brands</option>
              {allBrands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>

            <select
              className="filter-select"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              aria-label="Sort products"
            >
              <option value="default">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {cartCount > 0 && (
            <div className="cart-summary">
              <span>{cartCount} item{cartCount === 1 ? "" : "s"} in cart</span>
              <span className="cart-total">Total: {formatPrice(cartTotal)}</span>
            </div>
          )}

          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  isWishlisted={wishlist.includes(product.id)}
                  onAddToCart={() => addToCart(product)}
                  onToggleWishlist={() => toggleWishlist(product.id)}
                />
              ))
            ) : (
              <div className="no-results">
                <p>No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer" id="about">
        <p>© 2026 TechStore. All rights reserved.</p>
      </footer>

      {isCartOpen && (
        <div
          className="cart-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsCartOpen(false);
          }}
          role="presentation"
        >
          <aside
            className="cart-sidebar"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <div className="cart-header">
              <div>
                <h2>Your Shopping Cart</h2>
                <p>{cartCount} item{cartCount === 1 ? "" : "s"} in your cart</p>
              </div>
              <button
                className="close-cart"
                type="button"
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart"
              >
                ×
              </button>
            </div>

            <div className="cart-items">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <span aria-hidden="true">🛍</span>
                  <h3>Your cart is empty</h3>
                  <p>Looks like you haven't added anything yet.</p>
                  <button type="button" onClick={() => setIsCartOpen(false)}>
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <article className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">{formatPrice(item.price)}</p>
                      <div className="quantity-control">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="remove-item"
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name}`}
                      title="Remove item"
                    >
                      ×
                    </button>
                  </article>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total-row">
                  <span>Subtotal</span>
                  <strong>{formatPrice(cartTotal)}</strong>
                </div>
                <p>Shipping and taxes calculated at checkout.</p>
                <button
                  className="checkout-btn"
                  type="button"
                  onClick={() => window.alert("Checkout functionality can be connected next.")}
                >
                  Proceed to Checkout
                </button>
                <button
                  className="continue-btn"
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
