import React from "react";
import Register from "../components/register";
import { Link } from "react-router-dom";
import "../slyles/pages.css"

class RegisterContainer extends React.Component {
  render() {
    const initialFormValues = {
      email: "",
      firstName: "",
      secondName: "",
    };

    const OnRegisterUser = (register) => {
      console.log(register, "Params");
    };

    return (
      <div>
        <div className="flexMid">
          <Register
            initialFormValues={initialFormValues}
            onRegister={OnRegisterUser}
           />
        </div>
        <div className="flexMid">
        <Link className="linkOne" to="/home">
            Go home
          </Link>
        </div>
      </div>
      
      
    );
  }
}

export default RegisterContainer;
