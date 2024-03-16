import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import BasketProducts from "./pages/BasketProducts";
import Signing from "./pages/Signing";
import PageNotFound from "./pages/PageNotFound";
import ProductsProvider from "./context/ProductContext";

function App() {
  return (
    <ProductsProvider>
    <Routes>
      <Route path="/" element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<HomePage />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/checkOut" element={<BasketProducts />} />
      <Route path="/signing" element={<Signing />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
    </ProductsProvider>
  );
}
export default App;
