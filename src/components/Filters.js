import React from 'react';
import './Filters.css';

const Filters = ({ specialties, selectedSpecialty, onSelect, locationFilter, onLocationChange }) => {
  return (
    <div className="filters">
      <div className="filter-item">
        <label htmlFor="specialty-select">Filter by Specialty:</label>
        <select
          id="specialty-select"
          value={selectedSpecialty}
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value="">All Specialties</option>
          {specialties.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="location-input">Location (City):</label>
        <input
          type="text"
          id="location-input"
          value={locationFilter}
          onChange={(e) => onLocationChange(e.target.value)}
          placeholder="Enter location"
        />
      </div>
    </div>
  );
};

export default Filters;
