import { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../mocks/auth";
import styles from "@/styles/login.module.scss"


const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleUsername = (e) => setUsername(e.target.value);
  const onHandlePassword = (e) => setPassword(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    try {
      const user = auth.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        localStorage.setItem("isLogged", true);
        localStorage.setItem("username", user.username);
        router.push("/dashboard"); 
        throw new Error("Credenziali non valide");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.Login}>

    <h1>Login</h1>
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={onHandleUsername}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onHandlePassword}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Login</button>
    </form>
  </div>
  );
};

export default Login;
