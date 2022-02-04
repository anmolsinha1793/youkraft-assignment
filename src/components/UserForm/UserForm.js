import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import useForm from "../../hooks/useForm";
import validate from '../../validators/FormValidator';
import './UserForm.css';
import userConstant from '../../constants/User.constant';

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
                <label className="label">{userConstant.NAME}</label>
                <div className="control">
                  <input autoComplete="off" placeholder={userConstant.NAME_PLACEHOLDER} className={`input ${errors.name && 'is__danger'}`} type="text" name="name" onChange={handleChange} value={values.name || ''} required />
                  {errors.name && (
                    <p className="isError is__danger">{errors.name}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">{userConstant.AGE}</label>
                <div className="control">
                  <input autoComplete="off" min={userConstant.MIN_AGE} max={userConstant.MAX_AGE} placeholder={userConstant.AGE_PLACEHOLDER} className={`input ${errors.age && 'is__danger'}`} type="number" name="age" onChange={handleChange} value={values.age || ''} required />
                  {errors.age && (
                    <p className="isError is__danger">{errors.age}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">{userConstant.EMAIL}</label>
                <div className="control">
                  <input autoComplete="off" placeholder={userConstant.EMAIL_PLACEHOLDER} className={`input ${errors.email && 'is__danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="isError is__danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">{userConstant.PHNUMBER}</label>
                <div className="control">
                  <input placeholder={userConstant.PHNUMBER_PLACEHOLDER} maxLength={userConstant.PH_NUMBER_LENGTH} className={`input ${errors.phnumber && 'is__danger'}`} type="text" name="phnumber" onChange={handleChange} value={values.phnumber || ''} required />
                </div>
                {errors.phnumber && (
                  <p className="isError is__danger">{errors.phnumber}</p>
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