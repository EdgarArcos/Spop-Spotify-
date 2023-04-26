import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { BiUser } from "react-icons/bi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginRequest } from "../../api/userRequests";
import { ButtonLogin } from "./ButtonLogin";

export const InputsLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setUser } = useContext(UsersContext);

  const navigate = useNavigate();

  const submitForm = async (data) => {
    const res = await loginRequest(data);
    if (res.data?.ok) {
      setUser(res.data.user);
      navigate("/");
    } else {
      console.log(res);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="relative">
        <input
          className="bg-newgray  my-6 w-80 h-14 rounded-lg placeholder: pl-8"
          placeholder="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
        />
        <div className="absolute top-11 insert-y-0 left-3 align-top">
          <BiUser />
        </div>
      </div>
      <div className="relative">
        <input
          className="bg-newgray mb-6 w-80 h-14 rounded-lg placeholder: pl-8"
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password require at least 5 characters",
            },
          })}
        />
        <div className="absolute top-5 insert-y-0 left-3 align-top">
          <HiOutlineLockClosed />
        </div>
      </div>
      <ButtonLogin />
    </form>
  );
};
