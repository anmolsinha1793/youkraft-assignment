export default function validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.age) {
      errors.age = 'Age is required';
    } else if (values.age < 1 || values.age > 100) {
      errors.age = 'Age should be within 1 - 100';
    }
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phnumber) {
      errors.phnumber = 'Password is required';
    } else if (values.phnumber.toString().length !== 10) {
      errors.phnumber = 'Phone number must be 10 digits';
    }
    return errors;
  };