import React, { createContext, useContext, useState } from "react";
import styles from "@/styles/Home.module.scss";

const StyleContext = createContext("light");

const Home = () => {
  const [style, setStyle] = useState("light");

  const toggleStyle = () => {
    setStyle(prevStyle => (prevStyle === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <StyleContext.Provider value={style}>
        <button onClick={toggleStyle}>Toggle Style</button>
        <div className={`${styles.home} ${styles[style]}`}>HomePage</div>
        <h2>Questa è la mia Homepage</h2>
      </StyleContext.Provider>
    </div>
  );
};

export default Home;
