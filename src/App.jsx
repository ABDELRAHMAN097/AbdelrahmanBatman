import React from "react";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="bg-primary text-white p-4 rounded">
        الزر ده لونه من المتغيرات
      </div>

      <button className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded">
        اضغط هنا
      </button>
    </CartProvider>
  );
}

export default App;
