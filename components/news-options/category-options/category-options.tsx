import { categories } from "../../../constants/category";
const CategoryOptions = () => {
  return (
    <div>
      {categories.map((category) => (
        <button key={category.name}>{category["kor-name"]}</button>
      ))}
    </div>
  );
};

export default CategoryOptions;
