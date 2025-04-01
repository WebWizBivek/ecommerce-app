import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import ProductsPage from "@/pages/ProductsPage";
import Cart from "@/pages/Cart";
// import { GuestRoutes } from "./UserRoutes";
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />

        {/* Add more routes as needed */}
        {/* {GuestRoutes} */}
      </Routes>
    </Router>
  );
}
