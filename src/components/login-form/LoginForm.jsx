import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PasswordNotShowIcon } from "../../assets/icons/icons";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { useDispatch, useSelector } from "react-redux";
export function LoginForm({ setLoginForm, guestLogin, login }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(()=>{  
    token && navigate(location?.state?.from?.pathname || "/home");
  },[token])

  const [formDetail, setFormDetail] = useState({
    username: "",
    password: "",
  });

  const loginHandler = (e) => {
    e.preventDefault(e);
    dispatch(login(formDetail))
  }


  return (<>
    <form
      className="form form-login"
      onSubmit={(e) => loginHandler(e)}
    >
      <input
        required
        type="text"
        placeholder="username"
        className="form-input mt-1"
        name="username"
        onChange={(e) =>
          setFormDetail({ ...formDetail, [e.target.name]: e.target.value })
        }
      />
      <div className="parent-div">
        <input
          required
          placeholder="password"
          className="form-input flex-1"
          name="password"
          onChange={(e) =>
            setFormDetail({ ...formDetail, [e.target.name]: e.target.value })
          }
        />
        <button className="form-passwordeye">
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
        onClick={(e) => dispatch(guestLogin(e))}
      >
        guest login
      </button>
      <button
        className="btn btn-link link-account"
        onClick={() => {
          setLoginForm(false);
        }}
        >
        create a new account
      </button>
    </form>
        </>
  );
}
