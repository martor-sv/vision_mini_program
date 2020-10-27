import Calendar from "taro-ui/types/calendar";
import User from "./User";
import Alerter from "./Alerter";
import Shop from "./Shop";
import AlertHandlerJobStatus from "./AlertHandlerJobStatus";
import AlertHandleJobEvent from "./AlertHandleJobEvent";

class AlertHandlerJob {

  id: String
  creater: User
  alerterList: Array<Alerter>
  createTime: String
  shop: Shop
  status: AlertHandlerJobStatus
  maxGuard:number
  guardList: Array<User>
  handleLine: Array<AlertHandleJobEvent>
  lastUpdate: String

}
