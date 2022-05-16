import React from "react";
import { PasswordNotShowIcon } from "../../assets/icons/icons";
import { Link } from "react-router-dom";
import './LoginForm.css'
export function LoginForm({setLoginForm}) {
  return (
    <form className="form form-login" 
    >
        <input
          required
          type="text"
          placeholder="email"
          className="form-input"
          name="email"
        />
        <div className="parent-div">
          <input
            required
            placeholder="password"
            className="form-input flex-1"
            name="password"
          />
          <button
            className="form-passwordeye"
            >
              <PasswordNotShowIcon />
          </button>
        </div>
        <div className="form-checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link to="#" className="btn btn-link">
            Forget password?
          </Link>
        </div>
        <button className="btn btn-primary form-btn" type="submit">
          login
        </button>
        <button
          className="btn btn-outline form-btn"
          >
          guest login
        </button>
      <button className="btn btn-link link-account" onClick={()=>{ setLoginForm(false); console.log('clicked')}}>
          create a new account
        </button>
      </form>
  );
}
