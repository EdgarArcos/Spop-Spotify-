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
      userId: user.id,
    });
    if (res.data.ok) editUsername(currentUsername);
  };

  return (
    <label className="flex flex-col w-full text-xs realtive border-b">
      Username
      <input
        type="text"
        value={currentUsername}
        onChange={(e) => setCurrentUsername(e.target.value)}
        className="text-2xl bg-transparent border-b"
        ref={inputRef}
        disabled={!isEditing}
        onBlur={saveInputChanges}
        onKeyDown={(e) => e.key === "Enter" && saveInputChanges()}
      />
      <FiEdit2
        className="absolute right-6 cursor-pointer sm:right-[12rem] md:right-[18rem] lg:right-[25rem] xl:right-[30rem]"
        onClick={startEdit}
      />
    </label>
  );
};
