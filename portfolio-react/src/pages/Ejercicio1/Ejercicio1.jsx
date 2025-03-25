import { useState } from "react";

export const Ejercicio1 = () => {
  const [theme, setTheme] = useState({
    isDark: false,
    text: "Mode Dark"
  });

  const toggleTheme = () => {
    setTheme((prev) => ({
      isDark: !prev.isDark,
      text: prev.isDark ? "Mode Dark" : "Mode Light"
    }));
  };

  return (
    <section
      className="h-full flex justify-center items-center"
      style={{ backgroundColor: theme.isDark ? "black" : "white" }}
    >
      <button
        onClick={toggleTheme}
        className="h-8 flex items-center justify-center w-30 rounded-xl"
        style={{
          backgroundColor: theme.isDark ? "white" : "black",
          color: theme.isDark ? "black" : "white"
        }}
      >
        {theme.text}
      </button>
    </section>
  );
};
