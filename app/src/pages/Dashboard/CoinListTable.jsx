import React from "react";
import "./coin-list-table-style.css";

function CoinListTable({ data }) {
  return (
    <div className="app-container">
      <div className="header">
        <button className="active">HOT LIST</button>
        <button>NEW LIST</button>
      </div>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Trending Pairs</th>
            <th>Last Price</th>
            <th>24 hrs change</th>
            <th>Per/Day Chart</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="pair" data-label="Trending Pairs">
                <img
                  src={item.icon}
                  alt={`${item.pair} icon`}
                  className="icon"
                />
                {item.pair}
              </td>
              <td data-label="Last Price">₹ {item.price}</td>
              <td
                data-label="24 hrs change"
                className={`change ${
                  item.change?.includes("-") ? "negative" : "positive"
                }`}
              >
                {item.change} %
              </td>
              <td data-label="Per/Day Chart">
                {/* <img src={item.chart} alt="chart" className="chart" /> */}
              </td>
              <td data-label="Trade">
                <button className="trade-button">Trade</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinListTable;
