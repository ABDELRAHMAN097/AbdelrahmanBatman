import React from "react";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="text-[50px] text-red-500 border">jon week</div>

      <div className="text-red-500 text-4xl bg-yellow-200 p-4">
        Hello Tailwind
      </div>

      <button className="bg-black">اضغط هنا</button>
    </CartProvider>
  );
}

export default App;
