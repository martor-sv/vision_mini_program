import IdName from "./IdName";
import Calendar from "taro-ui/types/calendar";
import Shop from "./Shop";

export default class Alerter {

  id: String
  jobId: String
  alerter: IdName
  shop: Shop
  alertTime: String
  audioList: Array<String>
  imageList: Array<String>
  videoList: Array<String>

}
