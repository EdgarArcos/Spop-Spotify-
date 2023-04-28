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



export const ProfilePicture = () => {

  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files[0];
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Profile_Picture_Spop");
    setLoading(true);
    const res = await fetch("https://api.cloudinary.com/v1_1/dycz1nib9/Profile_Picture_Spop/upload", {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    console.log(res);
    setImg(file.secure_url);
    setLoading(false);
  
    try {
      const response = await fetch("http://localhost:4000/users/img", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          public_id: file.public_id,
          secure_url: file.secure_url,
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="sm:pt-20 pt-10 pb-16 ">
    <div className="sm:m-auto sm:rounded-full sm:w-40 sm:h-40 m-auto rounded-full w-40 h-40">
      <img
        src={profileimg}
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
  )
}



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
