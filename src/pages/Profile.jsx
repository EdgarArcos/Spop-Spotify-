import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

export const Profile = () => {
  const inputClass = "bg-newgray my-6 w-80 h-14 rounded-lg border border-teal outline-none";
  

  return (
    <article>
      <form>
      <BsFillArrowLeftCircleFill
       className='justify-start cursor-pointer'
        />
        <div className="flex flex-col items-center content-center mt-0">
          
          <h2 className="text-5xl">Edit profile</h2><br />
          <div className="rounded-full border-solid border-white bg-white text-9xl">O</div>
          <input type="text" placeholder="Email" className={inputClass} />
          <input type="text" placeholder="Password" className={inputClass} />
          <input type="text" placeholder="Sex" className={inputClass} />
          <div className="flex flex-row">
            <h2>Birthdate</h2>
            <input type="text" placeholder="Day" className={inputClass} />
            <input type="text" placeholder="Month" className={inputClass} />
            <input type="text" placeholder="Year" className={inputClass} />
          </div>
          <input
            type="text"
            placeholder="Country or region"
            className={inputClass}
          />
          <div className="flex flex-row">
            <button>Cancel</button>
            <button>Save profile</button>
          </div>
        </div>
      </form>
    </article>
  );
};
