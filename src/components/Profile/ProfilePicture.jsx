import { useContext } from "react";
import { editImgFetch } from "../../api/userRequests";
import { ImgProfile } from "./ImgProfile";
import { UsersContext } from "../../context/UsersContext";

export const ProfilePicture = () => {
  const { user, editImg } = useContext(UsersContext);

  const handleEditImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("userId", user && user.id);
    editImgFetch(data)
      .then((response) => {
        editImg(response.data.img);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sm:pt-20 pt-10 pb-16 ">
      <label className="mt-40 cursor-pointer rounded-full w-40 h-40">
        <ImgProfile />
        Change the picture
        <input type="file" className="hidden" onChange={handleEditImage} />
      </label>
    </div>
  );
};
