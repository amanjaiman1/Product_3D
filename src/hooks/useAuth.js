export const useAuth = () => {
  const user = {
    token: document.cookie.access_token,
  };
  return user && user.token;
};
