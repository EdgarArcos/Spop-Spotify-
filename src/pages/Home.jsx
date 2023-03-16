import { useEffect } from "react";
import { makeRequest } from "../api/api-utils";

export const Home = () => {
  useEffect(() => {
    makeRequest("tracks").then((data) => console.log(data));
  }, []);

  return <div>Home</div>;
};
