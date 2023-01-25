import React from 'react';
import '../styles/form.scss';
import { Link } from 'react-router-dom';

export default function register() {
  return (
    <div className="form form--page">
      <div className="form__group form__group--page">
        <label className="form__label">First name</label>
        <input className="form__field" type="text" placeholder="First name" />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Last name</label>
        <input className="form__field" type="text" placeholder="Last name" />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Email</label>
        <input className="form__field" type="text" placeholder="Email" />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Choose password</label>
        <input className="form__field" type="text" placeholder="Choose password" />
      </div>

      <div clasNames="form__group form__group--page">
        <label className="form__label">Confirm Password</label>
        <input className="form__field" type="text" placeholder="Confirm Password" />
      </div>

      <div className="form__group form__group--page">
        <input className="form__btn" type="submit" value="Register" />
      </div>

      <footer>
        Already have an account? <Link to='/login'>Login</Link>
      </footer>
    </div>
  );
}
