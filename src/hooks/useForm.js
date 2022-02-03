
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setUser(values);
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleReset = () => {
    setValues({});
    setUser({});
  }

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