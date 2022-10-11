import React from "react";
import { Tooltip } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";
import "./Statistics.css";

const Statistics = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="chart-container">
      <h2>Stats of Quizes</h2>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <BarChart width={700} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
