import { use } from 'react';
import CountriesDetails from './Page/CountriesDetails';

const Countries = ({ allData }) => {
  const useAllData = use(allData);
  const countries = useAllData.countries;
  console.log(countries);
  return (
    <div className="gap-3 grid justify-center grid-cols-1 align-middle sm:grid-cols-2 lg:grid-cols-3 items-stretch">
      {countries.map(data => (
        <CountriesDetails key={data.cca3.cca3} countriesData={data} />
      ))}
    </div>
  );
};

export default Countries;
