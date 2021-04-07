import User from "./User";
import Alerter from "./Alerter";
import Shop from "./Shop";
import AlertHandlerJobStatus from "./AlertHandlerJobStatus";
import AlertHandleJobEvent from "./AlertHandleJobEvent";
import IdName from "./IdName";
import Landmark from "./Landmark";

export default class alertHandlerJob {

  id: String
  createrUid: String
  createrName: String
  alerterList: Array<Alerter>
  createTime: String
  status: AlertHandlerJobStatus
  maxGuards: number
  guardList: Array<User>
  handleLine: Array<AlertHandleJobEvent>
  lastUpdate: String
  assets:IdName
  landmarkList:Array<Landmark>
}
