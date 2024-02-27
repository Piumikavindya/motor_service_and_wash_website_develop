import React from "react";
import { Link, useLocation } from "react-router-dom";

const breadcrumb = {
  backgroundColor: "white",
  border: "2px solid rgba(0,0,0,0.125)",
  borderRadius: "0.37rem",
  marginTop: "-10px",
};

function Breadcrumb(props) {
  const location = useLocation();

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  const separatorStyle = {
    margin: "0 0.5rem",
    fontSize: "1.5em", // Adjust the font size to increase the size of the /
  };

  return (
    <nav
      className="text-sm sm:text-base bg-white p-4 md:p-6 lg:p-6 rounded-md shadow-lg"
      style={breadcrumb}
    >
      <div className="breadcrumb">
        <ol className="list-none p-0 inline-flex space-x-2">
          {props.crumbs.map((crumb, ci) => {
 const disabled = isLast(ci) ? "disabled" : "";
 const link = crumb.link.includes(":id")
 ? crumb.link.replace(":id", location.pathname.split("/").pop())
 : crumb.link;
 return (
  <React.Fragment key={ci}>
  <li className="breadcrumb-item align-items-center">
    <Link to={crumb.link} className={`link ${disabled}`}>
      {crumb.label}
    </Link>
  </li>
  {!isLast(ci) && (
    <span style={separatorStyle}>/</span>
  )}
</React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;
