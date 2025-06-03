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

      <button className="bg-accent hover:bg-primary text-green-300 border py-2 px-4 rounded">اضغط هنا</button>
    </CartProvider>
  );
}

export default App;
