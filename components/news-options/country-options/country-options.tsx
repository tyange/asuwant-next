import { countries } from "../../../constants/countries";
import { getFlagEmoji } from "../../../utils/getFlagEmoji";

const CountryOptions = () => {
  return (
    <div>
      {countries.map((country) => (
        <button key={country.code}>
          <span>{getFlagEmoji(country.code)}</span>
          <span>{country["kor-name"]}</span>
        </button>
      ))}
    </div>
  );
};

export default CountryOptions;
