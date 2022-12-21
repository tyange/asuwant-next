import { countries } from "../../../constants/countries";
import CountryOption from "./country-option/country-option";

const CountryOptions = () => {
  return (
    <div className="grid grid-cols-5 px-52 py-10 gap-7">
      {countries.map((country) => (
        <CountryOption key={country.code} country={country} />
      ))}
    </div>
  );
};

export default CountryOptions;
