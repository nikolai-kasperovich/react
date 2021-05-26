import React from 'react';
import Register from '../components/index'

class RegisterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentValue : 0,
            displayForm : false,
        }
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.changeDisplayFormStatus = this.changeDisplayFormStatus.bind(this)
    }
    handleIncrement() {
        this.setState({
            currentValue: this.state.currentValue + 1
        })
    }

    handleDecrement() {
        this.setState({
            currentValue: this.state.currentValue - 1
        })
    }

    changeDisplayFormStatus() {
        this.setState({
            displayForm: !this.state.displayForm,
        })
    }

    render() {      
        return (
            <Register
                handleIncrement = {this.handleIncrement}
                handleDecrement = {this.handleDecrement}
                currentValue = {this.state.currentValue}
                displayForm = {this.state.displayForm}
                changeDisplayFormStatus = {this.changeDisplayFormStatus}
            />);
    }

}

export default RegisterContainer