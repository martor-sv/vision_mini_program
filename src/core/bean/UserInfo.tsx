import ResourceInGroup from "./ResourceInGroup";

export  default class UserInfo {
  user: String
  pass: String
  accessToken: String
  refreshToken: String
  roleInGroupList: Array<ResourceInGroup>
}
