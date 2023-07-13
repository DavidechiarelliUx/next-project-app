import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../mocks/auth";

const Dashboard = () => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [imgProfile, setImgProfile] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("isLogged")));
    if (JSON.parse(localStorage.getItem("isLogged"))) {
      const user = auth.find(
        (u) => u.username === localStorage.getItem("username")
      );
      setUsername(user.username);
      setImgProfile(user.imgProfile);
      setInfo(user.info);
    } else {
      router.push("/login");
    }
  }, []);

  const onHandleLogout = () => {
    localStorage.setItem("isLogged", false);
    localStorage.setItem("username", "");
    setIsLogged(false);
    router.push("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <img src={imgProfile} alt="Profile" />
      <h2>{username}</h2>
      <p>{info}</p>
      <button onClick={onHandleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
