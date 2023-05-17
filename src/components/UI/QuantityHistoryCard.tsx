import React from "react";
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
  quantityHistory: [{}];
  currentQuantity?: number;
}

function QuantityHistoryCard({ quantityHistory, currentQuantity }: props) {
  const data = [...quantityHistory, { quantity: currentQuantity, date: "Now" }];
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
            name="Quantity"
            type="monotone"
            dataKey="quantity"
            stroke="green"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default QuantityHistoryCard;
