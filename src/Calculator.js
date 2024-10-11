import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./calculator.css";

function Calculator() {
  const [investment, setInvestment] = useState(100000);
  const [rate, setRate] = useState(12);
  const [time, setTime] = useState(5);

  const calculateReturns = () => {
    const totalInvestment = investment;
    const estimatedReturns =
      totalInvestment * (Math.pow(1 + rate / 100, time) - 1);
    const totalValue = totalInvestment + estimatedReturns;

    return { totalInvestment, estimatedReturns, totalValue };
  };

  const { totalInvestment, estimatedReturns, totalValue } = calculateReturns();

  const data = {
    labels: ["Total Investment", "Est. Returns"],
    datasets: [
      {
        label: "Mutual Fund Returns",
        data: [totalInvestment, estimatedReturns],
        backgroundColor: ["#4f46e5", "#22c55e"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white  w-auto rounded-lg shadow-lg p-8  max-w-3xl">
        
          <h2 className="text-2xl font-bold text-center text-green-500 py-3 mb-8">
            Mutual Fund Returns Calculator
          </h2>
          <div className="flex justify-center mb-6 py-4 px-6">
            <div className="w-1/3 px-3">
              <label className="block text-gray-700 font-bold mb-2 ">
                Total Investment
              </label>
              <input
                type="range"
                min="10000"
                max="1000000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-2 accent-green-600 rounded-lg cursor-pointer"
              />
              <div className="text-xl font-bold text-indigo-600 mt-2">
                ₹ {investment.toLocaleString()}
              </div>
            </div>

            <div className="w-1/3 px-2">
              <label className="block text-gray-700 font-bold mb-2">
                Expected Return Rate (%)
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-indigo-500 rounded-lg cursor-pointer"
              />
              <div className="text-xl font-bold text-indigo-600 mt-2">
                {rate} %
              </div>
            </div>

            <div className="w-1/3 px-2">
              <label className="block text-gray-700 font-bold mb-2">
                Time Period (Years)
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                className="w-full h-2 bg-indigo-500 rounded-lg cursor-pointer"
              />
              <div className="text-xl font-bold text-indigo-600 mt-2">
                {time} Yr
              </div>
            </div>
          </div>
        

        <div>
          <div className="flex  items-center justify-center py-5 mb-8">
            <div className="text-center">
              <strong className="block text-gray-700 font-bold">
                Total Investment
              </strong>
              <div className="text-xl text-indigo-600 font-bold">
                ₹ {totalInvestment.toLocaleString()}
              </div>
            </div>
            <div className="text-center">
              <strong className="block text-gray-700 font-bold">
                Est. Returns
              </strong>
              <div className="text-xl text-green-600 font-bold">
                ₹ {estimatedReturns.toLocaleString()}
              </div>
            </div>
            <div className="text-center">
              <strong className="block text-gray-700 font-bold">
                Total Value
              </strong>
              <div className="text-xl text-gray-700 font-bold">
                ₹ {totalValue.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-64 h-64">
              <Pie data={data} />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-200">
              INVEST NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
