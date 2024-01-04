import { createContext } from "react";

const contextAuth = createContext({
    user: {},
    token: '',
    login: () => {},
    logout: () => {},
})

export default contextAuth;