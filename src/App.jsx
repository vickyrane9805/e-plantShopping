import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div>
      <Navbar />

      {!showProductList ? (
        <div className="landing">
          <h1>🌿 Paradise Nursery</h1>

          <button onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
