import ServiceImpl from "../service/ServiceImpl";

export default class ImageUtil {

  public static async getImageUrl(imgUrl): Promise<String> {
    let data = await ServiceImpl.getInstance().getImageData(imgUrl)
    return data as String;
  }


}
