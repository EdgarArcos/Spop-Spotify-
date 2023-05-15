import { useContext, useRef, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { UsersContext } from "../../context/UsersContext";
import { editUsernameFetch } from "../../api/userRequests";

export const UserInput = () => {
  const { user, editUsername } = useContext(UsersContext);

  const inputRef = useRef();

  const [currentUsername, setCurrentUsername] = useState(user.name);
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 1);
  };

  const saveInputChanges = async () => {
    setIsEditing(false);
    const res = await editUsernameFetch({
      newName: currentUsername,
      userId: user._id,
    });
    if (res.data.ok) editUsername(currentUsername);
  };

  return (
    <label className="flex flex-col w-10/12 text-xs relative border-b lg:w-5/12 xl:w-[45%]">
      Username
      <input
        type="text"
        value={currentUsername}
        onChange={(e) => setCurrentUsername(e.target.value)}
        className="text-2xl bg-transparent"
        ref={inputRef}
        disabled={!isEditing}
        onBlur={saveInputChanges}
        onKeyDown={(e) => e.key === "Enter" && saveInputChanges()}
      />
      <FiEdit2
        className="absolute right-0 cursor-pointer hover:text-teal"
        onClick={startEdit}
      />
    </label>
  );
};
