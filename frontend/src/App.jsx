import React from "react";
import { Button } from "./components/ui/button";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div className="text-red-700">
      <Cart />
      <SignIn />
      <SignUp />
    </div>
  );
};

export default App;
