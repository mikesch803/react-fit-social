import { useState } from "react";
export function useForm() {
  const [loginForm, setLoginForm] = useState(true);
  const [errMsg, setErrMsg] = useState({
    email:"", password:"", confirmPassword:""
  })

  const [passwordHidden, setPasswordHidden] = useState(true)

  const formValidation = (email, password, confirmPassword) => {
    let errors = {...errMsg}
    if(email.includes('@')){
      errors = {...errors, email:""}
    } else {
      errors = {...errors, email:"invalid email"}
    }
    if(password.length < 8 ) {
       errors = {...errors, password:"password should be greater than 8 chars"}
    } else {
      errors = {...errors, password:""}
    }

    if(confirmPassword !== password) {
      errors = {...errors, confirmPassword:"pasword is should match"}
    } else {
      errors = {...errors, confirmPassword:""}
    }

    setErrMsg(errors)
  }

  return { loginForm, setLoginForm, formValidation, errMsg, passwordHidden, setPasswordHidden };
}
