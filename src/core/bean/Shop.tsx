import User from "./User";
import Group from "./Group";
import Landmark from "./Landmark";

export default class Shop {
  id: String
  name: String
  memo: String
  landmarkList: Array<Landmark>
  bindGroup: Group
  creater: User
  createTime: String
  lastUpdate: String

}
