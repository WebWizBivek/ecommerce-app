import React from "react";

import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./components/Sidebar";
import HomeLayout from "./layouts/HomeLayout";
import Loader from "./customCom/Loader";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return <AppRoutes />;
};

export default App;
