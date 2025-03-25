import api, {getCsrfToken} from "utils/api";

export const register = async (data) => {
    await getCsrfToken();
    return api.post("/register", data);
};

export const login = async (email, password) => {
    await getCsrfToken();
    const response = await api.post("/login", {email, password});
    return response.data;
}

export const logout = async () => {
    await api.post("/logout");
}

export const getUser = async () => {
    const response = await api.get("/user", {withCredentials:true});
    return response.data;
}