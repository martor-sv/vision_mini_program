import {Constant} from "../common/Constant";

export default class ServiceOption {
  url: string;
  dataType:string = 'json';
  contentType = 'application/json'
  header:any = {token: Taro.getStorageSync(Constant.token), version: '','content-type': "application/x-www-form-urlencoded"};
  // 请求参数
  data:any = {};
  method:string ='GET';
}
