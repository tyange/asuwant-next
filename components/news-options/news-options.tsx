import CountryOptions from "./country-options/country-options";
import CategoryOptions from "./category-options/category-options";

const NewsOptions = () => {
  return (
    <div>
      <CountryOptions />
      <div className="flex justify-center">
        <div className="border-t-2 w-1/2"></div>
      </div>
      <CategoryOptions />
    </div>
  );
};

export default NewsOptions;
