import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    // withCredentials: true, // Required for Sanctum CSRF handling
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
});

export const getCsrfToken = async () => {
    await api.get("/sanctum/csrf-cookie");
};

export const request = async ({ ...options }, router) => {
  client.defaults.headers.common.Authorization = `Bearer ${getCookie("uate")}`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    if (error?.response?.status == 401) {
      Cookies.remove("uate");
      Cookies.remove("ue");
      Cookies.remove("account");
      localStorage.clear();
      router && router.push("/404");
    }
    // router && router.push('/404')
    return error;
  };
  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default api;
