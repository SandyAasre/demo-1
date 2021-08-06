import { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginStyle from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState("");
  const history = useHistory();
  const submitHandle = () => {
    setIsLoading(true);
    if (!email || !password) {
      setError("Invalid Form");
      setIsLoading(false);
      return;
    }
    if (email.toLowerCase() === "user@gmail.com" && password === "123456") {
      setIsLoading(false);
      localStorage.setItem("user", "true");
      history.push("/product");
    } else {
      setError("Invalid Email/Password");
      setIsLoading(false);
    }
  };

  return (
    <form className={LoginStyle.container}>
      <h1 className={LoginStyle.center}>Login</h1>
      <div className={LoginStyle.error}>{Error}</div>
      <label className={LoginStyle.label}>Email</label>
      <input
        name="email"
        type="email"
        value={email}
        className={LoginStyle.input}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label className={LoginStyle.label}>Password</label>
      <input
        name="password"
        type="password"
        value={password}
        className={LoginStyle.input}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="button" className={LoginStyle.btn} onClick={submitHandle}>
        Login
      </button>
      {isLoading ? <div className={LoginStyle.loading}>Loading...</div> : ""}
    </form>
  );
};

export default Login;
