import React, { useState } from "react";
import StockData from "../component/StockData";
import "../../styles/landingpage.css";

const LandingPage = () => {
  const [stockSymbol, setStockSymbol] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStockSymbol(event.target.elements.formStockSymbol.value);
  };

  return (
    <div className="main-content">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Stock Symbol
            <input type="text" placeholder="Enter stock symbol" />
          </label>
          <p>For example: AAPL, GOOG, MSFT, etc.</p>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="stock-data-container">
        {stockSymbol && <StockData stockSymbol={stockSymbol} />}
      </div>
    </div>
  );
};

export default LandingPage;
