import { createContext } from "react";

const contextAuth = createContext({
    user: {},
    token: '',
    error: {},
    loading: false,
    login: () => {},
    logout: () => {},
    errorHandler: () => {},
    loadingHandler: () => {},
})

export default contextAuth;