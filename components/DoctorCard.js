"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 

const SearchComp = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    onSearch(query); // Pass the search term back to the parent
  };

  return (
    <div className="flex justify-center items-start mt-10 mb-10">
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-md">
        <input
          type="text"
          placeholder="Search by location"
          value={searchTerm}
          onChange={handleSearch}
          className="bg-gray-100 outline-none text-gray-600"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600 ml-2" />
      </div>
    </div>
  );
};

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 text-black transition-transform transform hover:scale-105 hover:shadow-2xl">
      <p className="text-xl font-bold mb-4 text-center">Name of Doctor: {doctor.name}</p>
      <div className="text-left mb-4">
        <p className="text-lg mb-2">
          <span className="font-semibold">Location:</span> {doctor.location}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Languages:</span> {doctor.languages.join(', ')}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Specialization:</span> {doctor.specialization}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Phone No:</span> {doctor.phone}
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <button className="w-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
          Online
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
          Offline
        </button>
      </div>
    </div>
  );
};

const DoctorsList = () => {
  const doctorsData = [
    {
      name: "Dr. Samuel",
      location: "Bengaluru",
      languages: ["Hindi", "English"],
      specialization: "ENT",
      phone: "55664354",
    },
    {
      name: "Dr. Anita",
      location: "Mumbai",
      languages: ["Marathi", "English"],
      specialization: "Cardiology",
      phone: "99887766",
    },
    {
      name: "Dr. Rajesh Kumar",
      location: "Delhi",
      languages: ["Hindi", "English"],
      specialization: "Orthopedics",
      phone: "98765432",
    },
    {
      name: "Dr. Priya Sharma",
      location: "Bengaluru",
      languages: ["Kannada", "English"],
      specialization: "Dermatology",
      phone: "91234567",
    },
    {
      name: "Dr. Anil Verma",
      location: "Kolkata",
      languages: ["Bengali", "English"],
      specialization: "Pediatrics",
      phone: "99887755",
    },
    {
      name: "Dr. Sunita Patel",
      location: "Ahmedabad",
      languages: ["Gujarati", "English"],
      specialization: "Gynecology",
      phone: "94567890",
    },
  ];

  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  const handleSearch = (query) => {
    const filtered = doctorsData.filter((doctor) =>
      doctor.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <div>
      <SearchComp onSearch={handleSearch} />
      <div className="max-w-3xl mx-auto">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
