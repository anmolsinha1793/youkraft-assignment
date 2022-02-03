
import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleReset = () => {
    console.log(errors);
    setValues({});
    setErrors({});
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