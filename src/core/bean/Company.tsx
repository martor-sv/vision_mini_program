
import User from "./User";
import Group from "./Group";

export default class Company {

  id: String
  name: String
  memo: String
  bindGroup: Group
  creater: User
  createTime: String
  lastUpdate: String

}
