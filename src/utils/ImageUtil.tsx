import ServiceImpl from "../service/ServiceImpl";
import UrlConfig from "../common/UrlConfig";
import Taro from "@tarojs/taro";

export default class ImageUtil {
  // static UPLOAD_FILE = "/api1/file/image?url=";



  public static async getImageUrl(imgUrl):Promise<String> {
    let data = await  ServiceImpl.getInstance().getImageData(imgUrl)
    console.log(data)
    return  data as String;

  }




}
