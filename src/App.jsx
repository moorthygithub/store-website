import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Categories from "./pages/categories/Categories";
import ProductDetails from "./pages/product/ProductDetails";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./pages/product/Product";
import Contact from "./pages/contact/Contact";
import ProductAll from "./pages/product/ProductAll";
import OrderSuccess from "./pages/order/OrderSuccess";
import OrderFailed from "./pages/order/OrderFailed";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/product" element={<ProductAll />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/order-failed" element={<OrderFailed />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainLayout>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
