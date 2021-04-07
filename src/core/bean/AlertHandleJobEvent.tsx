import Calendar from "taro-ui/types/calendar";
import IdName from "./IdName";
import Landmark from "./Landmark";
import User from "./User";
import Footprint from "./Footprint";

export default class AlertHandleJobEvent {
  id:String
  jobId:String
  handler: IdName
  reportTime: String
  handleTime: String
  action: String
  objectList: Array<IdName>
  content: String
  aiReview: String
  aiMessage: String
  audioList: Array<String>
  imageList: Array<String>
  videoList: Array<String>
  description: String


}
