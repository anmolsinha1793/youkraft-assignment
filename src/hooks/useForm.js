
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useContext(UserContext);

  /**
   * lifecycle hook for react, executes when there is change in error
   */
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setUser(values);
      callback();
    }
  }, [errors]);

  /**
   * function to handle submit action by user
   * @param event event from the click
   * @return  {void}
   */
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  /**
   * function to handle reset action by the user and clear values from form
   * @return  {void}
   */
  const handleReset = () => {
    setValues({});
    setUser({});
  }
  /**
   * function to update state based on user input change
   * @param event event from the click
   * @return  {void}
   */
  const handleChange = (event) => {
    event.persist();
    let {name, value} = event.target;
    value = name === 'phnumber' ? +value : value;
    setValues(values => ({ ...values, [name]: value }));
  };

  return {
    handleChange,
    handleSubmit,
    handleReset,
    values,
    errors,
  }
};

export default useForm;