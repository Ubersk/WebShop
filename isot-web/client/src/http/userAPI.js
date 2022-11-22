import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth"); //Если токен не валидный, то пользователь разлогинивается
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
