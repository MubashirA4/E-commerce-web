import React, { createContext, useState, useEffect } from "react";

// Create Context
export const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // New state for selected product

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cartItems"));
        if (savedCart) {
            setCartItems(savedCart);
        }
    }, []);

    // Save cart to localStorage when updated
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Add Item (Check if it exists, then update qty)
    const addItem = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, qty: i.qty + 1 } : i
                );
            }
            return [...prevItems, { ...item, qty: 1 }];
        });
    };

    // Remove Item by ID
    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Update Quantity
    const updateQuantity = (id, qty) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, qty } : item
            )
        );
    };

    return (
        <CartContext.Provider
        value={{ cartItems, addItem, removeItem, updateQuantity, selectedProduct, setSelectedProduct }}
      >
        {children}
      </CartContext.Provider>
  
    );
};
