import React from "react";
import PropTypes from "prop-types";

class LoginContainer extends React.Component {
    constructor(props){
    super(props)

    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this)

    }

    focusTextInput() {
        this.textInput.current.focus()
    }
    render() {
        const OnLoginUser = (login) => {
            console.log(login);
        }
        return <Login OnLogin={OnLoginUser} 
        refInput={refInput}
        focusTextInput={focusTextInput}
         />
    }
}

export default LoginContainer