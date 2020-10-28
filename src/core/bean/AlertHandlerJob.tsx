import User from "./User";
import Alerter from "./Alerter";
import Shop from "./Shop";
import AlertHandlerJobStatus from "./AlertHandlerJobStatus";
import AlertHandleJobEvent from "./AlertHandleJobEvent";

export default class alertHandlerJob {

  id: String
  creater: User
  alerterList: Array<Alerter>
  createTime: String
  shop: Shop
  status: AlertHandlerJobStatus
  maxGuard: number
  guardList: Array<User>
  handleLine: Array<AlertHandleJobEvent>
  lastUpdate: String
}
