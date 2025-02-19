import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/homepage";
import ProductList from "./pages/weblist";
import WebGrid from "./pages/webgrid.jsx"; 
import OrderDetail from "./pages/orderdetail/index.jsx";
import WebCart from "./pages/mycart/index.jsx";
import CheckOutPage from "./pages/checkoutpage/index.jsx";
import { CartContext } from "./pages/mycart/components/cartcontext.jsx";
import { CartProvider } from "./pages/mycart/components/cartcontext.jsx";

function App() {
  return (
    <CartProvider> {/* Wrap everything inside CartProvider */}
      <div className="App bg-background">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/webgrid" element={<WebGrid />} />
            <Route path="/orders" element={<OrderDetail />} />
            <Route path="/cart" element={<WebCart />} />
            <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>
        </Layout>
      </div>
    </CartProvider>
  );
}

export default App;
