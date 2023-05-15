import { useContext } from "react";
import { editImgFetch } from "../../api/userRequests";
import { ImgProfile } from "./ImgProfile";
import { UsersContext } from "../../context/UsersContext";

export const ProfilePicture = () => {
  const { user, editImg } = useContext(UsersContext);

  const handleEditImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("userId", user._id);
    editImgFetch(data)
      .then((response) => {
        editImg(response.data.img);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sm:pt-20 md:py-[5%] pt-10 pb-16 lg:pr-3">
      <label className="cursor-pointer text-[0.6rem] flex flex-col items-center justify-center hover:text-teal">
        <ImgProfile />
        Change the picture
        <input type="file" className="hidden" onChange={handleEditImage} />
      </label>
    </div>
  );
};
