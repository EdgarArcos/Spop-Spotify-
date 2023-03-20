import { useEffect, useState } from "react";
import { ContainerAllGenres, NavBarMov } from "../components/HomePage";

export const Home = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <div className="sm:flex">
      {screenWidth < 640 ? <NavBarMov /> : <div className="bg-teal w-40"></div>}
      <ContainerAllGenres />
    </div>
  );
};
