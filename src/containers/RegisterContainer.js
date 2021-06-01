import React from 'react';
import Register from "../components/register";

class RegisterContainer extends React.Component {

    render() {
        const initialFormValues = {
            email: '',
            firstName: '',
            lastName: '',
        }
        return <Register initialFormValues={initialFormValues}/>;
    }

}

export default RegisterContainer