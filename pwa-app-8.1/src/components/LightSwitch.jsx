import { useEffect, useState } from "react";

function LightSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      style={{
        fontSize: "1.2rem",
        margin: "1em",
        padding: "0.5em 1em",
        borderRadius: "8px",
        border: "1px solid #ccc",
        cursor: "pointer",
        background: darkMode ? "#fff" : "#222",
        color: darkMode ? "#222" : "#fff",
      }}
    >
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default LightSwitch;