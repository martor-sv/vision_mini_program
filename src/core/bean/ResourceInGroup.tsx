import Calendar from "taro-ui/types/calendar";
import IdName from "./IdName";
import List = Calendar.List;

export  default  class ResourceInGroup {
  groupId: String
  groupName: String
  resourceList: List<IdName>

}
