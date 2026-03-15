const CountriesDetails = ({ countriesData }) => {
  return (
    <div className="text-white">
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
    </div>
  );
};

export default CountriesDetails;
