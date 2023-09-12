"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const MyContext = createContext();
export function useLayoutProvider() {
  return useContext(MyContext);
}
function MyContextComponents({ children }) {
  const [navbarActive, setNavBarActive] = useState("home");
  const [isDetail, setIsDetails] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  const contextValue = useMemo(() => {
    return { navbarActive, setNavBarActive, isDetail, setIsDetails };
  }, [navbarActive, setNavBarActive, isDetail, setIsDetails]);
  return (
    <MyContext.Provider value={contextValue}>
      <main>{children}</main>
    </MyContext.Provider>
  );
}
export default MyContextComponents;
