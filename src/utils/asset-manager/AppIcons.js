import ShowPassword from "@assets/icons/eye-line.svg";
import HidePassword from "@assets/icons/eye-off-line.svg";
import Lock from "@assets/icons/lock.svg";
import Mail from "@assets/icons/mail.svg";
import User from "@assets/icons/user-fill.svg";
import User2 from "@assets/icons/user-4-line.svg";
import Logout from "@assets/icons/logout.svg";

class AppIcons {
  static GetIcon(type) {
    switch (type) {
      case "show-password":
        return ShowPassword;
      case "hide-password":
        return HidePassword;
      case "lock":
        return Lock;
      case "mail":
        return Mail;
      case "user":
        return User;
      case "user2":
        return User2;
      case "logout":
        return Logout;
      default:
        return null;
    }
  }
}

export default AppIcons;
