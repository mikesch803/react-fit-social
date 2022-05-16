import { useState } from "react";
export function useForm() {
  const [loginForm, setLoginForm] = useState(true);
  return { loginForm, setLoginForm };
}
