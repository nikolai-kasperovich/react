import React from 'react';
import RegisterSuper from '../components/super';
import RegisterContainer from "./common";

class RegisterContainerSuper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentValueSuper : 0,
            currentValue : 0,
            displayForm : false,
        }
        this.handleIncrementSuper = this.handleIncrementSuper.bind(this)
        this.handleDecrementSuper = this.handleDecrementSuper.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.changeDisplayFormStatus = this.changeDisplayFormStatus.bind(this)
    }
    handleIncrementSuper() {
        this.setState({
            currentValueSuper: this.state.currentValueSuper + 1
        })
    }

    handleDecrementSuper() {
        this.setState({
            currentValueSuper: this.state.currentValueSuper - 1
        })
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
        let additionalCounters = [];
        if (this.state.currentValueSuper > 0) {
            for (let i = 1; i<=this.state.currentValueSuper; i++) {
                additionalCounters.push(
                    <RegisterContainer key={i}
                              handleIncrement = {this.handleIncrement}
                              handleDecrement = {this.handleDecrement}
                              currentValue = {this.state.currentValue}
                    />)
            }
        }

        return (
        <div>
            <RegisterSuper
                handleIncrementSuper = {this.handleIncrementSuper}
                handleDecrementSuper = {this.handleDecrementSuper}
                currentValueSuper = {this.state.currentValueSuper}
                displayForm = {this.state.displayForm}
                changeDisplayFormStatus = {this.changeDisplayFormStatus}
            />
            {additionalCounters}
        </div>
        );
    }

}

export default RegisterContainerSuper