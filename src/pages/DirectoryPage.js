import React, { useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import Filters from '../components/Filters';
import MapView from '../components/MapView';
import doctorData from '../data/doctors';
import './DirectoryPage.css';

const DirectoryPage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const specialties = [...new Set(doctorData.map(doc => doc.specialty))];

  const filteredDoctors = doctorData.filter((doc) => {
    const matchesSpecialty = selectedSpecialty ? doc.specialty === selectedSpecialty : true;
    const matchesLocation = locationFilter
      ? doc.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;
    return matchesSpecialty && matchesLocation;
  });

  return (
    <div className="directory-page">
      <header className="header">
        <h1>Doctors Directory</h1>
        <p>Find top doctors by specialty and location</p>
      </header>
      <Filters
        specialties={specialties}
        selectedSpecialty={selectedSpecialty}
        onSelect={setSelectedSpecialty}
        locationFilter={locationFilter}
        onLocationChange={setLocationFilter}
      />
      <div className="active-filters">
        {selectedSpecialty && (
          <span className="filter-tag">
            Specialty: {selectedSpecialty}
            <button onClick={() => setSelectedSpecialty("")}>&times;</button>
          </span>
        )}
        {locationFilter && (
          <span className="filter-tag">
            Location: {locationFilter}
            <button onClick={() => setLocationFilter("")}>&times;</button>
          </span>
        )}
      </div>
      <div className="doctor-grid">
        {filteredDoctors.length ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <p>No doctors available for the selected filters.</p>
        )}
      </div>
      <h2>Map View</h2>
      <MapView doctors={filteredDoctors} />
    </div>
  );
};

export default DirectoryPage;
