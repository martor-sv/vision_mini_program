import Taro from '@tarojs/taro'
import {Constant} from "./Constant";
import User from "../core/bean/User";
import ResourceInGroup from "../core/bean/ResourceInGroup";

export default class GlobalUserInfo {

  /**
   * 获取组id
   */

  static getGroupId(): String {
    let userInfo: User = Taro.getStorageSync(Constant.userInfo)

    if (userInfo != null &&
      userInfo.roleInGroupPojoList != null &&
      userInfo.roleInGroupPojoList.length > 0) {
      let roleInGroup: ResourceInGroup = userInfo.roleInGroupPojoList[0];
      if (roleInGroup.groupId != null) {
        return roleInGroup.groupId;
      }
    }
    return "";
  }

  /**
   * 获取UserId
   */
  static getUserTd(): String {
    return (Taro.getStorageSync(Constant.userInfo) as User).uid
  }

}
