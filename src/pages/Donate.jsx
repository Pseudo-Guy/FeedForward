import React from 'react';
import StepForm from '../components/StepForm';
import './Donate.css';

const Donate = () => {
  return (
    <div className="donate-page page-container">
      <div className="donate-header">
        <div className="header-pattern"></div>
        <h1>List Your Surplus Food</h1>
        <p>Every portion you donate brings a smile to someone in need. Let's get started.</p>
      </div>
      
      <div className="donate-content">
        <StepForm />
      </div>
    </div>
  );
};

export default Donate;
