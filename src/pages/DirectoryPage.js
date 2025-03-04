// src/pages/DirectoryPage.js
import React from 'react';
import DoctorCard from '../components/DoctorCard';
import MapView from '../components/MapView';
import './DirectoryPage.css';

const DirectoryPage = ({
  doctorData,
  selectedSpecialty,
  selectedState,
  selectedCity,
  selectedLocation
}) => {
  // Filter doctors by specialty and location
  const filteredDoctors = doctorData.filter((doc) => {
    // Specialty check
    const matchesSpecialty = selectedSpecialty
      ? doc.specialty === selectedSpecialty
      : true;

    // Safely handle location fields (fallback to empty string if undefined)
    const docState = doc.state || "";
    const docCity = doc.city || "";
    const docLocationArea = doc.locationArea || "";

    // Partial matching checks (e.g., "includes")
    const matchesState = selectedState ? docState.includes(selectedState) : true;
    const matchesCity = selectedCity ? docCity.includes(selectedCity) : true;
    const matchesLocation = selectedLocation
      ? docLocationArea.includes(selectedLocation)
      : true;

    return matchesSpecialty && matchesState && matchesCity && matchesLocation;
  });

  return (
    <div className="directory-page">
      <section className="doctor-list-section" id="directory">
        <h3>Available Doctors</h3>
        <div className="doctor-grid">
          {filteredDoctors.length ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p>No doctors available for the selected filters.</p>
          )}
        </div>
      </section>

      <section className="map-section">
        <h3>Doctor Locations</h3>
        <MapView doctors={filteredDoctors} />
      </section>
    </div>
  );
};

export default DirectoryPage;
