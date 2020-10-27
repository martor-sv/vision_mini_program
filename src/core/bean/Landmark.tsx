import Calendar from "taro-ui/types/calendar";
import List = Calendar.List;

export  default  class Landmark {
  id: String
  name: String
  lat: number
  lng: number
  el: number
  addr: String
  addrTagList: Array<String>
  memo: String

}
