import React from "react";
import { Link } from "react-router-dom";

import "../../slyles/pages.css";

const pageThree = () => (
  <div>
    <Link className="top yellow" to="/pageFour">
      Go to Page#4
    </Link>
  </div>
);

export default pageThree;
