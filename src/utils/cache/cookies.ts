import CacheKey from "@/constants/cache-key.ts"
import Cookies from "js-cookie"

export const getToken = () => {
  try {
    const token = Cookies.get(CacheKey.TOKEN);
    console.log(token, CacheKey.TOKEN);
    return token;
  } catch (error) {
    console.log(error);
  }
}
export const setToken = (token: string) => {
  Cookies.set(CacheKey.TOKEN, token)
}
export const removeToken = () => {
  Cookies.remove(CacheKey.TOKEN)
}