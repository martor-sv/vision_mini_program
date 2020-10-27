import User from "./User";
import Group from "./Group";
import Calendar from "taro-ui/types/calendar";
import List = Calendar.List;
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
