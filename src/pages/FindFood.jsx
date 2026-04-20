import React, { useState } from 'react';
import FoodCard from '../components/FoodCard';
import Modal from '../components/Modal';
import { mockFoodListings } from '../data/mockData';
import './FindFood.css';

const FindFood = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = ['All', 'Cooked Meal', 'Vegetables', 'Packaged Food', 'Urgent'];

  // Filter logic
  const filteredListings = mockFoodListings.filter(food => {
    const matchesSearch = 
      food.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      food.location.toLowerCase().includes(searchTerm.toLowerCase());
      
    if (!matchesSearch) return false;
    
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Urgent') return food.isUrgent;
    return food.category === activeFilter;
  });

  const handleRequestClick = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    alert(`Request sent for ${selectedFood.name}! The donor will contact you soon.`);
    handleModalClose();
  };

  return (
    <div className="find-food-page page-container">
      <div className="find-header">
        <h1>Find Food Near You</h1>
        <p>Browse available food listings in your area and claim them before they expire.</p>
        
        {/* Search Bar */}
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by city or food type..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="btn btn-primary search-btn">Search</button>
        </div>
        
        {/* Filter Chips */}
        <div className="filter-chips">
          {filters.map(filter => (
            <button 
              key={filter}
              className={`chip ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="listings-container">
        {filteredListings.length > 0 ? (
          <div className="listings-grid">
            {filteredListings.map(food => (
              <FoodCard key={food.id} food={food} onRequestClick={handleRequestClick} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🍽️</div>
            <h3>No food listings found</h3>
            <p>Try adjusting your filters or search term to find available food.</p>
            <button className="btn btn-outline mt-16" onClick={() => {setSearchTerm(''); setActiveFilter('All');}}>
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Request Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleModalClose}
        title="Request Food"
      >
        {selectedFood && (
          <div className="request-modal-content">
            <div className="request-summary">
              <strong>Requesting:</strong> {selectedFood.name} ({selectedFood.quantity})
            </div>
            
            <form onSubmit={handleRequestSubmit} className="request-form">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" required placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" required placeholder="For donor to contact you" />
              </div>
              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea rows="3" placeholder="Any specific details about pickup..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary full-width">Send Request</button>
            </form>
          </div>
        )}
      </Modal>

    </div>
  );
};

export default FindFood;
