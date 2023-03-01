import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const CategoryItems = ({ item }) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  if (item?.dropdown) {
    return (
      <li className="border-b p-2">
        <button
          onClick={() => setDropdownToggle(!dropdownToggle)}
          className="flex justify-between items-center w-full"
        >
          <p>{item.name}</p>
          <IoIosArrowDown
            className={`${dropdownToggle && "rotate-180 "} duration-300`}
          />
        </button>

        <ul
          className={`w-full pl-2 text-neutral-content/70 dropdown ${
            dropdownToggle && "dropdownShow "
          }`}
        >
          {item.dropdown.map((item) => (
            <li className="p-2">{item.name}</li>
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li className="border-b p-2">
        <Link>{item.name}</Link>
      </li>
    );
  }
};

export default CategoryItems;
