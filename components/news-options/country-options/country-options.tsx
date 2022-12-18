import styles from "./country-options.module.css";

import { countries } from "../../../constants/countries";

const CountryOptions = () => {
  return (
    <div className={styles.countriesButtons}>
      {countries.map((country) => (
        <button key={country.code}>{country["kor-name"]}</button>
      ))}
    </div>
  );
};

export default CountryOptions;
