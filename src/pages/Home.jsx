import { useEffect } from "react";
import { makeRequest } from "../api/api-utils";

export const Home = () => {
  useEffect(() => {
    const response = makeRequest("tracks");
  }, []);

  return (
    <div className="bg-gray-900">
      <p className="text-red-500">Home</p>
    </div>
  );
};
