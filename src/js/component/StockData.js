import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const StockData = ({ stockSymbol }) => {
  const [data, setData] = useState(null);
  const apiKey = "YOUR_ALPHAVANTAGE_KEY"; // Replace with your actual API key

  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data["Error Message"]) {
          throw new Error(`API error! Message: ${data["Error Message"]}`);
        }
        const transformedData = Object.entries(data["Time Series (Daily)"]).map(
          ([date, value]) => ({
            date,
            open: Number(value["1. open"]),
          })
        );
        console.log(`Fetched and transformed data for symbol: ${stockSymbol}`);
        setData(transformedData);
      })
      .catch((err) => {
        console.error(
          `Failed to fetch data for symbol: ${stockSymbol}. Error: ${err.message}`
        );
        setData(null);
      });
  }, [stockSymbol]); // Fetch data whenever the component is first rendered or the stock symbol changes.

  return (
    <div>
      <h2>Stock Data for {stockSymbol}</h2>
      {data ? (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="open"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      ) : (
        <p>
          Unable to fetch data for {stockSymbol}. Please ensure the symbol is
          correct and try again.
        </p>
      )}
    </div>
  );
};

export default StockData;
