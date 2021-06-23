import React from "react";
import { Link } from "react-router-dom";
import "../../slyles/pages.css";
import Lines from "../graphics";
import Parabola from "../graphics/victory";

const pageSix = () => (
   <div>
    <div className="flexMid">
      <div>
       <Lines />  
      </div>
       <div className="parabola">
    <Parabola/>
    </div>
    </div>
    <Link className="top blue" to="/pageSeven">
      Go to Page#7
    </Link>
   </div>

);

export default pageSix;
