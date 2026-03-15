import { Suspense } from 'react';
import Countries from './Countries';

// Fetch all countries
const allCountriesDataFetch = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data;
};

const AllCountries = () => {
  const countriesDataLoad = allCountriesDataFetch();

  return (
    <div>
      <Suspense fallback={<p>Loading data ...</p>}>
        <Countries allData={countriesDataLoad} />
      </Suspense>
    </div>
  );
};

export default AllCountries;
