// import { useState, useRef } from "react";
// import Avatar from "react-avatar-edit";
// import { Dialog } from "primereact/dialog";
// import { Button } from "primereact/button";
// import { InputText } from "primereact/inputtext";
// import img from "./set-profile-picture.png";

// export const ProfilePicture = () => {
//   const [imageCrop, setImageCrop] = useState(false);
//   const [image, setImage] = useState("");
//   const [src, setSrc] = useState(false);
//   const [profile, setProfile] = useState([]);
//   const [preview, setPreview] = useState(false);

//   const profileFinal = profile.map((item) => item.preview);

//   const onClose = () => {
//     setPreview(null);
//   };

//   const onCrop = (view) => {
//     setPreview(view);
//   };

//   const cancel = () => {
//     setImageCrop(false);
//   };

//   const saveCropImage = () => {
//     setProfile([{ preview }]);
//     setImageCrop(false);
//   };

//   return (
//     <div>
//       <div className="profile_img text-center">
//         <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:pt-10 ">
//           <img
//             onClick={() => setImageCrop(true)}
//             src={profileFinal.length ? profileFinal : img}
//             alt="Profile picture"
//             className="sm:cursor-pointer sm:mt-4 sm:w-40 sm:h-40 sm:border-2 sm:border-teal sm:object-cover sm:rounded-full
//              mt-4 w-20 h-20 border-2 border-teal object-cover rounded-full"
//           />
//           <label
//             htmlFor=""
//             className="mt-3 font-semibold text-2xl sm:mt-3 sm:font-semibold sm:text-4xl"
//           >
//             Username
//           </label>
//           <Dialog
//             visible={imageCrop}
//             onHide={() => setImageCrop(false)}
//             className="sm:absolute sm:top-0 sm:left-[23rem] absolute top-0 left-[2rem]"
//           >
//             <div className=" sm:flex sm:flex-col sm:items-center sm:bg-graytext sm:border-2 sm:border-teal sm:rounded">
//               <Avatar
//                 width={700}
//                 height={500}
//                 onCrop={onCrop}
//                 onClose={onClose}
//                 src={src}
//                 shadingColor={"#474649"}
//                 backgroundColor={"#474649"}
//                 // className={styles.container}
//                 // class="container"
//               />
//               <div className="flex flex-row justify-around w-12 items-center mt-4 space-x-20 mb-2">
//                 <Button
//                   onClick={cancel}
//                   label="Cancel"
//                   icon="pi pi-check"
//                   className="sm:py-0 sm:px-2 sm:text-black sm:bg-teal sm:rounded-lg sm:w-18 sm:h-10 sm:text-1xl sm:hover:opacity-80 sm:transition sm:duration-500
//                     py-0 px-2 text-black bg-teal rounded-lg w-18 h-10 text-1xl hover:opacity-80 transition duration-500"
//                 />
//                 <Button
//                   onClick={saveCropImage}
//                   label="Save"
//                   icon="pi pi-check"
//                   className="sm:py-0 sm:px-5 sm:text-white sm:bg-cancel sm:rounded-lg sm:w-20 sm:h-10 sm:text-1xl sm:hover:opacity-80 sm:transition sm:duration-500
//                     py-0 px-5 text-white bg-cancel rounded-lg w-20 h-10 text-1xl hover:opacity-80 transition duration-500"
//                 />
//               </div>
//             </div>
//           </Dialog>
//           <InputText
//             type="file"
//             accept="/image/*"
//             style={{ display: "none" }}
//             onChange={(event) => {
//               const file = event.target.files[0];
//               if (file && file.type.substring(0, 5) === "image") {
//                 setImage(file);
//               } else {
//                 setImage(null);
//               }
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import profileimg from "./set-profile-picture.png"
import { editImgFetch } from "../../../api/api-utils";



  return (
    <div className="sm:pt-20 pt-10 pb-16 ">
      <div className="sm:m-auto sm:rounded-full sm:w-40 sm:h-40 m-auto rounded-full w-40 h-40">
        <img
          src={img || profileimg}
          alt="Profile image"
          className="sm:object-cover sm:border-2 sm:border-teal sm:rounded-full sm:w-40 sm:h-40 object-cover border-2 border-teal rounded-full w-40 h-40"
        />
        <h3 className="sm:pt-6 sm:flex sm:justify-center sm:text-3xl pt-6 flex justify-center text-xl">
          Username
        </h3>
      </div>
      <div className="sm:flex sm:justify-center flex justify-center">
        <label
          className="sm:-mt-40 sm:cursor-pointer sm:rounded-full sm:w-40 sm:h-40 -mt-40 cursor-pointer rounded-full w-40 h-40"
          htmlFor="input"
        >
          <input
            type="file"
            className="hidden"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={uploadImage}
          />
        </label>
      </div>
    </div>
  );








// const handleEditImage = (e) => {
//   const data = new FormData();
//   data.append("file", e.target.files[0]);
//   data.append("userId", authState.user.userId);
//   editImage(data);
// };

// return (
//   <div className="w-full flex flex-col items-center px-6 py-20 sm:px-[12rem] md:px-[18rem] lg:px-[25rem] xl:px-[30rem]">
//     <div className="relative h-40 mb-12">
//       <div className="rounded-full bg-icon w-40 h-40 flex items-center justify-center text-3xl overflow-hidden border ">
//         {user && user.img ? (
//           <img src={user.img} />
//         ) : (
//           user.username[0].toUpperCase()
//         )}
//       </div>
//       <label>
//         <TiCamera className="absolute bottom-0 right-3 bg-white rounded-full w-10 h-10 border-4 border-white outline cursor-pointer" />
//         <input type="file" className="hidden" onChange={handleEditImage} />
//       </label>
//     </div>
//     <label className="flex flex-col w-full text-xs realtive border-b">
//       Username
//       <input
//         type="text"
//         value={currentUsername}
//         onChange={(e) => setCurrentUsername(e.target.value)}
//         className="text-2xl bg-transparent border-b"
//         ref={inputRef}
//         disabled={!isEditing}
//         onBlur={saveInputChanges}
//         onKeyDown={(e) => e.key === "Enter" && saveInputChanges()}
//       />
//       <FiEdit2
//         className="absolute right-6 cursor-pointer sm:right-[12rem] md:right-[18rem] lg:right-[25rem] xl:right-[30rem]"
//         onClick={startEdit}
//       />
//     </label>
//   </div>
// );
// };



// export class ProfilePicture extends Component {
//   state = {
//     profileImg: "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=",
//   };
//   imageHandler = (e) => {
//     const reader = new FileReader();
//     console.log(reader)
//     reader.onload = () => {
//       if (reader.readyState === 2) {
//         this.setState({ profileImg: reader.result });
//       }
//     };
//     reader.readAsDataURL(e.target.files[0]);
//   };
//   render() {
//     const { profileImg } = this.state;
//     return (
      // <div className="sm:pt-20 pt-10 pb-16 ">
      //   <div className="sm:m-auto sm:rounded-full sm:w-40 sm:h-40 m-auto rounded-full w-40 h-40">
      //     <img
      //       src={profileImg}
      //       alt="Profile image"
      //       className="sm:object-cover sm:border-2 sm:border-teal sm:rounded-full sm:w-40 sm:h-40 object-cover border-2 border-teal rounded-full w-40 h-40"
      //     />
      //     <h3 className="sm:pt-6 sm:flex sm:justify-center sm:text-3xl pt-6 flex justify-center text-xl">
      //       Username
      //     </h3>
      //   </div>
      //   <div className="sm:flex sm:justify-center flex justify-center">
      //     <label
      //       className="sm:-mt-40 sm:cursor-pointer sm:rounded-full sm:w-40 sm:h-40 -mt-40 cursor-pointer rounded-full w-40 h-40"
      //       htmlFor="input"
      //     >
      //       <input
      //         type="file"
      //         className="hidden"
      //         accept="image/*"
      //         name="image-upload"
      //         id="input"
      //         onChange={this.imageHandler}
      //       />
      //     </label>
      //   </div>
      // </div>
//     );
//   }
// }

// export default ProfilePicture;
