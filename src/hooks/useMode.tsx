import { useEffect, useState } from "react";

export const useMode = () => {
  const [mode, setMode] = useState<"light" | "dark">(
    typeof window !== "undefined" && localStorage?.theme === "dark"
      ? "dark"
      : "light"
  );

  function toogleMode() {
    if (mode === "dark") return setMode("light");
    setMode("dark");
  }

  function handleLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.setAttribute("data-mode", "dark");
      handleLocalStorage("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-mode", "");
      handleLocalStorage("theme", "light");
    }
  }, [mode]);

  return { mode, toogleMode, handleLocalStorage };
};
