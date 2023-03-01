import React from "react";
import categoryLists from "../../../Data/categoryLists";

import CategoryItems from "./CategoryItems";

const CategorySidebar = () => {
  return (
    <div className="categorySidebar sticky top-28 overflow-y-auto max-h-[600px]">
      <div className="mt-2 font-semibold text-neutral-content/80">
        <ul>
          {categoryLists.map((item, i) => (
            <CategoryItems key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySidebar;
