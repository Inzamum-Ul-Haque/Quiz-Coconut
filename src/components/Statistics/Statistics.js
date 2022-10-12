import React from "react";
import { Tooltip } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import "./Statistics.css";

const Statistics = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="chart-container">
      <h2>Stats of Quizes</h2>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <ResponsiveContainer width="80%" height={500}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
