import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import useForm from "../../hooks/useForm";
import validate from '../../Validators/FormValidator';
import './UserForm.css';

const UserForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleReset
  } = useForm(submitData, validate);

  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useContext(UserContext);

  const valueMapper = () => {
    return Object.keys(user).map((key) =>
    <li key={key}>{key}: {user[key]}</li>
    );
  }

  function submitData() {
    setSubmitted(true);
    console.log('No errors, submit callback called!');
  }

  const onResetClick = () => {
    handleReset();
    setSubmitted(false)
  }

  return (
    <div className="form__wrapper">
          <div className="box">
            <form onSubmit={handleSubmit} className='customize__form' noValidate>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.name && 'is__danger'}`} type="text" name="name" onChange={handleChange} value={values.name || ''} required />
                  {errors.name && (
                    <p className="help is__danger">{errors.name}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Age</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.age && 'is__danger'}`} type="number" name="age" onChange={handleChange} value={values.age || ''} required />
                  {errors.age && (
                    <p className="help is__danger">{errors.age}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.email && 'is__danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="help is__danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Phone number</label>
                <div className="control">
                  <input maxLength={10} className={`input ${errors.phnumber && 'is__danger'}`} type="text" name="phnumber" onChange={handleChange} value={values.phnumber || ''} required />
                </div>
                {errors.phnumber && (
                  <p className="help is__danger">{errors.phnumber}</p>
                )}
              </div>
              <div className='button__wrapper'>
              <button type='button' className="customize__reset" onClick={onResetClick}>Reset</button>
              <button type="submit" className="customize__submit">Submit</button>
              </div>
            </form>
            {submitted ? <div className='customize__display__data'>
                Submitted Values:
                <ul>
                {valueMapper()}
                </ul>
            </div> : null}
          </div>
    </div>
  );
};

export default UserForm;