import { createContext, useState} from 'react';

export const UsersContext = createContext();

const UserName = ({children}) => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem({}))||[]);
    return (
        <UsersContext.Provider value={[users, setUsers]}>
            {children}
        </UsersContext.Provider>
    );
};

export default UserName;