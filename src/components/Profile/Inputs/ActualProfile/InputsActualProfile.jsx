import { useEffect, useState } from "react";
import { makeRequest } from "../../../../api/api-utils";
import { ActualEmail } from "./ActualEmail";
import { ActualUsername } from "./ActualUsername";

export const InputsActualProfile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    makeRequest("user").then((data) => setUser(data));
  }, []);

  return (
    <>
      <div
        className="sm:flex sm:flex-col sm:items-center sm:content-center sm:space-y-0
      flex flex-col items-center content-center space-y-2"
      >
        <br />
        <ActualUsername username={user.length > 0 && user[0].first_name} />
        <ActualEmail email={user.length > 0 && user[0].email} />
        <br />
      </div>
    </>
  );
};
