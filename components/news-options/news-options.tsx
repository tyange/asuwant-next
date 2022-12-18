import CountryOptions from "./country-options/country-options";
import CategoryOptions from "./category-options/category-options";

import styles from "./news-options.module.css";

const NewsOptions = () => {
  return (
    <div className={styles.newsOptions}>
      <CountryOptions />
      <CategoryOptions />
    </div>
  );
};

export default NewsOptions;
