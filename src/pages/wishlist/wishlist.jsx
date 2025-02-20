import React, { useContext } from 'react';
import { WishlistContext } from '../../contexts/wishlistcontext';
import { CartContext } from '../mycart/components/cartcontext';
import MoveToCart from '../../components/carts/movetocart';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addItem } = useContext(CartContext); // Use addItem from CartContext

  const handleAddToCart = (item) => {
    if (addItem) {
      // Add item to cart
      addItem(item);
      alert("Product added succesfully")
       // Remove from wishlist after adding to cart
      // removeFromWishlist(item.id);
    } else {
      console.error("addItem function is missing in CartContext.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="font-semibold text-2xl text-Primary my-6">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="border p-4 rounded">
              <MoveToCart
                image={item.image}
                titleprice={`${item.price.toFixed(2)}`}
                desc={item.title}
                onAddToCart={() => handleAddToCart(item)} // Pass handleAddToCart
              />
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-2 text-red-600 underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        <Link to="/" className="text-blue-600 underline">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default WishlistPage;
