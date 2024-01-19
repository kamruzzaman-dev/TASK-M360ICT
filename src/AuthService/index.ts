import { setToLocalStorage } from "../utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage("m366ictAuthKey-kamruzzaman", accessToken as string);
};
