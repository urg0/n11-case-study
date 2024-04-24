import AppIcons from "@utils/asset-manager/AppIcons";

import CookieService from "@utils/cookies.service";
import { COOKIES } from "@utils/cookies.service";

export const getIconPath = (iconName) => {
  return AppIcons.GetIcon(iconName);
};

export const isAuthenticated = () => {
  const authToken = CookieService.getCookie(COOKIES.AUTH_TOKEN);
  return authToken;
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
