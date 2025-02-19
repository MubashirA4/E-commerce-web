import React, { useState } from "react";
import Cleave from "cleave.js/react";
import "tailwindcss/tailwind.css";

const CheckoutPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      useShippingAsBilling: true,
      billingAddress: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      paymentMethod: "creditCard",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
  
    // Handle Input Change
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
  
    // Handle Cleave.js Input Change (for card number)
    const handleCleaveChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        cardNumber: e.target.rawValue, // Use raw value without spaces
      }));
    };
  
    // Validate Step
    const validateStep = () => {
      let tempErrors = {};
  
      if (step === 1) {
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.address.trim()) tempErrors.address = "Address is required";
        if (!formData.city.trim()) tempErrors.city = "City is required";
        if (!formData.state.trim()) tempErrors.state = "State is required";
        if (!/^\d{5,6}$/.test(formData.zip)) tempErrors.zip = "Enter a valid ZIP code";
        if (!/^\d{10,15}$/.test(formData.phone)) tempErrors.phone = "Enter a valid phone number";
      }
  
      if (step === 2 && !formData.useShippingAsBilling) {
        if (!formData.billingAddress.trim()) tempErrors.billingAddress = "Billing address is required";
      }
  
      if (step === 3) {
        // Validate Card Number (Luhn Algorithm)
        const luhnCheck = (cardNum) => {
          let sum = 0;
          let shouldDouble = false;
          for (let i = cardNum.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNum[i], 10);
            if (shouldDouble) {
              digit *= 2;
              if (digit > 9) digit -= 9;
            }
            sum += digit;
            shouldDouble = !shouldDouble;
          }
          return sum % 10 === 0;
        };
  
        const sanitizedCardNumber = formData.cardNumber.replace(/\s/g, "");
        if (!sanitizedCardNumber || sanitizedCardNumber.length < 13 || !luhnCheck(sanitizedCardNumber)) {
          tempErrors.cardNumber = "Invalid credit card number";
        }
  
        // Expiry Date Validation (MM/YY)
        if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
          tempErrors.expiryDate = "Invalid expiry format (MM/YY)";
        } else {
          const [expMonth, expYear] = formData.expiryDate.split("/").map(Number);
          const currentDate = new Date();
          const currentYear = currentDate.getFullYear() % 100; // Get last two digits of current year
          const currentMonth = currentDate.getMonth() + 1;
  
          if (
            isNaN(expMonth) ||
            isNaN(expYear) ||
            expMonth < 1 ||
            expMonth > 12 ||
            expYear < currentYear ||
            (expYear === currentYear && expMonth < currentMonth)
          ) {
            tempErrors.expiryDate = "Card has expired or date is invalid";
          }
        }
  
        // CVV Validation (3 or 4 digits)
        if (!/^\d{3,4}$/.test(formData.cvv)) {
          tempErrors.cvv = "Invalid CVV";
        }
      }
  
      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
    };
  
    // Step Navigation
    const nextStep = () => {
      if (validateStep()) {
        console.log("Moving to next step...");
        setStep((prev) => prev + 1);
      } else {
        console.log("Validation failed, staying on current step.");
      }
    };
  
    const prevStep = () => setStep((prev) => prev - 1);
  
    // Form Submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setMessage("");
  
      if (!validateStep()) {
        setLoading(false);
        return;
      }
  
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
        setMessage("Order placed successfully!");
      } catch (error) {
        setMessage("An error occurred. Please try again.");
      }
      setLoading(false);
    };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-md">
      <div className="flex justify-between mb-4">
        {["Shipping", "Billing", "Payment", "Review"].map((label, index) => (
          <span key={index} className={`text-sm ${step > index + 1 ? "text-green-500" : "text-gray-500"}`}>{label}</span>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} className="w-full p-2 border mb-2" onChange={handleChange} />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <input type="text" name="address" placeholder="Address" value={formData.address} className="w-full p-2 border mb-2" onChange={handleChange} />
            {errors.address && <p className="text-red-500">{errors.address}</p>}

            <input type="text" name="city" placeholder="City" className="w-full p-2 border mb-2" onChange={handleChange} required />
            {errors.city && <p className="text-red-500"> {errors.city} </p>}

            <input type="text" name="state" placeholder="State" className="w-full p-2 border mb-2" onChange={handleChange} required />
            {errors.state && <p className="text-red-500"> {errors.state} </p>}

            <input type="text" name="zip" placeholder="ZIP Code" className="w-full p-2 border mb-2" onChange={handleChange} required />
            {errors.zip && <p className="text-red-500"> {errors.zip} </p>}

            <input type="text" name="phone" placeholder="Phone Number" className="w-full p-2 border mb-2" onChange={handleChange} required />
            {errors.phone && <p className="text-red-500"> {errors.phone} </p>}



            <button type="button" className="bg-blue-500 text-white p-2 rounded w-full" onClick={nextStep}>Next</button>
          </div>
        )}

{step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Billing Information</h2>
            <label className="flex items-center gap-2 mb-2">
              <input type="checkbox" name="useShippingAsBilling" checked={formData.useShippingAsBilling} onChange={handleChange} />
              Use same as shipping address
            </label>
            {!formData.useShippingAsBilling && (
              <input type="text" name="billingAddress" placeholder="Billing Address" className="w-full p-2 border mb-2" onChange={handleChange} required />
            )}
            <button type="button" className="bg-gray-500 text-white p-2 rounded w-full mb-2" onClick={prevStep}>Back</button>
            <button type="button" className="bg-blue-500 text-white p-2 rounded w-full" onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div>
          <h2 className="text-xl font-semibold mb-2">Payment Information</h2>

          <Cleave
            options={{ creditCard: true }}
            name="cardNumber"
            value={formData.cardNumber}
            className="w-full p-2 border mb-2"
            placeholder="Card Number"
            onChange={handleCleaveChange} // Fixed Cleave handling
          />
          {errors.cardNumber && <p className="text-red-500">{errors.cardNumber}</p>}

          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            value={formData.expiryDate}
            className="w-full p-2 border mb-2"
            onChange={handleChange}
          />
          {errors.expiryDate && <p className="text-red-500">{errors.expiryDate}</p>}

          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            className="w-full p-2 border mb-2"
            onChange={handleChange}
          />
          {errors.cvv && <p className="text-red-500">{errors.cvv}</p>}

          <button type="button" className="bg-gray-500 text-white p-2 rounded w-full mb-2" onClick={prevStep}>Back</button>
          <button type="button" className="bg-blue-500 text-white p-2 rounded w-full" onClick={nextStep}>Next</button>
        </div>
        )}

        {step === 4 && (
          <div>
          <h2 className="text-xl font-semibold mb-2">Order Review</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Address:</strong> {formData.address}, {formData.city}, {formData.state}, {formData.zip}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <button type="button" className="bg-gray-500 text-white p-2 rounded w-full mb-2" onClick={prevStep}>Back</button>
          <button type="submit" className="bg-green-500 text-white p-2 rounded w-full" disabled={loading}>{loading ? "Placing Order..." : "Place Order"}</button>
        </div>
        )}
      </form>
      {message && <p className="mt-4 text-center text-lg font-bold">{message}</p>}
    </div>
  );
};

export default CheckoutPage;
