import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/homepage";

function App() {
  return (
    <div className="App bg-background">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
