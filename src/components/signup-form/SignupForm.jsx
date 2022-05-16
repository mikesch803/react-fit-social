import React from "react";
import { PasswordNotShowIcon } from "../../assets/icons/icons";
import "./SignupForm.css";

export function SignupForm({setLoginForm}) {
  return (
    <div className="signup-page">
      <form
        className="form form-signup"
      >
        <div className="parent-div">
          <input
            type="text"
            placeholder="first name"
            className="form-input flex-1"
            name="firstName"
            required
          />
          <input
            type="text"
            placeholder="last name"
            className="form-input flex-1"
            name="lastName"
            required
          />
        </div>
        <input
          type="text"
          placeholder="email"
          className="form-input"
          name="email"
          required
        />
        <div className="parent-div">
          <input
            placeholder="password"
            className="form-input flex-1"
            name="password"
            required
          />
          <button
            className="form-passwordeye"
           >
              <PasswordNotShowIcon/>
          </button>
        </div>

        <div className="parent-div">
          <input
            placeholder="confirm password"
            className="form-input flex-1"
            name="confirmPassword"
            required
          />
          <button
            className="form-passwordeye"
                     >
              <PasswordNotShowIcon />
          </button>
        </div>
        <div className="form-checkbox signup-checkbox">
          <label>
            <input type="checkbox" required /> I accepted all terms and
            conditions
          </label>
        </div>
        <button className="btn btn-primary form-btn" type="submit">
          create new account
        </button>
      <button className="btn btn-link link-account" onClick={()=>setLoginForm(true)}>
          Already have an account
        </button>
      </form>
    </div>
  );
}