// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_APIKEY,
//   authDomain: "spop-1c633.firebaseapp.com",
//   projectId: "spop-1c633",
//   storageBucket: "spop-1c633.appspot.com",
//   messagingSenderId: "816751388676",
//   appId: "1:816751388676:web:7d007d0fd7cf2bb1f12d51"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// const provider = new GoogleAuthProvider()

// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//     .then((result)=>{
//       const name = result.user.displayName
//       const email = result.user.email
//       localStorage.setItem("name", name)
//       localStorage.setItem("email", email)
//     })
//     .catch((error) =>{
//       console.log(error);
//     })
// };
