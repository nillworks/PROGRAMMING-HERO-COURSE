import { use, useState } from 'react';
import CountriesDetails from './Page/CountriesDetails';

const Countries = ({ allData }) => {
  const useAllData = use(allData);
  const countries = useAllData.countries;

  // Country Counts
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = status => {
    console.log('handle visited Countray', status);
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl">total Country : {countries.length}</h2>
        <p>Visited Countries: </p>
      </div>

      <div className="gap-3 grid justify-center grid-cols-1 align-middle sm:grid-cols-3 lg:grid-cols-3 items-stretch">
        {countries.map(data => (
          <CountriesDetails
            key={data.cca3.cca3}
            countriesData={data}
            onVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
