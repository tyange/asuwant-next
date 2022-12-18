import { categories } from "../../../constants/category";
import styles from "./category-options.module.css";
const CategoryOptions = () => {
  return (
    <div className={styles.categoriesButtons}>
      {categories.map((category) => (
        <button key={category.name}>{category["kor-name"]}</button>
      ))}
    </div>
  );
};

export default CategoryOptions;
