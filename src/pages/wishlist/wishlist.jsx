import React, { useContext } from 'react';
import { WishlistContext } from '../../contexts/wishlistcontext';
import MoveToCart from '../../components/carts/movetocart';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  console.log("Current wishlist:", wishlist);


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
