import React from "react";
import categoryLists from "../../Data/categoryLists";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categorySidebar max-h-[600px] overflow-y-auto">
      <div className="mt-2 font-semibold text-neutral-content/80">
        <ul>
          {categoryLists.map((item, i) =>
            item?.dropdown ? (
              <li key={i} className="border-b p-2">
                <button className="flex justify-between items-center w-full">
                  <p>{item.name}</p>
                  <IoIosArrowDown />
                </button>

                <ul className="w-full pl-2 text-neutral-content/70">
                  {item?.dropdown?.map((item) => (
                    <li className="p-2">
                      <Link to="" className="block">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li className="p-2 border-b">
                <Link to="" className="block">
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
