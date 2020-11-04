import {Constant} from "../common/Constant";
import Taro from '@tarojs/taro'

export default class ServiceOption {
  url: string;
  dataType: string = 'json';
  contentType = 'application/x-www-form-urlencoded;charset=utf-8'
  header: any = {
    accessToken: Taro.getStorageSync(Constant.token),
    version: '',
    'content-type': "application/x-www-form-urlencoded;charset=utf-8"
  };
  // 请求参数
  data: any = {};
  method: string = 'GET';
  // success(res){
  //   console.log(res.statusCode)
  //   if (res.statusCode == 422){
  //     // this.reLogin()
  //   }
  // }

  // async reLogin() {
  //   let result: any = await ServiceImpl.getInstance().login()
  //   Taro.setStorageSync(Constant.token,result['accessToken'])
  //   Taro.setStorageSync(Constant.refreshToken,result['refreshToken'])
  // }
}

