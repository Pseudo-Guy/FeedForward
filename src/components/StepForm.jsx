import React, { useState } from 'react';
import './StepForm.css';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [shake, setShake] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    foodName: '',
    category: '',
    quantity: '',
    unit: 'portions',
    expiryTime: '',
    pickupAddress: '',
    city: '',
    pickupTime: '',
    contactNumber: '',
    confirmed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Validate current step before proceeding
  const validateStep = () => {
    let isValid = false;
    if (step === 1) {
      isValid = formData.foodName && formData.category && formData.quantity && formData.expiryTime;
    } else if (step === 2) {
      isValid = formData.pickupAddress && formData.city && formData.pickupTime && formData.contactNumber;
    } else if (step === 3) {
      isValid = formData.confirmed;
    }

    if (!isValid) {
      setShake(true);
      setTimeout(() => setShake(false), 500); // Remove shake class after animation
    }
    return isValid;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 2000);
    }
  };

  if (isSuccess) {
    return (
      <div className="success-screen">
        <svg className="success-icon" viewBox="0 0 52 52">
          <circle className="success-circle" cx="26" cy="26" r="25" fill="none" />
          <path className="success-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
        <h2>Thank you! Your listing is live. 🙌</h2>
        <p>You are making a real difference today.</p>
        <button className="btn btn-primary mt-20" onClick={() => window.location.reload()}>
          Donate More
        </button>
      </div>
    );
  }

  return (
    <div className="step-form-container">
      {/* Progress Stepper */}
      <div className="stepper">
        {[1, 2, 3].map(num => (
          <div key={num} className={`step-indicator ${step >= num ? 'active' : ''}`}>
            <div className="step-number">{num}</div>
            <div className="step-label">
              {num === 1 ? 'Food' : num === 2 ? 'Pickup' : 'Review'}
            </div>
            {num < 3 && <div className={`step-line ${step > num ? 'active' : ''}`}></div>}
          </div>
        ))}
      </div>

      <form className="step-form" onSubmit={handleSubmit}>
        <div className="step-content-wrapper" style={{ transform: `translateX(-${(step - 1) * 100}%)` }}>
          
          {/* STEP 1 */}
          <div className="step-pane">
            <h3 className="step-title">What are you donating?</h3>
            <div className="form-group">
              <label>Food Name</label>
              <input type="text" name="foodName" value={formData.foodName} onChange={handleChange} placeholder="e.g. Dal and Rice" />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="Cooked Meal">Cooked Meal</option>
                <option value="Raw Vegetables">Raw Vegetables</option>
                <option value="Packaged Food">Packaged Food</option>
                <option value="Bakery">Bakery</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label>Quantity</label>
                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min="1" />
              </div>
              <div className="form-group half">
                <label>Unit</label>
                <select name="unit" value={formData.unit} onChange={handleChange}>
                  <option value="portions">Portions</option>
                  <option value="kg">Kg</option>
                  <option value="packets">Packets</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Expiry Date & Time</label>
              <input type="datetime-local" name="expiryTime" value={formData.expiryTime} onChange={handleChange} />
            </div>
          </div>

          {/* STEP 2 */}
          <div className="step-pane">
            <h3 className="step-title">Where is the food?</h3>
            <div className="form-group">
              <label>Pickup Address</label>
              <textarea name="pickupAddress" value={formData.pickupAddress} onChange={handleChange} rows="3"></textarea>
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label>Preferred Pickup Time</label>
                <input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} />
              </div>
              <div className="form-group half">
                <label>Contact Number</label>
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="step-pane">
            <h3 className="step-title">Review & Confirm</h3>
            <div className="summary-card">
              <div className="summary-row">
                <span>Food:</span> <strong>{formData.foodName} ({formData.quantity} {formData.unit})</strong>
              </div>
              <div className="summary-row">
                <span>Category:</span> <strong>{formData.category}</strong>
              </div>
              <div className="summary-row">
                <span>Address:</span> <strong>{formData.pickupAddress}, {formData.city}</strong>
              </div>
              <div className="summary-row">
                <span>Pickup Time:</span> <strong>{formData.pickupTime}</strong>
              </div>
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="confirmed" name="confirmed" checked={formData.confirmed} onChange={handleChange} />
              <label htmlFor="confirmed">I confirm this food is safe for consumption and packed properly.</label>
            </div>
          </div>

        </div>

        {/* Navigation Buttons */}
        <div className="form-actions">
          {step > 1 && (
            <button type="button" className="btn btn-outline" onClick={handlePrev}>
              Back
            </button>
          )}
          {step < 3 ? (
            <button 
              type="button" 
              className={`btn btn-primary ${shake ? 'shake' : ''}`} 
              onClick={handleNext}
            >
              Next Step
            </button>
          ) : (
            <button 
              type="submit" 
              className={`btn btn-primary ${shake ? 'shake' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? <span className="spinner"></span> : 'Submit Listing'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default StepForm;
