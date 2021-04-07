import User from "./User";
import Alerter from "./Alerter";
import AlertHandlerJobStatus from "./AlertHandlerJobStatus";
import AlertHandleJobEvent from "./AlertHandleJobEvent";
import IdName from "./IdName";
import Landmark from "./Landmark";

export default class alertHandlerJob {

  static id: String
  static createrUid: String
  static createrName: String
  static alerterList: Array<Alerter>
  static createTime: String
  static securityCompanyId: String
  static securityCompanyName: String
  static assets: IdName
  static landmarkList: Array<Landmark>
  static guardGroupID: String
  static guardGroupName: String
  static maxGuards: number
  static guardList: Array<User>
  static handleLine: Array<AlertHandleJobEvent>
  static lastUpdate: String
  static status: AlertHandlerJobStatus


}
