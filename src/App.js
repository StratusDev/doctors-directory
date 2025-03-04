// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterToolbar from './components/FilterToolbar';
import DirectoryPage from './pages/DirectoryPage';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import doctorData from './data/doctors';
import './App.css';

function App() {
  // Specialty filter
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  // Location filters
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Generate unique specialties from data
  const specialties = [...new Set(doctorData.map((doc) => doc.specialty))];

  // For demonstration, define your states, cities, locations:
  // (In a real app, you might fetch or derive these from the data)
  const states = ["California", "New York", "Texas"];
  const cities = selectedState
    ? selectedState === "California"
      ? ["San Francisco", "Los Angeles", "San Diego"]
      : selectedState === "New York"
      ? ["New York City", "Buffalo"]
      : ["Houston", "Dallas", "Austin"]
    : [];
  const locations = selectedCity
    ? selectedCity === "San Francisco"
      ? ["Downtown SF", "Mission District"]
      : selectedCity === "Los Angeles"
      ? ["Hollywood", "Beverly Hills"]
      : selectedCity === "San Diego"
      ? ["Gaslamp Quarter"]
      : selectedCity === "New York City"
      ? ["Manhattan", "Brooklyn"]
      : selectedCity === "Buffalo"
      ? ["Elmwood Village"]
      : selectedCity === "Houston"
      ? ["Midtown Houston"]
      : selectedCity === "Dallas"
      ? ["Uptown Dallas"]
      : selectedCity === "Austin"
      ? ["Downtown Austin"]
      : []
    : [];

  // Clear functions for location filters
  const clearState = () => {
    setSelectedState('');
    setSelectedCity('');
    setSelectedLocation('');
  };
  const clearCity = () => {
    setSelectedCity('');
    setSelectedLocation('');
  };
  const clearLocation = () => setSelectedLocation('');

  // Clear function for specialty
  const clearSpecialty = () => setSelectedSpecialty('');

  return (
    <div className="App">
      <Header />
      <Hero />
      <FilterToolbar
        specialties={specialties}
        states={states}
        cities={cities}
        locations={locations}
        selectedSpecialty={selectedSpecialty}
        onSelectSpecialty={setSelectedSpecialty}
        selectedState={selectedState}
        onSelectState={(val) => {
          setSelectedState(val);
          setSelectedCity('');    // reset city & location
          setSelectedLocation('');
        }}
        selectedCity={selectedCity}
        onSelectCity={(val) => {
          setSelectedCity(val);
          setSelectedLocation('');
        }}
        selectedLocation={selectedLocation}
        onSelectLocation={setSelectedLocation}
        clearSpecialty={clearSpecialty}
        clearState={clearState}
        clearCity={clearCity}
        clearLocation={clearLocation}
      />
      <div className="main-content">
        <DirectoryPage 
          doctorData={doctorData}
          selectedSpecialty={selectedSpecialty}
          selectedState={selectedState}
          selectedCity={selectedCity}
          selectedLocation={selectedLocation}
        />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

export default App;
