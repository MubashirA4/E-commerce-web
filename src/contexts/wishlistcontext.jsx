import React, { createContext, useState, useEffect } from "react";

// Create Context
export const WishlistContext = createContext();

// Provider Component
export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    // Load wishlist from localStorage on mount
    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist"));
        if (savedWishlist) {
            setWishlist(savedWishlist);
        }
    }, []);

    // Save wishlist to localStorage when updated
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // Add item to wishlist
    const addToWishlist = (item) => {
        setWishlist((prevWishlist) => {
            // Avoid duplicates
            if (!prevWishlist.find((i) => i.id === item.id)) {
                return [...prevWishlist, item];
            }
            return prevWishlist;
        });
    };

    // Remove item from wishlist
    const removeFromWishlist = (id) => {
        setWishlist((prevWishlist) =>
            prevWishlist.filter((item) => item.id !== id)
        );
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
