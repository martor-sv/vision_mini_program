import Taro from "@tarojs/taro";

export default class ServiceOption {
  url: string;
  dataType:string = 'json';
  contentType = 'application/json'
  header:any = {token: Taro.getStorageSync('token'), version: '', client: 'huohua-mini-program','content-type': "application/x-www-form-urlencoded"};
  // 请求参数
  data:any = {};
  method:string ='GET';
}
