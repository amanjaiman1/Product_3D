import Cookies from "js-cookie";

export const useAuth = () => {
  const token = Cookies.get("access_token");
  const user = {
    token: token,
  };
  if (user) return true;
  return false;
};
