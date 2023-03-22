import { createContext, useState, useEffect} from 'react';

export const UsersContext = createContext();

const CartProvider = ({children}) => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem({}))||[]);
    return (
        <UsersContext.Provider value={[users, setUsers]}>
            {children}
        </UsersContext.Provider>
    );
};

export default CartProvider;