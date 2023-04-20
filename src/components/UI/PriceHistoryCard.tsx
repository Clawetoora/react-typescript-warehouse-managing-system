import React, { PureComponent } from "react";
import styles from "./HistoryCard.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface props {
  priceHistory: [{}];
  currentPrice?: number;
}

function PriceHistoryCard({ priceHistory, currentPrice }: props) {
  const data = [...priceHistory, { price: currentPrice, date: "Now" }];
  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={800}
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
          <XAxis tick={{ fill: "white" }} dataKey="date" />
          <YAxis tick={{ fill: "white" }} />
          <Tooltip labelStyle={{ color: "black" }} />
          <Legend iconSize={20} iconType="line" />
          <Line
            name="Price"
            type="monotone"
            dataKey="price"
            stroke="green"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceHistoryCard;
