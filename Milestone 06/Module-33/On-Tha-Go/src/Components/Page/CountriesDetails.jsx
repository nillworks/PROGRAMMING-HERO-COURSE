import { useState } from 'react';

const CountriesDetails = ({ countriesData, onVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    onVisitedCountries(countriesData);
  };

  return (
    <div className="text-white border mx-auto px-2 py-4 rounded-2xl transition duration-300 cursor-pointer hover:-translate-y-1">
      {/* Details */}
      <div className="space-y-3 text-center">
        <img
          src={countriesData?.flags?.flags?.png}
          alt={countriesData?.flags?.flags?.alt}
        />
        <h2 className="text-2xl">
          CountriesName:{'  '}
          <span className="font-bold text-lg capitalize">
            {countriesData?.name?.common}
          </span>
        </h2>
        <p>Population : {countriesData?.population?.population}</p>
        <p>
          Area:{' '}
          {countriesData.area.area > 10000
            ? `Beg Countries ${countriesData.area.area}`
            : countriesData.area.area}
        </p>
        <div>
          <button
            onClick={handleVisited}
            className={`btn ${visited ? 'btn-success' : 'btn-primary'} mx-auto`}
          >
            {!visited ? 'Not Visited' : 'Visited'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountriesDetails;
