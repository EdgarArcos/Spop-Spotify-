import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GoSearch } from 'react-icons/go';
import { FiTrash2 } from 'react-icons/fi';
import { AiFillEdit } from 'react-icons/ai';
import { deleteUser, searchUser } from '../../api/admin';

export const Admin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleEditRole = () => {
    console.log('Hello!');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const res = await deleteUser(id);
      if (res.data.ok) {
        const newResult = searchResult.filter(user => user.id !== id)
        setSearchResult(newResult)
      }
    }
  };

  const handleSubmit = async () => {
    const res = await searchUser({ inputValue });
    if (res.data.ok) {
      setSearchResult([res.data.user]);
    }
  };

  return (
    <>
      <h2 className='font-bold text-left text-5xl pl-60 pt-10 pb-1'>
        Administrator
      </h2>
      <hr className='border-solid border border-teal pt-1' />
      <div className='flex-col'>
        <div className='flex'>
          <input
            className='mt-20 ml-60 py-1 pr-0 pl-1 w-64 pr-0 text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent'
            type='search'
            name='filter'
            value={inputValue}
            placeholder='Search'
            aria-label='Search'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <GoSearch
            className='mt-20 h-8 w-8 ml-2 p-1 hover:opacity-60 transition duration-500 cursor-pointer'
            onClick={handleSubmit}
          />
        </div>
        <div className='flex justify-center mt-20'>
          <table className='ml-40 items-center'>
            <thead>
              <tr>
                <th className='h-12 w-40 border border-2 border-orange bg-graytext'>
                  User ID
                </th>
                <th className='h-12 w-40 border border-2 border-orange bg-graytext'>
                  Name
                </th>
                <th className='h-12 w-40 border border-2 border-orange bg-graytext'>
                  Email
                </th>
                <th className='h-12 w-40 border border-2 border-orange bg-graytext'>
                  Role
                </th>
                <th className='h-12 w-40 border border-2 border-orange bg-graytext'>
                  Action
                </th>
              </tr>
            </thead>
            {searchResult.length > 0 &&
              searchResult.map(({ id, name, email, role }) => (
                <tbody key={uuidv4}>
                  <tr className='text-center'>
                    <td className='border border-2 border-orange w-40 bg-darkOrange'>
                      <div className='w-40 px-2 overflow-x-auto hide-scrollbar'>
                        {id}
                      </div>
                    </td>
                    <td className='border border-2 border-orange w-40 bg-darkOrange'>
                      <div className='w-40 px-2 overflow-x-auto hide-scrollbar'>
                        {name}
                      </div>
                    </td>
                    <td className='border border-2 border-orange w-40 bg-darkOrange'>
                      <div className='w-40 px-2 overflow-x-auto hide-scrollbar'>
                        {email}
                      </div>
                    </td>
                    <td className='border border-2 border-orange w-40 bg-darkOrange'>
                      <div className='w-40 px-2 overflow-x-auto hide-scrollbar'>
                        {role}
                      </div>
                    </td>
                    <td className='m-4 border border-2 border-orange w-40 bg-darkOrange'>
                      <button
                        className='my-2 p-1 mr-4 text-1xl bg-yellow hover:opacity-60 transition duration-500 rounded'
                        onClick={handleEditRole}
                      >
                        <AiFillEdit />
                      </button>
                      <button
                        className='my-2 p-1 ml-4 text-1xl bg-cancel hover:opacity-60 transition duration-500 rounded'
                        onClick={() => handleDelete(id)}
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </>
  );
};

// const handleSelect = (event, user) => {
//   if (event.target.checked) {
//     setSelectedUsers([...selectedUsers, user]);
//   } else {
//     setSelectedUsers(
//       selectedUsers.filter((selectedUser) => selectedUser.id !== user.id)
//     );
//   }
// };

// const [selectedUserType, setSelectedUserType] = useState('artist');

// const [users, setUsers] = useState([]);
// const [selectedUsers, setSelectedUsers] = useState([]);
// const [selectedUserType, setSelectedUserType] = useState('artist');

// const handleUserTypeChange = (event) => {
//   setSelectedUserType(event.target.value);
// };

// useEffect(() => {
//   axios
//     .get('/users/')
//     .then((response) => {
//       setUsers(response.data);
//     })
//     .catch((error) => {
//       console.warn(error);
//     });
// }, []);

// const [searchParams, setSearchParams] = useSearchParams();
// const query = searchParams.get('q') ?? '';
// const handleInput = ({ target }) => {
//   const { value } = target;
//   setSearchParams({ q: value });
// };

// const filteredUsers = users.filter((user) => {
//   if (selectedUserType === 'artist') {
//     return user.type === 'artist';
//   } else if (selectedUserType === 'premium') {
//     return user.type === 'premium';
//   }
//   return true;
// });

/* DATABASE FETCH */

// const { users, setUsers } = useContext(ProductContext);
// const url = 'http://localhost:4000/dataBase';

// useEffect(() => {
//   const usersData = async () => {
//     const response = await fetch(url);
//     const json = await response.json();
//     return setUsers(json);
//   };
//   usersData();
// }, [users]);

// {
//   users
//     .filter(({ name }) => {
//       if (!query) return true;
//       else {
//         const nameLowerCase = name.toLowerCase();
//         return nameLowerCase.includes(query.toLowerCase());
//       }
//     })
//     .map((user) => {
//       return <User {...user} key={user.name} />;
//     });
// }
