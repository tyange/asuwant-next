import { categories } from "../../../constants/category";
import CategoryOption from "./category-option/category-option";
const CategoryOptions = () => {
  return (
    <div className="flex justify-center items-center gap-5 p-10">
      {categories.map((category) => (
        <CategoryOption key={category.name} category={category} />
      ))}
    </div>
  );
};

export default CategoryOptions;
