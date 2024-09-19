import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const MedicoProvider = ({children}) => {
    const [medico, setMedico] = useState(null);

    return (
        <UserContext.Provider value={{ medico, setMedico }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    return useContext(UserContext);
}
