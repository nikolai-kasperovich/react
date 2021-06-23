import React from "react";
import Login from "../components/login";
import { connect } from "react-redux";
import { loginRequest } from "../actions/index";


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
        value: "",
        text: "",
        openClose: false,
      };
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  changeTextOne = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  changeTextTwo = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  testMethod = () => {
    this.props.loginRequest("asd");
  };
  hundleOpenClose = (e) => {
    this.setState({
      openClose: !this.state.openClose,
    });
    setTimeout(() => {
      window.scroll({
        left: 0,
        top: e.current.offsetTop,
        behavior: "smooth",
      });
    }, 100);
    console.log(e);
  };



  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    const OnLoginUser = (login) => {
      console.log(login, "Params");
    };


    return (
        <Login
                onLogin={OnLoginUser}
                refInput={this.textInput}
                focusTextInput={this.focusTextInput}
                testMethod={this.testMethod}
            />
      
      
    );
  }
}


    const mapStateToProps = (state) => {
        return {};
      };
      const mapDispatchToProps = (dispatch) => {
        return {
          loginRequest: (value) => dispatch(loginRequest(value)),
        };
      };

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
  