import {Constant} from "../common/Constant";
import Taro from '@tarojs/taro'

export default class ServiceOption {
  url: string;
  dataType:string = 'json';
  contentType = 'application/x-www-form-urlencoded'
  header:any = {accessToken: Taro.getStorageSync(Constant.token), version: '','content-type': "application/x-www-form-urlencoded"};
  // 请求参数
  data:any = {};
  method:string ='GET';
}
