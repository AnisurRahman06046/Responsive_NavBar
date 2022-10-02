import React from "react";

const Link = ({ route }) => {
  return (
    <li>
      <a className="mr-10 font-bold" href={route.path}>
        {route.name}
      </a>
    </li>
  );
};

export default Link;
