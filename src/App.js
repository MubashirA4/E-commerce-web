import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/homepage";
import ProductList from "./pages/weblist";
 
function App() {
  return (
    <div className="App bg-background">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
