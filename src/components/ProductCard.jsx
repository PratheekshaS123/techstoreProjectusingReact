import "./ProductCard.css";

export default function ProductCard({
  id,
  image,
  name,
  price,
  originalPrice,
  discount,
  rating,
  isBestSeller,
  isWishlisted,
  onAddToCart,
  onToggleWishlist,
}) {
  const fullStars = Math.floor(Number(rating) || 0);
  const emptyStars = Math.max(0, 5 - fullStars);

  return (
    <article className="product-card">
      {discount && <span className="discount-badge">{discount}</span>}

      <button
        className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
        type="button"
        onClick={onToggleWishlist}
        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        aria-label={isWishlisted ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
      >
        {isWishlisted ? "♥" : "♡"}
      </button>

      <div className="image-container">
        <img src={image} alt={name} className="product-image" loading="lazy" />
      </div>

      <div className="card-content">
        <h3 className="product-name">{name}</h3>

        <div className="rating">
          <div className="stars-container" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: fullStars }, (_, index) => (
              <span key={`full-${index}`} className="star star-filled">★</span>
            ))}
            {Array.from({ length: emptyStars }, (_, index) => (
              <span key={`empty-${index}`} className="star star-empty">★</span>
            ))}
          </div>
          <span className="rating-value">{rating}</span>
          {isBestSeller && <span className="bestseller-tag">Best Seller</span>}
        </div>

        <div className="price-row">
          <span className="price">₹{Number(price).toLocaleString("en-IN")}</span>
          {originalPrice && (
            <span className="original-price">
              ₹{Number(originalPrice).toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <button className="add-btn" type="button" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
