import React from 'react';
import './FoodCard.css';

const FoodCard = ({ food, onRequestClick }) => {
  // Determine top strip color based on category
  const getStripColor = (category) => {
    return category === 'Cooked Meal' ? 'var(--color-primary)' : 'var(--color-secondary)';
  };

  return (
    <div className="food-card">
      <div 
        className="card-strip" 
        style={{ backgroundColor: getStripColor(food.category) }}
      ></div>
      
      <div className="card-content">
        <div className="card-header">
          <span className="category-badge">{food.category}</span>
          {food.isUrgent && <span className="urgent-badge">Urgent</span>}
        </div>
        
        <h3 className="food-name">{food.name}</h3>
        
        <div className="food-details">
          <div className="detail-item">
            <span className="icon">📦</span> {food.quantity}
          </div>
          <div className="detail-item">
            <span className="icon">📍</span> {food.location}
          </div>
          <div className="detail-item">
            <span className="icon">⏱️</span> {food.timePosted}
          </div>
        </div>
        
        <div className={`expiry-tag ${food.isUrgent ? 'text-urgent' : ''}`}>
          {food.expiryText}
        </div>
        
        <button 
          className="btn btn-primary request-btn"
          onClick={() => onRequestClick(food)}
        >
          Request This
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
