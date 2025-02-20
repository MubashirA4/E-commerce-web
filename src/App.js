import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/homepage";
import ProductList from "./pages/weblist";
import WebGrid from "./pages/webgrid.jsx";
import OrderDetail from "./pages/orderdetail/index.jsx";
import WebCart from "./pages/mycart/index.jsx";
import CheckOutPage from "./pages/checkoutpage/index.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import ProtectedRoute from "./pages/Signin/components/privateroute.jsx";
import Signin from "./pages/Signin/components/signin.jsx";
import ForgotPassword from "./pages/Signin/components/forgetpassword.jsx";
import Signup from "./pages/Signin/components/signup.jsx";
import { CartProvider } from "./pages/mycart/components/cartcontext.jsx";
import { WishlistProvider } from "./contexts/wishlistcontext.jsx";
import WishlistPage from "./pages/wishlist/wishlist.jsx";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <div className="App bg-background">
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/webgrid" element={<WebGrid />} />
              <Route path="/checkout" element={<CheckOutPage />} />
                <Route path="/cart" element={<WebCart />} />
                <Route path="/orders" element={<OrderDetail />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
          </Layout>
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
