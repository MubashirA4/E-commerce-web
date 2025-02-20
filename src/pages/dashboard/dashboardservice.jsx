// dashboardService.js

// Simulate fetching order history from a mock API
export const fetchOrderHistory = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Replace with your mock data
        resolve([
          { id: 1, date: "2023-08-01", total: 99.99, status: "Delivered" },
          { id: 2, date: "2023-07-15", total: 149.99, status: "Shipped" },
          { id: 3, date: "2023-06-10", total: 49.99, status: "Cancelled" },
        ]);
      }, 1000);
    });
  };
  
  // Simulate an API call to update account settings
  export const updateAccountSettings = (settings) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // You could add some validation here
        resolve({ message: "Account settings updated successfully" });
      }, 1000);
    });
  };
  