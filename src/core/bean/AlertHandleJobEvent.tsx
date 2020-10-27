import Calendar from "taro-ui/types/calendar";
import IdName from "./IdName";
import Landmark from "./Landmark";
import User from "./User";
import Footprint from "./Footprint";

export default class AlertHandleJobEvent {
  handler: User
  reportTime: String
  action: String
  footprint: Footprint
  landMark: Landmark
  content: String
  objectList: Array<IdName>
  aiReview: String
  aiMessage: String
  audioList: Array<String>
  imageList: Array<String>
  videoList: Array<String>
  description: String


}
