import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { FiTrash2 } from 'react-icons/fi';
import { deleteUser, searchUser, updateUserRole } from '../../api/admin';
import { IoArrowBackOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import { useScreenWidth } from '../../hooks/useScreenWidth';

const Admin = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const { logout } = useAuth0();
  const screenWidth = useScreenWidth();

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const res = await deleteUser(id);
      if (res.data.ok) {
        const newResult = searchResult.filter((user) => user._id !== id);
        setSearchResult(newResult);
      }
    }
  };

  const handleSubmit = async () => {
    const res = await searchUser({ inputValue });
    if (res.data.ok) {
      setSearchResult(res.data.users);
    }
  };

  const handleEditRole = async (e, id) => {
    if (window.confirm("Edit user's role?")) {
      const res = await updateUserRole(e.target.value, id);
      if (res.data.ok) {
        const newResult = searchResult.filter((user) => user.id !== id);
        setSearchResult(newResult);
      }
    }
  };

  return (
    <>
      <h2 className='flex justify-center text-3xl font-bold text-left sm:text-5xl pt-10 pb-1'>
        Administrator
      </h2>
      <div className="flex items-center justify-between p-3 min-[640px]:justify-end">
        <IoArrowBackOutline className="text-2xl cursor-pointer min-[640px]:hidden" />
        <RiLogoutCircleLine
          className="text-xl ml-5 hover:text-teal cursor-pointer lg:text-2xl"
          onClick={logout}
        />
      </div>
      <hr className='border-solid border border-teal pt-1' />
      <div className='flex-col'>
        <div className='flex justify-center'>
          <input
            className='m-4 sm:mt-5  py-1 pr-0 pl-1 w-64 text-black focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent'
            type='search'
            name='filter'
            value={inputValue}
            placeholder='Search'
            aria-label='Search'
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleSubmit}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          />
          <GoSearch
            className=' mt-5 h-7 w-7 ml-2 p-1 hover:opacity-60 transition duration-500 cursor-pointer '
            onClick={handleSubmit}
          />
        </div>

        <div>
          {screenWidth < 640 ? (

            <div className="grid grid-cols-1">
              {searchResult.length > 0 &&
              searchResult.map(({ _id, name, email, role }) => (
              <div key={_id} className="bg-transparent p-4  my-1 rounded-lg">
                <div className="flex flex-col justify-center items-center text-sm">
                  <div className="w-full">
                    <section className='flex justify-center border-2 border-teal bg-graytext'>
                    Name
                    </section>
                    <section className='flex justify-center border-2  border-teal  bg-cyan-900'>
                        {name}
                    </section>
                  </div>
                  <div className="w-full">
                    <section className='flex justify-center border-2 border-teal bg-graytext'>
                    Email
                    </section>
                    <section className='flex justify-center border-2  border-teal  bg-cyan-900'>
                        {email}
                    </section>
                  </div>
                  <div className="w-full">
                    <section className='flex justify-center border-2 border-teal bg-graytext'>
                    Role
                    </section>
                    <section>
                    <select
                          name='role'
                          className='flex justify-center border-2 w-full border-teal  bg-cyan-900'
                          defaultValue={role}
                          onChange={(e) => handleEditRole(e, _id)}
                        >
                          <option value='Artist'>Artist</option>
                          <option value='User'>User</option>
                        </select>
                        </section>
                  </div>
                  <div className="w-full">
                    <section className='flex justify-center border-2 border-teal bg-graytext'>
                    Action
                    </section>
                    <section className='flex justify-center border-2  border-teal  bg-cyan-900'>
                      <button
                        className='my-2 p-1 text-1xl bg-cancel hover:opacity-60 transition duration-500 rounded'
                        onClick={() => handleDelete(_id)}
                      >
                        <FiTrash2 />
                      </button>
                    </section>
                  </div>
                  
                </div>
                
              </div>
              ))}
            </div>



          ) : (
        <div className='flex justify-center mt-16'>
          <table className='items-center'>
            <thead>
              <tr>
                <th className='sm:hidden md:flex md:justify-center md:items-center md:h-12 md:w-40  md:border-2 md:border-teal md:bg-graytext'>
                  User ID
                </th>
                <th className='h-12 w-40  border-2 border-teal bg-graytext'>
                  Name
                </th>
                <th className='h-12 w-40 border-2 border-teal bg-graytext'>
                  Email
                </th>
                <th className='h-12 w-40  border-2 border-teal bg-graytext'>
                  Edit Role
                </th>
                <th className='h-12 w-40 border-2 border-teal bg-graytext'>
                  Action
                </th>
              </tr>
            </thead>
            {searchResult.length > 0 &&
              searchResult.map(({ _id, name, email, role }) => (
                <tbody key={_id}>
                  <tr className='text-center'>
                    <td className='sm:hidden md:flex md:items-center md:justify-center md:border-2 md:border-teal md:h-12 md:w-40 md:bg-cyan-900'>
                      <div className='w-40 px-2 overflow-x-auto hide-scrollbar'>
                        {_id}
                      </div>
                    </td>
                    <td className='border-2  border-teal w-40 bg-cyan-900'>
                      <div className='w-40 px-2 overflow-x-auto hide-scrollbar'>
                        {name}
                      </div>
                    </td>
                    <td className='border-2  border-teal w-40 bg-cyan-900'>
                      <div className='w-40 px-2 overflow-x-auto hide-scrollbar'>
                        {email}
                      </div>
                    </td>
                    <td className='border-2  border-teal w-40 bg-cyan-900'>
                      <div className='w-40 px-1 overflow-x-auto hide-scrollbar'>
                        <select
                          name='role'
                          className='outline-none  border-teal w-40 bg-cyan-900'
                          defaultValue={role}
                          onChange={(e) => handleEditRole(e, _id)}
                        >
                          <option value='Artist'>Artist</option>
                          <option value='User'>User</option>
                        </select>
                      </div>
                    </td>
                    <td className='m-4 border-2  border-teal w-40 bg-cyan-900'>
                      <button
                        className='my-2 p-1 text-1xl bg-cancel hover:opacity-60 transition duration-500 rounded'
                        onClick={() => handleDelete(_id)}
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
)}
        </div>
      </div>
    </>
  );
};

export default Admin