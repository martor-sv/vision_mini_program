import Calendar from "taro-ui/types/calendar";
import ResourceInGroup from "./ResourceInGroup";
import Company from "./Company";
import List = Calendar.List;

export default class User {
  uid: String
  sn: String
  user: String
  pass: String
  name: String
  company: Company
  sex: String
  mobile: String
  photo: String
  memo: String
  createTime: String
  lastUpdate: String
  roleInGroupPojoList: List<ResourceInGroup>

}
