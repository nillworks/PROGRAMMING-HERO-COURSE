import { use, useState } from 'react';
import CountriesDetails from './Page/CountriesDetails';

const Countries = ({ allData }) => {
  const useAllData = use(allData);
  const countries = useAllData.countries;

  // Country Counts
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = status => {
    console.log('handle visited Countray', status);
    setVisitedCountries([...visitedCountries, status]);
  };

  const [countryFlag, setCountryFlag] = useState([]);
  const onCountryFlag = flags => {
    setCountryFlag([...countryFlag, flags]);
  };

  console.log(countryFlag.length);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl">total Country : {countries.length}</h2>
        <p>Visited Countries: {visitedCountries.length}</p>
        <ol>
          {visitedCountries.map(item => (
            <li key={item.cca3.cca3}>{item?.name?.common}</li>
          ))}
        </ol>
        <div className="w-20 h-20 flex gap-3 mb-4">
          {countryFlag.map((item, i) => (
            <img key={i} src={item} alt="flag" />
          ))}
        </div>
      </div>

      <div className="gap-3 grid justify-center grid-cols-1 align-middle sm:grid-cols-3 lg:grid-cols-3 items-stretch">
        {countries.map(data => (
          <CountriesDetails
            key={data.cca3.cca3}
            countriesData={data}
            onVisitedCountries={handleVisitedCountries}
            onCountryFlag={onCountryFlag}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
