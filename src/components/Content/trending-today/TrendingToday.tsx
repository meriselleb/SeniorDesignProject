import React from "react";

import "./TrendingToday.css";

import trendingItems from "../../../data/trending-items/trending-items.json";

export default function TrendingToday() {
  return (
    <div className="trending-today-section">
      <span className="title">Trending Today</span>
      <div className="items">
        {trendingItems.map((item, index) => (
          <div className="trending-item hoverable" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url(${require('../../../assets/images/doge.jpg').default})` }}>
            <div className="context">
              <span className="title">{item.title}</span>
              <br />
              <span className="description">{item.description}</span>
              <div className="subreddit">
                <img src={require('../../../assets/images/doge.jpg').default} alt="pic"/> 
                <span>{item.subreddit.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}