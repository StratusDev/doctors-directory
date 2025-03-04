// src/components/FilterToolbar.js
import React, { useState } from 'react';
import './FilterToolbar.css';

const FilterToolbar = ({
  specialties,
  states,
  cities,
  locations,
  selectedSpecialty,
  onSelectSpecialty,
  selectedState,
  onSelectState,
  selectedCity,
  onSelectCity,
  selectedLocation,
  onSelectLocation,
  clearSpecialty,
  clearState,
  clearCity,
  clearLocation,
}) => {
  // filterMode can be 'location' or 'specialization'
  const [filterMode, setFilterMode] = useState('location');

  const handleTabClick = (mode) => {
    setFilterMode(mode);
  };

  return (
    <div className="filter-toolbar">
      {/* Tabs for switching filter modes */}
      <div className="filter-tabs">
        <button
          className={filterMode === 'location' ? 'active' : ''}
          onClick={() => handleTabClick('location')}
        >
          By Location
        </button>
        <button
          className={filterMode === 'specialization' ? 'active' : ''}
          onClick={() => handleTabClick('specialization')}
        >
          By Specialization
        </button>
      </div>

      {/* Location-based filtering */}
      {filterMode === 'location' && (
        <div className="location-filters">
          <div className="filter-item">
            <label htmlFor="state-select">State:</label>
            <select
              id="state-select"
              value={selectedState}
              onChange={(e) => onSelectState(e.target.value)}
            >
              <option value="">All States</option>
              {states.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
            {selectedState && (
              <button className="clear-btn" onClick={clearState}>&times;</button>
            )}
          </div>

          <div className="filter-item">
            <label htmlFor="city-select">City:</label>
            <select
              id="city-select"
              value={selectedCity}
              onChange={(e) => onSelectCity(e.target.value)}
              disabled={!selectedState}
            >
              <option value="">All Cities</option>
              {cities.map((ct) => (
                <option key={ct} value={ct}>{ct}</option>
              ))}
            </select>
            {selectedCity && (
              <button className="clear-btn" onClick={clearCity}>&times;</button>
            )}
          </div>

          <div className="filter-item">
            <label htmlFor="location-select">Location:</label>
            <select
              id="location-select"
              value={selectedLocation}
              onChange={(e) => onSelectLocation(e.target.value)}
              disabled={!selectedCity}
            >
              <option value="">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            {selectedLocation && (
              <button className="clear-btn" onClick={clearLocation}>&times;</button>
            )}
          </div>
        </div>
      )}

      {/* Specialization-based filtering */}
      {filterMode === 'specialization' && (
        <div className="specialization-filters">
          <div className="filter-item">
            <label htmlFor="specialty-select">Specialty:</label>
            <select
              id="specialty-select"
              value={selectedSpecialty}
              onChange={(e) => onSelectSpecialty(e.target.value)}
            >
              <option value="">All Specialties</option>
              {specialties.map((spec) => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
            {selectedSpecialty && (
              <button className="clear-btn" onClick={clearSpecialty}>&times;</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterToolbar;
