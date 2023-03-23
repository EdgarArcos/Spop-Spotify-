import { createContext, useState} from 'react';

export const EmailContext = createContext();

const EmailContexts = ({children}) => {
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem({}))||[]);
    return (
        <EmailContext.Provider value={[email, setEmail]}>
            {children}
        </EmailContext.Provider>
    );
};

export default EmailContexts;