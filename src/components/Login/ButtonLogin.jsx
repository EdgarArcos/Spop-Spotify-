import { useAuth0 } from "@auth0/auth0-react";


export const ButtonLogin = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        className=" my-10 bg-transparent w-80 border-2 border-teal rounded-lg text-2xl hover:bg-teal"
      >
        <p className="py-2 px-5 text-teal hover:text-black">Log in</p>
      </button>
    </div>
  );
};
