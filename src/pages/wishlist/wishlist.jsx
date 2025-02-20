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
             
              <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
               onClick={() => removeFromWishlist(item.id)}
              >Remove</button>
              
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
