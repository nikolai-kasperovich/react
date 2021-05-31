import React from 'react';
import Counter from '../components/counter'

class CheckCounterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentValue : 0
        }
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
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

    render() {
        return (
            <Counter
                handleIncrement = {this.handleIncrement}
                handleDecrement = {this.handleDecrement}
                currentValue = {this.state.currentValue}
                displayForm = {this.state.displayForm}
                changeDisplayFormStatus = {this.changeDisplayFormStatus}
            />);
    }

}

export default CheckCounterContainer