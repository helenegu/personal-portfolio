import React, { useState } from "react";
import { personalDropdownList } from "../constants";
import { Link } from "react-router-dom";

function PersonalDropdown() {
  const [personaldropdown, setPersonalDropdown] = useState(false);

  return (
    <>
      <ul
        className={personaldropdown ? "personal-submenu clicked" : "personal-submenu"}
        onClick={() => setPersonalDropdown(!personaldropdown)}
      >
        {personalDropdownList.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setPersonalDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PersonalDropdown;
