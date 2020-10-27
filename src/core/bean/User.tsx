import ResourceInGroup from "./ResourceInGroup";
import Company from "./Company";

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
  roleInGroupPojoList: Array<ResourceInGroup>
}
