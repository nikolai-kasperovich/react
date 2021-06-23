import React from "react";
import { Link } from "react-router-dom";
import "../../slyles/pages.css";

const pageFive = () => (
  <div>
    <Link className="top lblue" to="/pageSix">
      Go to Page#6
    </Link>
  </div>
);

export default pageFive;
