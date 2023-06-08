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

const StockData = () => {
  const [data, setData] = useState(null);
  const apiKey = "YOUR_ALPHA_VANTAGE_API_KEY"; // Replace with your actual API key
  const stockSymbol = "IBM"; // Replace with the actual symbol input by the user

  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const transformedData = Object.entries(data["Time Series (Daily)"]).map(
          ([date, value]) => ({
            date,
            open: Number(value["1. open"]),
          })
        );
        setData(transformedData);
      })
      .catch((err) => console.error(err));
  }, []); // Fetch data only once after the component is first rendered.

  return (
    <div>
      <h2>Stock Data for {stockSymbol}</h2>
      {data && (
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
      )}
    </div>
  );
};

export default StockData;
