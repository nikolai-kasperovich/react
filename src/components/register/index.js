import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import styles from "./style.js";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Grid, Button , withStyles} from "@material-ui/core";
import FormikTextField from "../../modules/Formik/TextField";
import FormikPasswordField from "../../modules/Formik/PasswordField";

import {COUNT} from "../../helper/index"

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required("Required")
    .max(120, "Maximum length is 120 characters")
    .email("Invalid email"),
  firstName: Yup.string().trim().max(60, "Maximum length is 60 characters"),
  secondName: Yup.string().trim().max(60, "Maximum length is 60 characters"),
  password: Yup.string(),
  confirmPassword: Yup.string()
    .required("Required")
    .when("password", {
      is: (val) => val && val.length > 0,
      then: Yup.string().oneOf([Yup.ref("password")], "Password must match"),
    }),
});

const Register = ({ initialFormValues, onRegister, classes }) => (
  <div className={classes.root} >
  <Formik
    initialValues={initialFormValues}
    validationSchema={registerSchema}
    onSubmit={onRegister}
  >
    <Form autoComplete="off">
      <Grid container direction="column">
        <Grid item className="mainForm">
          <Field
            fullWidth
            color="secondary"
            name="email"
            label="Email"
            type="email"
            component={FormikTextField}
            required
          />
          <Field
            fullWidth
            color="secondary"
            name="firstName"
            label="First Name"
            component={FormikTextField}
            required
          />
          <Field
            fullWidth
            color="secondary"
            name="secondName"
            label="Second Name"
            component={FormikTextField}
            required
          />
          <Field
            fullWidth
            color="secondary"
            name="password"
            label="Password"
            type="password"
            component={FormikPasswordField}
            required
          />
          <Field
            fullWidth
            color="secondary"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            component={FormikPasswordField}
            required
          />
          {COUNT.map((value) => (
            <div key={value}>
            <Button  className={classes.btn} fullWidth variant="contained" color="primary" type="submit">
            Sign Up
          </Button>
            </div>
          ))}
          
        </Grid>
      </Grid>
    </Form>
  </Formik>
  </div>
  );

Register.propTypes = {
  initialFormValues: PropTypes.object.isRequired,
};
export default withStyles(styles)(Register);
