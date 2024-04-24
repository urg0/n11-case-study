import ShowPassword from "@assets/icons/eye-line.svg";
import HidePassword from "@assets/icons/eye-off-line.svg";
import Lock from "@assets/icons/lock.svg";
import Mail from "@assets/icons/mail.svg";
import User from "@assets/icons/user-fill.svg";
import User2 from "@assets/icons/user-4-line.svg";
import User3 from "@assets/icons/user-follow-line.svg";
import Logout from "@assets/icons/logout.svg";
import Overview from "@assets/icons/pie-chart.svg";
import Check from "@assets/icons/check.svg";
import Cross from "@assets/icons/cross.svg";
import Money from "@assets/icons/money.svg";
import MoneyFill from "@assets/icons/money-fill.svg";
import Calendar from "@assets/icons/calendar.svg";
import Order from "@assets/icons/order.svg";
import Shopping from "@assets/icons/shopping.svg";
import FileUser from "@assets/icons/file-user.svg";
import LineChart from "@assets/icons/line-chart.svg";
import Clock from "@assets/icons/time-fill.svg";
import Search from "@assets/icons/search.svg";
import Add from "@assets/icons/add.svg";

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
      case "user3":
        return User3;
      case "logout":
        return Logout;
      case "overview":
        return Overview;
      case "cross":
        return Cross;
      case "check":
        return Check;
      case "money":
        return Money;
      case "money-fill":
        return MoneyFill;
      case "calendar":
        return Calendar;
      case "file-user":
        return FileUser;
      case "order":
        return Order;
      case "shopping":
        return Shopping;
      case "line-chart":
        return LineChart;
      case "clock":
        return Clock;
      case "search":
        return Search;
      case "add":
        return Add;
      default:
        return null;
    }
  }
}

export default AppIcons;
