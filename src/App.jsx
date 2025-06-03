import React from "react";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="text-[50px] text-red-500">
        jon week
      </div>

      <button className="">
        اضغط هنا
      </button>
    </CartProvider>
  );
}

export default App;
