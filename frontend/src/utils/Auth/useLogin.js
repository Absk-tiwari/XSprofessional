import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import request from "../api";
import { LoginAPI } from "../AxiosUtils/API";
import { useRouter } from "next/router";

const LoginHandle = (responseData, router, setShowBoxMessage, setCookie) => {
  if (responseData.status === 200) {
    setCookie("uate", responseData.data?.access_token, { path: "/", expires: new Date(Date.now() + 24 * 60 * 6000) });
    const ISSERVER = typeof window === "undefined";
    if (typeof window !== "undefined") {
      setCookie("account", JSON.stringify(responseData.data))
      localStorage.setItem("account", JSON.stringify(responseData.data));
    }
    router.push("/");
  } else {
    setShowBoxMessage(responseData.response.data.message);
  }
};

const useHandleLogin = (setShowBoxMessage) => {
  const [cookies, setCookie] = useCookies(["ue", "uate", "account"]);
  const router = useRouter();
  return useMutation(
    {
      mutationFn: (data) =>
        request({
          url: login,
          method: "post",
          data,
        },router),
      onSuccess: (responseData) => LoginHandle(responseData, router, setShowBoxMessage, setCookie)
    }
  );
};

export default useHandleLogin;
