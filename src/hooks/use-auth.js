import { useSelector } from "react-redux";

function useAuth() {
  const { email, name, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    name,
    token,
    id,
  };
}

export default useAuth;
