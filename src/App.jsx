import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import BasketProducts from "./pages/BasketProducts";
import Signing from "./pages/Signing";
import PageNotFound from "./pages/PageNotFound";
import ProductsProvider from "./context/ProductContext";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SearchPage from "./pages/SearchPage";
import CardProvider from "./context/CardContext";
import Signup from "./pages/Signup";

function App() {
  return (
    <CardProvider>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/checkOut" element={<BasketProducts />} />
          <Route path="/signing" element={<Signing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/search-page" element={<SearchPage />} />
        </Routes>
      </ProductsProvider>
    </CardProvider>
  );
}
export default App;
