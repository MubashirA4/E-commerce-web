import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/homepage";
import ProductList from "./pages/weblist";
import WebGrid from "./pages/webgrid.jsx"; 
import OrderDetail from "./pages/orderdetail/index.jsx";

function App() {
  return (
    <div className="App bg-background">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/webgrid" element={<WebGrid />} />
          <Route path="/orderdetail" element={<OrderDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
